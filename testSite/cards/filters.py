import django_filters
from .models import Cards


class CardsFilter(django_filters.FilterSet):

    data_start__gt = django_filters.DateTimeFilter(field_name='data_start', lookup_expr='gte')
    data_start__lt = django_filters.DateTimeFilter(field_name='data_start', lookup_expr='lte')

    data_end__gt = django_filters.DateTimeFilter(field_name='data_end', lookup_expr='gte')
    data_end__lt = django_filters.DateTimeFilter(field_name='data_end', lookup_expr='lte')

    class Meta:
        model = Cards
        fields = ('series', 'number', 'status')
