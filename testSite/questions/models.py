import random
from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from registration.models import User


def validate_even(value):
    if value is not True and value is not False:
        raise ValidationError("This field is required.")


class Quiz(models.Model):
    CHOICES = (
        ('легко', 'легко'),
        ('средне', 'средне'),
        ('тяжело', 'тяжело'),
    )

    name = models.CharField(max_length=150)
    topic =models.CharField(max_length=150)
    number_of_questions = models.IntegerField()
    time_end = models.IntegerField(help_text='How many minutes nned to this test')
    score_to_pass = models.IntegerField(help_text='Minimum score in %')
    difficult = models.CharField(choices=CHOICES, max_length=6)

    def __str__(self) -> str:
        return f"{self.name}"

    def get_question(self):
        questions = list(self.question_set.all())
        random.shuffle(questions)
        return questions


class Question(models.Model):
    text = models.CharField(max_length=200)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"{self.text}"

    def get_answer(self):
        return self.answer_set.all()


class Answer(models.Model):
    text = models.CharField(max_length=200)
    correct = models.BooleanField(validators=[validate_even], default=False)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"вопрос {self.question.text}, ответ {self.text}, correct {self.correct}"


class Result(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.FloatField()

    def __str__(self) -> str:
        return f"{self.pk}"
