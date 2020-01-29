from django.db import models
from django.core.validators import RegexValidator

phone_validator = RegexValidator(
    regex=r'^\+?1?\d{9,15}$',
    message="Phone number must be entered in the format: '+999999999'. Upto 15 digits allowed."
    )


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=100)
    phone = models.CharField(
        validators=[phone_validator],
        max_length=17,
        blank=True
    )
    address_1 = models.TextField(verbose_name='Address Line1')
    address_2 = models.TextField(verbose_name='Address Line2')
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.IntegerField()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
