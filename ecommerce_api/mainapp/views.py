from django.shortcuts import render
from .models import Product, DataUser
from rest_framework import generics, status, exceptions
from .serializers import ProductSerializer, DataUserSerializer
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


class StoreUserData(generics.CreateAPIView):
    queryset = DataUser.objects.all()
    serializer_class = DataUserSerializer
    permission_classes = [
        AllowAny,
    ]

    def create(self, request, *args, **kwargs):
        try:
            dataUser = request.data.get("dataUser")
            serialized_data = self.serializer_class(data=dataUser)
            if serialized_data.is_valid():
                serialized_data.save()
                return Response(serialized_data.data)
            else:
                return Response(
                    {"error": serialized_data.errors},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
