# HopeGuard AI 🛡️
### Plateforme Intelligente de Suivi Oncologique

> Système de gestion intelligent des patients cancéreux
> combinant Machine Learning et Intelligence Artificielle
> pour la prédiction des risques et l'analyse IRM.

## 🚀 Technologies utilisées
- **Backend** : Python, Flask, Anthropic Claude API
- **Machine Learning** : Scikit-learn (RF, KNN, LR, SVM)
- **Frontend** : HTML5, CSS3, JavaScript vanilla
- **Base de données** : JSON (extensible vers SQL)
- **IA Vision** : Claude claude-3-5-sonnet (analyse IRM)

## 📁 Structure du projet
```text
HopeGuard-AI/
├── README.md
├── requirements.txt
├── .gitignore
├── .env.example
├── start.py
├── backend/
│   ├── __init__.py
│   ├── app.py
│   ├── agent.py
│   ├── risk_engine.py
│   ├── predictor.py
│   ├── model_trainer.py
│   ├── model_comparator.py
│   ├── data_collector.py
│   └── data_preprocessor.py
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── data/
│   ├── breast_cancer.csv
│   └── patients.json
├── models/
│   ├── best_model.pkl
│   ├── knn.pkl
│   ├── logistic_regression.pkl
│   ├── random_forest.pkl
│   └── svm.pkl
└── notebooks/
    ├── app.ipynb
    ├── agent.ipynb
    ├── risk_engine.ipynb
    ├── predictor.ipynb
    ├── model_trainer.ipynb
    ├── model_comparator.ipynb
    ├── data_collector.ipynb
    └── data_preprocessor.ipynb
```

## ⚙️ Installation

### Prérequis
- Python 3.10+
- pip

### Étapes
1. Cloner le repo  
   `git clone https://github.com/nawarring-hue/HopeGuard-Ai.git`  
   `cd HopeGuard-AI`

2. Installer les dépendances  
   `pip install -r requirements.txt`

3. Configurer les variables d'environnement  
   `cp .env.example .env`  
   Ajouter votre clé `ANTHROPIC_API_KEY` dans `.env`

4. Lancer le backend  
   `cd backend`  
   `python app.py`  
   API disponible sur `http://localhost:5000`

5. Ouvrir le frontend  
   Ouvrir `frontend/index.html` dans le navigateur  
   OU utiliser `http://localhost:5000/app`

## 🔌 API Endpoints

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | / | Statut API |
| POST | /api/patients | Ajouter patient |
| GET | /api/patients | Liste patients |
| GET | /api/risk/<id> | Risk Score ML |
| POST | /api/irm/<id> | Analyse IRM IA |
| GET | /api/dashboard/<id> | Dashboard complet |

## 🤖 Modèles ML disponibles
- Random Forest (best_model.pkl) ← utilisé par défaut
- K-Nearest Neighbors (knn.pkl)
- Logistic Regression (logistic_regression.pkl)
- Support Vector Machine (svm.pkl)

## 👥 Équipe
- Binôme A : Frontend & Interface utilisateur
- Binôme B : Backend, ML & IA

## 📜 Licence
Projet académique — HopeGuard AI © 2025
