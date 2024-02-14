from .models import Product, DataUser
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class DataUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataUser
        fields = "__all__"
