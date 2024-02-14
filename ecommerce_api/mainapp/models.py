from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=128, blank=False)
    description = models.TextField(blank=False)
    price = models.DecimalField(
        max_digits=10, decimal_places=2, blank=False, null=False
    )
    discount = models.IntegerField(blank=True, null=True)
    image = models.ImageField(upload_to="product_images/")
    available = models.BooleanField(default=True)

    def discount_price(self):
        if self.discount is not None:
            return self.price - self.discount
        else:
            return self.price

    def __str__(self):
        return f"{self.title}"


class DataUser(models.Model):
    nombre = models.CharField(blank=False, null=False, max_length=128)
    apellido = models.CharField(blank=False, null=False, max_length=128)
    telefono = models.CharField(blank=False, null=False, max_length=128)
    email = models.EmailField(blank=False, null=False, max_length=128)
    direccion = models.CharField(blank=False, null=False, max_length=128)
    ciudad = models.CharField(blank=False, null=False, max_length=128)
    provincia = models.CharField(blank=False, null=False, max_length=128)
    codigo_postal = models.CharField(blank=False, null=False, max_length=128)
    provincia = models.CharField(blank=False, null=False, max_length=128)
    total = models.DecimalField(
        max_digits=10, decimal_places=2, blank=False, null=False
    )

    def __str__(self):
        return f"Comprador ${self.nombre}"
