from fastapi import APIRouter

from rest_api.controller import (
    fakenews, 
    keysentences, 
    keywords,
    named_entity,
    sentiment,
    summarize
)

router = APIRouter()

router.include_router(fakenews.router, tags=["fakenews"])
router.include_router(keysentences.router, tags=["keysentences"])
router.include_router(keywords.router, tags=["keywords"])
router.include_router(named_entity.router, tags=["named-entity"])
router.include_router(sentiment.router, tags=["sentiment"])
router.include_router(summarize.router, tags=["summarize"])
