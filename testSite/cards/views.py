from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic import ListView
from .models import Cards, gen_series, gen_time
from .filters import CardsFilter


def generation_cards(request):
    serias = gen_series(request.POST.get('seria'))
    data = gen_time(int(request.POST.get('data')))

    for x in range(int(request.POST.get('count'))):
        Cards.objects.create(series=serias, data_end=data)

    return redirect('/all_cards')


class HomePageCards(ListView):
    model = Cards
    context_object_name = 'all_cards_list'

    def post(self, request, *args, **kwargs):
        return generation_cards(request)
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context['filter'] = CardsFilter(self.request.GET.dict(), queryset=self.get_queryset())

        context['filter'].queryset = context['filter'].queryset.all()

        return context


def card_info(request, pk):
    context = {}
    try:
        card_info = Cards.objects.get(pk=pk)
        context['card_info'] = card_info

        if 'deactivation' in request.POST:
            card_info.status = 'не активирована'
            card_info.save()
            return redirect(f'/cards/{pk}')
        if 'activation' in request.POST:
            card_info.status = 'активирована'
            card_info.save()
            return redirect(f'/cards/{pk}')
        if 'delete' in request.POST:
            card_info.delete()
            return redirect(f'/all_cards')
    except:
        return HttpResponse('Ooops, Кажется что-то пошло не так! =)')
    return render(request, 'card_info.html', context)
