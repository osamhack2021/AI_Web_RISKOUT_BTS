import logging
import time
from pathlib import Path

from fastapi import APIRouter, HTTPException

from riskout.textrank import KeysentenceSummarizer
from rest_api.schema import DocumentRequest
from rest_api.controller.utils import nouns


router = APIRouter()


@router.post("/keysentences")
async def keysentences(doc: DocumentRequest):
    start_time = time.time()

    if not doc:
        return {"detail": "Need docs"}
    elif len(doc.document) <= 1:
        return {"detail": "Need more docs"}
    if isinstance(doc.document, str):
        doc.document = [doc.document]

    results = {}
    summarizer = KeysentenceSummarizer(
        tokenize=nouns,
        min_sim=0.3,
        verbose=False
    )
    try:
        _keysentences = [{ "id": int(idx), "score": float(r), "sentence": str(sents)}
                        for idx, r, sents in summarizer.summarize(doc.document, topk=10)]
        results.update({"keysentences": _keysentences})
    except:
        raise HTTPException(status_code=503, detail="The server is busy processing requests.")
    finally:
        results["time"] = time.time() - start_time                
        return results