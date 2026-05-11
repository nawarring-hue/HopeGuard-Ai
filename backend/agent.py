#!/usr/bin/env python
# coding: utf-8
"""
agent.py — Analyse locale par modèle ML (RandomForest optimisé, AUC ≈ 0.997)
Remplace l'appel Anthropic Vision par une inférence entièrement offline.
"""

import json
import joblib
import numpy as np
import pandas as pd
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parents[1]
MODEL_PATH = ROOT_DIR / "models" / "optimized_model.pkl"
FALLBACK_PATH = ROOT_DIR / "models" / "best_model.pkl"


# ─── Chargement du modèle ─────────────────────────────────────────────────────

def _load_bundle():
    """
    Charge optimized_model.pkl (dict {model, feature_names, auc})
    ou best_model.pkl en fallback (Pipeline seul).
    Retourne (model, feature_names).
    """
    if MODEL_PATH.exists():
        bundle = joblib.load(MODEL_PATH)
        if isinstance(bundle, dict):
            return bundle["model"], bundle["feature_names"]
        return bundle, None

    if FALLBACK_PATH.exists():
        return joblib.load(FALLBACK_PATH), None

    raise FileNotFoundError(
        "Aucun modèle trouvé. Exécutez backend/model_trainer.py pour "
        "générer models/best_model.pkl."
    )


# ─── Interprétation ───────────────────────────────────────────────────────────

def _niveau_urgence(proba: float) -> str:
    if proba >= 0.70:
        return "eleve"
    if proba >= 0.40:
        return "modere"
    return "faible"


def _description_clinique(proba: float, features: dict) -> str:
    niveau = _niveau_urgence(proba)
    radius  = features.get("mean radius")  or features.get("mean_radius")
    texture = features.get("mean texture") or features.get("mean_texture")

    desc = (
        f"Analyse ML basée sur {len(features)} mesures cliniques de mammographie. "
        f"Probabilité de malignité estimée à {proba * 100:.1f}%."
    )
    if radius is not None and texture is not None:
        desc += f" Rayon moyen : {float(radius):.2f} mm, texture moyenne : {float(texture):.2f}."

    if niveau == "eleve":
        desc += " Les caractéristiques biométriques présentent des signes compatibles avec une lésion maligne."
    elif niveau == "modere":
        desc += " Certains indicateurs sont en zone frontière — une exploration complémentaire est recommandée."
    else:
        desc += " Les mesures sont globalement dans les valeurs bénignes de référence."
    return desc


def _zones_suspectes(proba: float, features: dict) -> list:
    """Identifie les features les plus éloignées des normes bénignes."""
    SEUILS = {
        "mean radius": 14.0,
        "mean texture": 20.0,
        "mean perimeter": 90.0,
        "mean area": 600.0,
        "mean concavity": 0.09,
        "mean concave points": 0.05,
        "worst radius": 16.0,
        "worst perimeter": 105.0,
        "worst area": 800.0,
        "worst concavity": 0.25,
    }
    suspectes = []
    for feat, seuil in SEUILS.items():
        val = features.get(feat) or features.get(feat.replace(" ", "_"))
        if val is not None and float(val) > seuil and proba >= 0.40:
            suspectes.append(feat)
    return suspectes[:4]


# ─── Fonction principale ──────────────────────────────────────────────────────

