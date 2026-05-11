#!/usr/bin/env python
# coding: utf-8

import joblib
from pathlib import Path
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score
from sklearn.preprocessing import StandardScaler
from backend.data_collector import load_saved_data
from backend.data_preprocessor import preprocess_data

ROOT_DIR = Path(__file__).resolve().parents[1]
MODEL_FOLDER = ROOT_DIR / "models"


def train_models():
    MODEL_FOLDER.mkdir(parents=True, exist_ok=True)
    df = load_saved_data()
    X_train, X_test, y_train, y_test, feature_names = preprocess_data(df)

    candidates = {
        "logistic_regression": LogisticRegression(max_iter=2000, random_state=42),
        "random_forest": RandomForestClassifier(n_estimators=100, random_state=42),
        "svm": SVC(kernel="rbf", probability=True, random_state=42),
        "knn": KNeighborsClassifier(n_neighbors=5),
    }

    for name, model in candidates.items():
        pipeline = Pipeline([("scaler", StandardScaler()), ("classifier", model)])
        scores = cross_val_score(pipeline, X_train, y_train, cv=5, scoring="f1")
        pipeline.fit(X_train, y_train)
        joblib.dump(pipeline, MODEL_FOLDER / f"{name}.pkl")
        print(f"Modèle {name} entraîné - F1 CV moyen : {scores.mean():.4f} ± {scores.std():.4f}")


if __name__ == "__main__":
    train_models()
    print("Entraînement terminé. Modèles sauvegardés dans models/.")
