from rest_framework import generics, permissions
from rest_framework import serializers
# from django.contrib.auth.models import User

# Analyzed Data Serializer
class AnalyzedDataSerializer(serializers.Serializer):

    category = serializers.CharField(required=True)
    period = serializers.IntegerField(required=True)
    tags = serializers.DictField(required=True)
    search_text = serializers.CharField(required=False, allow_blank=True)
    limit = serializers.IntegerField(required=True)
    offset = serializers.IntegerField(required=True)


# Report Data Serializer
class ReportDataSerializer(serializers.Serializer):

    articleIds = serializers.ListField(required=True)
    period = serializers.IntegerField(required=True)
