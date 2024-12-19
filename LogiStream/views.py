from django.shortcuts import render

def form1(request):
    """Function for render form1."""

    return render(request, 'LogiStream/view/form1.html')