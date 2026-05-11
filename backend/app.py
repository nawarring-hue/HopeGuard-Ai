#!/usr/bin/env python
# coding: utf-8

import json
import os
import sys
from pathlib import Path
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

CURRENT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = CURRENT_DIR.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from backend.predictor import predict_patient, FEATURE_NAMES
from backend.agent import analyser_irm_base64, analyser_patient_ml
from backend.risk_engine import calculer_risk_score, generer_recommandations

PATIENTS_PATH = PROJECT_ROOT / "data" / "patients.json"
FRONTEND_DIR = PROJECT_ROOT / "frontend"

app = Flask(__name__, static_folder=None)
CORS(app)


def _load_patients() -> list[dict]:
    if not PATIENTS_PATH.exists():
        PATIENTS_PATH.parent.mkdir(parents=True, exist_ok=True)
        PATIENTS_PATH.write_text("[]", encoding="utf-8")
    return json.loads(PATIENTS_PATH.read_text(encoding="utf-8"))


def _save_patients(patients: list[dict]) -> None:
    PATIENTS_PATH.parent.mkdir(parents=True, exist_ok=True)
    PATIENTS_PATH.write_text(json.dumps(patients, ensure_ascii=False, indent=2), encoding="utf-8")


@app.route("/")
def index():
    return jsonify({"status": "HopeGuard AI en ligne", "version": "1.0"})


@app.route("/app")
def serve_frontend():
    return send_from_directory(FRONTEND_DIR, "index.html")


@app.route("/static/<path:filename>")
def serve_static(filename):
    return send_from_directory(FRONTEND_DIR, filename)


@app.route("/api/features", methods=["GET"])
def get_feature_list():
    return jsonify({"required_features": FEATURE_NAMES})


@app.route("/api/predict", methods=["POST"])
def predict():
    body = request.get_json(silent=True) or {}
    features = body.get("features")
    if not isinstance(features, dict):
        return jsonify({"error": "Le champ 'features' est requis et doit etre un objet JSON."}), 400
    prediction = predict_patient(features)
    if "error" in prediction:
        return jsonify(prediction), 400
    risk = calculer_risk_score(prediction["malignancy_probability"])
    return jsonify({"prediction": prediction, "risk_score": risk})


@app.route("/api/patients", methods=["GET"])
def list_patients():
    return jsonify({"patients": _load_patients()})


@app.route("/api/patients", methods=["POST"])
def add_patient():
    body = request.get_json(silent=True) or {}
    patients = _load_patients()
    patient_id = body.get("id") or f"HG-{len(patients) + 1:04d}"
    patient = {"id": patient_id, **body}
    patients.append(patient)
    _save_patients(patients)
    return jsonify(patient), 201


@app.route("/api/risk/<patient_id>", methods=["GET"])
def get_risk(patient_id: str):
    patients = _load_patients()
    patient = next((p for p in patients if p.get("id") == patient_id), None)
    if not patient:
        return jsonify({"error": "Patient introuvable"}), 404
    probability = float(patient.get("malignancy_probability", 0.5))
    risk = calculer_risk_score(probability)
    return jsonify({
        "patient_id": patient_id,
        "risk_score": risk,
        "recommandations": generer_recommandations(risk)
    })


@app.route("/api/irm/<patient_id>", methods=["POST"])
def analyse_irm(patient_id: str):
    body = request.get_json(silent=True) or {}
    if "image_base64" not in body:
        return jsonify({"error": "Le champ 'image_base64' est requis."}), 400
    patients = _load_patients()
    patient = next((p for p in patients if p.get("id") == patient_id), {})
    result = analyser_irm_base64(
        image_base64=body["image_base64"],
        media_type=body.get("media_type", "image/jpeg"),
        patient_info=patient
    )
    return jsonify(result)


@app.route("/api/dashboard/<patient_id>", methods=["GET"])
def dashboard(patient_id: str):
    patients = _load_patients()
    patient = next((p for p in patients if p.get("id") == patient_id), None)
    if not patient:
        return jsonify({"error": "Patient introuvable"}), 404
    probability = float(patient.get("malignancy_probability", 0.5))
    risk = calculer_risk_score(probability)
    return jsonify({
        "patient": patient,
        "risk_score": risk,
        "recommandations": generer_recommandations(risk),
        "status": "ok"
    })


if __name__ == "__main__":
    port = int(os.getenv("PORT", "8080"))
    debug = os.getenv("FLASK_DEBUG", "False").lower() == "true"
    app.run(host="127.0.0.1", port=port, debug=debug, use_reloader=False)