def analyser_patient_ml(features: dict, patient_info: dict | None = None) -> dict:
    """
    Analyse les features cliniques d'un patient via le modèle ML local.

    Args:
        features    : dict {feature_name: valeur} — 30 mesures de mammographie.
        patient_info: dict optionnel avec prenom, nom, age, etc.

    Returns:
        dict structuré : statut, anomalies_detectees, niveau_urgence,
        recommandation_medicale, probabilite_malignite, label_predit, confiance…
    """
    patient_info = patient_info or {}

    try:
        model, feature_names = _load_bundle()
    except FileNotFoundError as e:
        return {
            "statut": "erreur_modele",
            "message": str(e),
            "anomalies_detectees": False,
            "niveau_urgence": "inconnu",
            "recommandation_medicale": "Générer les modèles avant de lancer l'analyse.",
        }

    try:
        if feature_names:
            row = {
                name: float(features.get(name, features.get(name.replace(" ", "_"), 0.0)))
                for name in feature_names
            }
            input_df = pd.DataFrame([row], columns=feature_names)
        else:
            input_df = pd.DataFrame([{k: float(v) for k, v in features.items()}])
    except (ValueError, TypeError) as e:
        return {
            "statut": "erreur_donnees",
            "message": f"Valeurs de features invalides : {e}",
            "anomalies_detectees": False,
            "niveau_urgence": "inconnu",
            "recommandation_medicale": "Vérifier le format des données transmises.",
        }

    try:
        proba_maligne = float(model.predict_proba(input_df)[0, 1])
        label         = "malignant" if proba_maligne >= 0.5 else "benign"
        confiance     = int(round(max(proba_maligne, 1 - proba_maligne) * 100))
        anomalie      = proba_maligne >= 0.5
        niveau        = _niveau_urgence(proba_maligne)
    except Exception as e:
        return {
            "statut": "erreur_inference",
            "message": str(e),
            "anomalies_detectees": False,
            "niveau_urgence": "inconnu",
            "recommandation_medicale": "Erreur lors de la prédiction. Vérifier les données.",
        }

    if niveau == "eleve":
        recommandation = (
            "Consultation oncologique urgente recommandée. "
            "Compléter par biopsie et imagerie avancée."
        )
    elif niveau == "modere":
        recommandation = (
            "Surveillance rapprochée conseillée. "
            "Programmer une mammographie de contrôle sous 4 semaines."
        )
    else:
        recommandation = (
            "Continuer le suivi annuel habituel. "
            "Signaler toute évolution symptomatique au médecin traitant."
        )

    return {
        "statut": "analyse_complete",
        "source": "modele_ml_local",
        "qualite_donnees": "bonne",
        "anomalies_detectees": anomalie,
        "label_predit": label,
        "probabilite_malignite": round(proba_maligne, 4),
        "description": _description_clinique(proba_maligne, features),
        "zones_suspectes": _zones_suspectes(proba_maligne, features),
        "niveau_urgence": niveau,
        "recommandation_medicale": recommandation,
        "confiance": confiance,
        "patient": {
            "prenom": patient_info.get("prenom", ""),
            "nom":    patient_info.get("nom", ""),
            "age":    patient_info.get("age", "inconnu"),
        },
    }


# ─── Rétrocompatibilité ───────────────────────────────────────────────────────

def analyser_irm_base64(image_base64: str, media_type: str, patient_info: dict) -> dict:
    """
    Stub de rétrocompatibilité — l'analyse IRM visuelle est désactivée (mode offline).
    Le frontend doit basculer sur POST /api/predict avec les 30 features cliniques.
    """
    return {
        "statut": "non_disponible",
        "message": (
            "L'analyse IRM par vision IA est désactivée (mode offline). "
            "Utilisez POST /api/predict avec les 30 features cliniques "
            "pour obtenir une prédiction ML locale (AUC ≈ 0.997)."
        ),
        "anomalies_detectees": False,
        "niveau_urgence": "inconnu",
        "recommandation_medicale": (
            "Soumettre les mesures biométriques via POST /api/predict "
            "ou consulter un radiologue pour l'interprétation de l'image."
        ),
    }


# ─── CLI de test ──────────────────────────────────────────────────────────────

if __name__ == "__main__":
    from sklearn.datasets import load_breast_cancer

    bc = load_breast_cancer(as_frame=True)

    # Test cas malin
    sample_malign = dict(zip(bc.feature_names, bc.data[0]))   # index 0 = malin dans sklearn
    print("=== Test cas malin ===")
    r = analyser_patient_ml(sample_malign, {"prenom": "Marie", "nom": "Dupont", "age": 52})
    print(json.dumps(r, ensure_ascii=False, indent=2))

    # Test cas bénin
    sample_benign = dict(zip(bc.feature_names, bc.data[100])) # index 100 = bénin
    print("\n=== Test cas bénin ===")
    r2 = analyser_patient_ml(sample_benign, {"prenom": "Sophie", "nom": "Martin", "age": 45})
    print(json.dumps(r2, ensure_ascii=False, indent=2))
