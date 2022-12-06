from django.shortcuts import render
from django.http import HttpResponse
from .models import Question, Quiz, Answer, Result


def home_questions(request):
    context = {}
    context['quizes'] = Quiz.objects.all()
    return render(request, 'home.html', context)


def quiz_questions(request, pk):
    context = {}
    try:
        quiz = Quiz.objects.get(pk=pk)
        questions = []
        for question in quiz.get_question():
            answers = []
            for answer in question.get_answer():
                answers.append(answer.text)
            questions.append({str(question): answers})
        context['questions'] = questions
        context['time_end'] = quiz.time_end

        if request.method == 'POST':
            q = []
            data = request.POST
            data_ = dict(data.lists())

            data_.pop('csrfmiddlewaretoken')

            for k in data_.keys():
                question = Question.objects.get(text=k)
                q.append(question)

            user = request.user
            quiz = Quiz.objects.get(pk=pk)

            score = 0
            multplier = 100 / quiz.number_of_questions
            results = []

            correct_answewr = None

            for x in q:
                a_selected = request.POST.get(x.text)

                if a_selected != "":
                    question_answer = Answer.objects.filter(question=x)
                    for a in question_answer:
                        if a_selected == a.text:
                            if a.correct:
                                score += 1
                                correct_answewr = a.text
                        else:
                            if a.correct:
                                correct_answewr = a.text
                    results.append({str(x): {'correct_answer': correct_answewr, 'answered': a_selected}})
                else:
                    results.append({str(x): 'не ответили'})

            score_ = score * multplier
            Result.objects.create(quiz=quiz, user=user, score=score_)
            context['score_'] = score_
            context['results'] = results
            
            if score_ >= quiz.score_to_pass:
                context['passed'] = True
                return render(request, 'results.html', context)
            else:
                context['passed'] = False
                return render(request, 'results.html', context)
    except:
        return HttpResponse('Oops, Кажется что-то пошло не так')

    return render(request, 'questions.html', context)
