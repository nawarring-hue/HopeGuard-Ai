def calculer_risk_score(malignancy_probability: float) -> dict:
    """Convertit une probabilité de malignité en score de risque pour l'API."""
    bounded_probability = max(0.0, min(1.0, float(malignancy_probability)))
    score = int(round(bounded_probability * 100))
    if score < 30:
        niveau = "faible"
    elif score < 60:
        niveau = "modere"
    else:
        niveau = "eleve"

    return {
        "probability": round(bounded_probability, 4),
        "score": score,
        "niveau": niveau
    }


def generer_recommandations(risk: dict) -> list[str]:
    """Génère des recommandations selon le niveau de risque calculé."""
    score = int(risk.get("score", 0))
    recs = []

    if score >= 60:
        recs.append("Contacter rapidement le médecin traitant.")
        recs.append("Surveiller l'évolution des symptômes toutes les 4 heures.")
        recs.append("Éviter les efforts physiques intenses.")
    elif score >= 30:
        recs.append("Programmer une consultation médicale sous 48h.")
        recs.append("Hydratation régulière et repos suffisant.")
        recs.append("Mettre à jour le journal de symptômes quotidiennement.")
    else:
        recs.append("Poursuivre le suivi habituel.")
        recs.append("Maintenir une bonne hygiène de vie.")
        recs.append("Signaler toute aggravation inhabituelle.")

    return recs
