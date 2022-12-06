from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    username = models.CharField(unique=False, max_length=150)
    email = models.CharField(max_length=254, unique=True)
    city = models.CharField(max_length=100, blank=True, null=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['city', 'username']
