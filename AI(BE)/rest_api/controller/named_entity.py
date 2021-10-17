import logging
import time
from pathlib import Path

from fastapi import APIRouter, HTTPException

from riskout.ner import NER
from rest_api.config import NER_MODEL_PATH
from rest_api.schema import DocumentRequest
from rest_api.controller.utils import nouns


router = APIRouter()


named_entity_recognition = NER(model_path=NER_MODEL_PATH, split_by=nouns)


@router.post("/ner")
async def ner(doc: DocumentRequest):
    start_time = time.time()

    if not doc:
        return {"detail": "Need doe"}
    if isinstance(doc.document, str):
        doc.document = [doc.document]

    results = {}
    try:
        entity = [named_entity_recognition.predict(d) for d in doc.document]
        results["ner"] = [{k: list(set(v)) for k, v in d.items()} for d in entity] # remove duplicated
    except:
        raise HTTPException(status_code=503, detail="The server is busy processing requests.")
    finally:
        results["time"] = time.time() - start_time                
        return results
