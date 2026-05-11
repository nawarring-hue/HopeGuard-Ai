import pandas as pd
from pathlib import Path
from sklearn.datasets import load_breast_cancer

ROOT_DIR = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT_DIR / "data" / "breast_cancer.csv"


def collect_data(save_path: Path = DATA_PATH) -> pd.DataFrame:
    """Charge le dataset Breast Cancer Wisconsin et sauvegarde un CSV local."""
    save_path.parent.mkdir(parents=True, exist_ok=True)
    data = load_breast_cancer(as_frame=True)
    df = data.frame.copy()
    df["target"] = (1 - df["target"]).astype(int)
    df["target_label"] = df["target"].map({0: "benign", 1: "malignant"})
    df.to_csv(save_path, index=False)
    return df


def load_saved_data(path: Path = DATA_PATH) -> pd.DataFrame:
    if not path.exists():
        return collect_data(path)
    return pd.read_csv(path)
