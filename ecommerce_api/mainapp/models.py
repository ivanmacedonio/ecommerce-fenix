from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=128, blank=False)
    description = models.TextField(blank=False)
    price = models.IntegerField(blank=False, null=False)
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
