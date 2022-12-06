from django.urls import path
from .views import home_questions, quiz_questions


urlpatterns = [
    path('list_questions', home_questions, name = 'home_questions'),
    path('quiz/<int:pk>', quiz_questions, name = 'quiz_questions'),
]
