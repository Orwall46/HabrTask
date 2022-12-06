import string
import datetime
import random
from django.db import models


def gen_time(data:int):
        return datetime.datetime.now() + datetime.timedelta(data*30)


def gen_series(ser):
    if len(ser) != 2:
        return 'AA'
    else:
        if isinstance(ser, str):
            return ser
        else:
            return 'AA'


def gen_number():
    length = 6
    char = string.ascii_uppercase + string.digits + string.ascii_lowercase
    while True:
        number_id = ''.join(random.choice(char) for x in range(length))
        try:
            temp = Cards.objects.get(number=number_id)
        except:
            return number_id


class Cards(models.Model):

    CHOICES = (
        ('не активирована', 'не активирована'),
        ('активирована', 'активирована'),
        ('просрочена', 'просрочена'),
    )

    series = models.CharField(max_length=2, verbose_name='Серия')
    number = models.CharField(max_length=6, verbose_name='Номер')
    data_start = models.DateTimeField(auto_now_add=True, verbose_name='Дата выпуска')
    data_end = models.DateTimeField(default=gen_time, verbose_name='Дата окончания')
    last_used = models.DateTimeField(blank=True, null=True, verbose_name='Дата последнего использования')
    summ = models.PositiveIntegerField(default=0, verbose_name='Сумма')
    status = models.CharField(default='не активирована', choices=CHOICES, max_length=15, verbose_name='Статус карты')

    def __str__(self) -> str:
        return f"{self.pk}"
