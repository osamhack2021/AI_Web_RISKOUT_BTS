import os
from pathlib import Path

FILE_UPLOAD_PATH = os.getenv("FILE_UPLOAD_PATH", "./file_upload")

LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO")
ROOT_PATH = os.getenv("ROOT_PATH", "/")

ABSTRACTIVE_MODEL_PATH = os.getenv("KOBARTSUM_MODEL_PATH", "/home/user/models/kobart_summary")
SENTIMENT_MODEL_PATH = os.getenv("SENTIMENT_MODEL_PATH", "/home/user/models/distilkobert_sentiment")
NER_MODEL_PATH = os.getenv("NER_MODEL_PATH", "/home/user/models/distilkobert_ner")
FAKENEWS_MODEL_PATH = os.getenv("FAKENEWS_MODEL_PATH", "/home/user/models/snufc/SenCNN.st")
VOCAB_PATH = os.getenv("VOCAB_PATH", "/home/user/models/snufc/vocab.pkl")

# KOBARTSUM_MODEL_PATH = os.getenv("KOBARTSUM_MODEL_PATH", "./models/kobart_summary")
# SENTIMENT_MODEL_PATH = os.getenv("SENTIMENT_MODEL_PATH", "./models/distilkobert_sentiment")
# NER_MODEL_PATH = os.getenv("NER_MODEL_PATH", "./models/distilkobert_ner")
# FAKENEWS_MODEL_PATH = os.getenv("FAKENEWS_MODEL_PATH", "./models/snufc/SenCNN.st")
# VOCAB_PATH = os.getenv("VOCAB_PATH", "./models/snufc/vocab.pkl")

ROOT_PATH = os.getenv("ROOT_PATH", "/")
