from mainapp.views import ProductList, ProductDetail
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path("admin/", admin.site.urls),
    path("products/", ProductList.as_view(), name="products"),
    path("detail/<int:product_id>/", ProductDetail.as_view(), name="product_detail"),
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
