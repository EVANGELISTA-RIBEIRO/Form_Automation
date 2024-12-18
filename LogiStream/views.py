from django.shortcuts import render

def form1(request):
    """Function for render form1."""

    return render(request, 'LogiStream/form1.html')