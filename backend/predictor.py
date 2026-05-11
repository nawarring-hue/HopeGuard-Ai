import joblib
import pandas as pd
from pathlib import Path
from sklearn.datasets import load_breast_cancer

ROOT_DIR = Path(__file__).resolve().parents[1]
MODEL_PATH = ROOT_DIR / "models" / "best_model.pkl"
FEATURE_NAMES = list(load_breast_cancer().feature_names)


def load_model():
    if not MODEL_PATH.exists():
        return None
    return joblib.load(MODEL_PATH)


def validate_features(features: dict):
    missing = [name for name in FEATURE_NAMES if name not in features]
    extra = [name for name in features if name not in FEATURE_NAMES]
    if missing:
        return False, f"Features manquantes : {missing}"
    if extra:
        return False, f"Features inconnues : {extra}"
    return True, None


def predict_patient(features: dict) -> dict:
    is_valid, error = validate_features(features)
    if not is_valid:
        return {"error": error}

    model = load_model()
    if model is None:
        return {
            "error": "Modèle non trouvé. Exécutez backend/model_comparator.py pour générer models/best_model.pkl."
        }

    input_df = pd.DataFrame([{name: float(features[name]) for name in FEATURE_NAMES}])
    probability = float(model.predict_proba(input_df)[0, 1])
    label = "malignant" if probability >= 0.5 else "benign"

    return {
        "predicted_label": label,
        "malignancy_probability": round(probability, 4),
        "risk_score": int(round(probability * 100))
    }
