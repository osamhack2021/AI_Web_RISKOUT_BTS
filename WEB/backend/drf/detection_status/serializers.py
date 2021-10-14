from rest_framework import generics, permissions
from rest_framework import serializers
# from django.contrib.auth.models import User

# Analyzed Data Serializer
class AnalyzedDataSerializer(serializers.Serializer):

    mode = serializers.CharField(required=True)
    category = serializers.CharField(required=True)
    period = serializers.IntegerField(required=True)
    tags = serializers.DictField(required=True)
    search_text = serializers.ListField(child=serializers.CharField(), allow_empty=True)
    limit = serializers.IntegerField(required=True)
    offset = serializers.IntegerField(required=True)


# Report Data Serializer
class ReportDataSerializer(serializers.Serializer):

    articleIds = serializers.ListField(required=True)
    period = serializers.IntegerField(required=True)
