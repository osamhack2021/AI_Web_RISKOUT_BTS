import logging
import time
from pathlib import Path

from fastapi import APIRouter, HTTPException

from riskout.textrank import KeywordSummarizer
from rest_api.schema import DocumentRequest
from rest_api.controller.utils import nouns


router = APIRouter()


@router.post("/keywords")
async def keywords(doc: DocumentRequest):
    start_time = time.time()

    if not doc:
        return {"detail": "Need docs"}
    elif len(doc.document) <= 1:
        return {"detail": "Need more docs"}
        
    results = {}
    if isinstance(doc.document, str):
        doc.document = [doc.document]
    keyword_extractor = KeywordSummarizer(
        tokenize=nouns,
        window=-1,
        verbose=False
    )
    try:
        results["keywords"] =  keyword_extractor.summarize(doc.document, topk=30)
    except:
        raise HTTPException(status_code=503, detail="The server is busy processing requests.")
    finally:
        results["time"] = time.time() - start_time                
        return results
