from django import forms
from .models import User

class UserRegistrationForm(forms.ModelForm):
    password = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Repeat password', widget=forms.PasswordInput)
    city = forms.CharField(label='City', widget=forms.TextInput)

    class Meta:
        model = User
        fields = ('email', )


class LoginForm(forms.Form):
    email = forms.CharField(label="Email")
    password = forms.CharField(label="Password", widget=forms.PasswordInput)