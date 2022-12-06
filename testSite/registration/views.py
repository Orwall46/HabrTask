from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.http import HttpResponse
from .forms import UserRegistrationForm, LoginForm


def registration_user(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            new_user = form.save(commit=False)
            new_user.set_password(form.cleaned_data['password'])
            new_user.city = form.cleaned_data['city']
            new_user.save()
            login(request, new_user)
            return redirect('/')
    form = UserRegistrationForm()
    return render (request, 'register.html', context={"register_form":form})


def logout_user(request):
    logout(request)
    return redirect('/')


def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(email=cd['email'].lower(), password=cd['password'])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('/')
                else:
                    return HttpResponse('Disabled account')
            else:
                error = 1
                return render(request, 'login.html', context={'error': error})
    else:
        form = LoginForm()
    return render(request, 'login.html', context={'form': form})
