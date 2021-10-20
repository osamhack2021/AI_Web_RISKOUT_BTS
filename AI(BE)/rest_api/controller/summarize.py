import logging
import time
from pathlib import Path

from fastapi import APIRouter, HTTPException

from riskout.summarization import AbstractiveSummarizer
from riskout.extractive import ExtractiveSummarizer
from rest_api.config import ABSTRACTIVE_MODEL_PATH
from rest_api.schema import DocumentRequest
from rest_api.controller.errors.http_error import http_error_handler
from rest_api import timeout_exception


router = APIRouter(
    prefix="/summarize",
    responses={404: {"description": "Not found"}},
)


abstractive_summarizer = AbstractiveSummarizer(model_path=ABSTRACTIVE_MODEL_PATH)
extractive_summarizer = ExtractiveSummarizer()


@timeout_exception.timeout(20)
def getSummarize(data):
    return abstractive_summarizer.predict(data)

@router.post("/extractive")
async def extraction(doc: DocumentRequest):
    start_time = time.time()

    if not doc:
        return {"detail": "Need doc"}
    if isinstance(doc.document, str):
        doc.document = [doc.document]

    results = {"summarized": []}

    for d in doc.document:
        try:
            summarized = extractive_summarizer.summarize(d)
            results["summarized"].append(summarized)
        except:
            raise HTTPException(status_code=503, detail="The server is busy processing requests.")
    
    results["time"] = time.time() - start_time
    return results


@router.post("/abstractive")
async def summarize(doc: DocumentRequest):
    start_time = time.time()

    if not doc:
        return {"detail": "Need doc"}    

    results = {"summarized": []}
    if isinstance(doc.document, str):
        doc.document = [doc.document]

    for d in doc.document:
        try:
            summarized = getSummarize(d)
            results["summarized"].append(summarized)

        except timeout_exception.TimeoutError as e:
            results["summarized"] = None
            results["error_msg"] = e
        except:
            raise HTTPException(status_code=503, detail="The server is busy processing requests.")

    results["time"] = time.time() - start_time
    return results
