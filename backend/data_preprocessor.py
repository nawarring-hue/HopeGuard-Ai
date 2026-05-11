#!/usr/bin/env python
# coding: utf-8

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from pathlib import Path
from sklearn.model_selection import train_test_split

ROOT_DIR = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT_DIR / "data" / "breast_cancer.csv"
EDA_PATH = ROOT_DIR / "data" / "eda_report.png"


def load_data(path: Path = DATA_PATH) -> pd.DataFrame:
    return pd.read_csv(path)


def run_eda(df: pd.DataFrame, output_path: Path = EDA_PATH) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    df = df.copy()
    df["target_label"] = df["target"].map({0: "benign", 1: "malignant"})
    plt.figure(figsize=(20, 18))
    plt.subplot(2, 2, 1)
    sns.heatmap(df.corr(), cmap="coolwarm", center=0, linewidths=0.5)
    plt.title("Matrice de corrélation")
    plt.subplot(2, 2, 2)
    df[["mean radius", "mean texture", "mean perimeter", "mean area"]].boxplot()
    plt.title("Boxplots des features principales")
    plt.xticks(rotation=45)
    plt.subplot(2, 2, 3)
    sns.histplot(data=df, x="mean radius", hue="target_label", kde=True)
    plt.title("Distribution du rayon moyen par classe")
    plt.subplot(2, 2, 4)
    sns.countplot(data=df, x="target_label")
    plt.title("Répartition benign/malignant")
    plt.tight_layout()
    plt.savefig(output_path)
    plt.close()


def preprocess_data(df: pd.DataFrame):
    df = df.copy()
    if "target_label" in df.columns:
        df = df.drop(columns=["target_label"])
    df = df.drop_duplicates()
    X = df.drop(columns=["target"])
    y = df["target"]
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    return X_train, X_test, y_train, y_test, X.columns.tolist()
