from django.urls import path
from .views import *

urlpatterns = [
    path('analyze/', AnalyzedDataView.as_view(), name='analyze'),
    path('trends/', TrendsDataView.as_view(), name='trends'),
    path('wordcloud/', WordcloudDataView.as_view(), name='wordcloud'),
    path('article/volume/', ArticleVolumeDataView.as_view(), name='article_volume'),
    path('sentiment/bar/', SentimentBarDataView.as_view(), name='sentiment_bar'),
    path('sentiment/pie/', SentimentPieDataView.as_view(), name='sentiment_pie'),
    path('report/', ReportDataView.as_view(), name='report'),
]
