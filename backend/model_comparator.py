import joblib
import numpy as np
import matplotlib.pyplot as plt
from pathlib import Path
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score, confusion_matrix
from backend.data_collector import load_saved_data
from backend.data_preprocessor import preprocess_data

ROOT_DIR = Path(__file__).resolve().parents[1]
MODEL_FOLDER = ROOT_DIR / "models"
BEST_MODEL_PATH = MODEL_FOLDER / "best_model.pkl"
CHART_PATH = MODEL_FOLDER / "comparison_chart.png"


def compare_models():
    df = load_saved_data()
    X_train, X_test, y_train, y_test, feature_names = preprocess_data(df)
    records = []

    for model_path in MODEL_FOLDER.glob("*.pkl"):
        if model_path.name == "best_model.pkl":
            continue
        model = joblib.load(model_path)
        y_pred = model.predict(X_test)
        y_proba = model.predict_proba(X_test)[:, 1]
        record = {
            "name": model_path.stem,
            "accuracy": accuracy_score(y_test, y_pred),
            "precision": precision_score(y_test, y_pred),
            "recall": recall_score(y_test, y_pred),
            "f1_score": f1_score(y_test, y_pred),
            "auc_roc": roc_auc_score(y_test, y_proba),
            "confusion_matrix": confusion_matrix(y_test, y_pred).tolist(),
        }
        records.append(record)

    if not records:
        raise RuntimeError("Aucun modèle trouvé dans models/ à comparer.")

    best = max(records, key=lambda item: item["f1_score"])
    best_model = joblib.load(MODEL_FOLDER / f"{best['name']}.pkl")
    joblib.dump(best_model, BEST_MODEL_PATH)
    plot_comparison(records)
    return best, records


def plot_comparison(records):
    names = [record["name"] for record in records]
    f1_scores = [record["f1_score"] for record in records]
    auc_scores = [record["auc_roc"] for record in records]
    x = np.arange(len(names))
    width = 0.35
    plt.figure(figsize=(10, 6))
    plt.bar(x - width / 2, f1_scores, width, label="F1")
    plt.bar(x + width / 2, auc_scores, width, label="AUC-ROC")
    plt.xticks(x, names)
    plt.ylabel("Score")
    plt.title("Comparaison des modèles ML")
    plt.legend()
    plt.tight_layout()
    plt.savefig(CHART_PATH)
    plt.close()


if __name__ == "__main__":
    compare_models()
