from django.contrib import admin
from django.urls import path, re_path, include
from django.shortcuts import render


def render_main(request):
    return render(request, "main.html")


def render_react(request):
    return render(request, "index.html")


urlpatterns = [
    path('/', render_main),
    path('admin/', admin.site.urls),
    path('api/auth/', include('rest_framework.urls')),
    path('api/user/', include('accounts.urls')),
    path('api/nlp/', include('detection_status.urls')),

    re_path(r"^$", render_react),
    re_path(r"^(?:.*)/?$", render_react),
]
