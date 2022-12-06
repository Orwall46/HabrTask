from django.urls import path
from .views import HomePageCards, card_info


urlpatterns = [
    path('all_cards', HomePageCards.as_view(template_name="home_cards.html"), name = 'home_cards'),
    path('cards/<int:pk>', card_info, name = 'card_info'),
]
