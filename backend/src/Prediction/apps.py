from django.apps import AppConfig
import pandas as pd
from joblib import load
import os


class PredictionConfig(AppConfig):
    name = 'Prediction'

    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    CLASSIFIER_FOLDER = os.path.join(
        BASE_DIR, 'Prediction/classifier/Personality')

    CLASSIFIER_FILE = os.path.join(
        CLASSIFIER_FOLDER, "code.joblib")
    classifier = load(CLASSIFIER_FILE)


class JobPredictionConfig(AppConfig):
    name = 'Prediction'

    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    CLASSIFIER_FOLDER = os.path.join(BASE_DIR, 'Prediction/classifier/Job')

    CLASSIFIER_FILE = os.path.join(
        CLASSIFIER_FOLDER, "code1.joblib")
    classifier = load(CLASSIFIER_FILE)
