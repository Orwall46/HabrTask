from django.urls import path
from .views import registration_user, logout_user, user_login


urlpatterns = [
    path('registration', registration_user, name = 'register_user'),
    path('logout', logout_user, name = 'logout'),
    path('login', user_login, name = 'login'),
]
