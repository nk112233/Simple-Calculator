from django.contrib import admin
from django.urls import path
from calc import views
from django.urls import include
urlpatterns = [
    path("",views.index,name="home"),
    # path("about",views.about,name="about"),
    # path("contact",views.contact,name="contact"),
    # path("cllgprdctr",views.cp,name="cp")
]