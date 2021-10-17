import logging
import time
from pathlib import Path

from fastapi import APIRouter, HTTPException

from riskout.fakenews import FakeNewsClassifier
from rest_api.schema import DocumentRequest
from rest_api.controller.utils import morphs
from rest_api.config import (
    VOCAB_PATH,
    FAKENEWS_MODEL_PATH
)


router = APIRouter()


fakenews_classifier = FakeNewsClassifier(
    vocab_path=VOCAB_PATH, 
    model_path=FAKENEWS_MODEL_PATH, 
    split_morphs=morphs)


@router.post("/fakenews")
async def fakenews(doc: DocumentRequest):
    start_time = time.time()

    if not doc:
        return {"detail": "Need doe"}
    if isinstance(doc.document, str):
        doc.document = [doc.document]

    results = {}
    try:
        prob = fakenews_classifier.predict(doc.document)
        results["true_score"] = prob
    except Exception as e:
        results["detail"] = "{}".format(e)
    finally:
        results["time"] = time.time() - start_time                
        return results