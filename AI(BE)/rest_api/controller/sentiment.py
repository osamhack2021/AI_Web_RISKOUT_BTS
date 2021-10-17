import logging
import time
from pathlib import Path

from fastapi import APIRouter, HTTPException

from riskout.sentiment import SentimentClassifier
from rest_api.config import SENTIMENT_MODEL_PATH
from rest_api.schema import DocumentRequest


router = APIRouter()


sentiment_classifier = SentimentClassifier(model_path=SENTIMENT_MODEL_PATH)


@router.post("/sentiment")
async def sentiment(doc: DocumentRequest):
    start_time = time.time()

    if not doc:
        return {"detail": "Need doc"}  
    if isinstance(doc.document, str):
        doc.document = [doc.document]

    results = {"score": []}        
    try:
        # 1 == positive, 0 == negative !
        scores = [sentiment_classifier.predict(d)[1] for d in doc.document]
        results["score"] = scores
    except:
        raise HTTPException(status_code=503, detail="The server is busy processing requests.")
    finally:
        results["time"] = time.time() - start_time                
        return results

