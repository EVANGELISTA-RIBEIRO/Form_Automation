from django.urls import path
from LogiStream.views import form1

urlpatterns = [
    path('', form1),
]
