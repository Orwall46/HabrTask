from django.urls import path, include
from .views import main


urlpatterns = [
    path('', main, name = "home"),
    path('', include('registration.urls')),
    path('', include('questions.urls')),
    path('', include('cards.urls')),
]
