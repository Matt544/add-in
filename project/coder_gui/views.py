from django.shortcuts import render


def index(request):
    return render(request, "coder_gui/index.html")
