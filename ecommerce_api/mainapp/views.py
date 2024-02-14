from django.shortcuts import render
from .models import Product
from rest_framework import generics, status, exceptions
from .serializers import ProductSerializer
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [
        AllowAny,
    ]


class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [
        AllowAny,
    ]

    def get_object(self):
        product_id = self.kwargs.get("product_id")
        return get_object_or_404(self.queryset, id=product_id)

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.serializer_class(instance)
        return Response(serializer.data)
