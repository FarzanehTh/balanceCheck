from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User

import json

@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        user_name = json_data.get("user_name", None)
        user_email = json_data.get("user_email", None)
        if user_name is None or user_email is None:
            return HttpResponse("No valid userName and user_email", status=400)
        user_queryset = User.objects.all().filter(userName=user_name)
        if user_queryset.count() !=0:
            return HttpResponse("There is already a user with this user name !!", status=400)
        user = User(userName=user_name, userEmail=user_email)
        user.save()
        return JsonResponse({"user":user.as_json()})

@csrf_exempt
def create_dummy_user(user):
    user_name = user.userName
    user_email = user.userEmail
    if user_name is None or user_email is None:
        return HttpResponse("No valid userName and user_email", status=400)
    user_queryset = User.objects.all().filter(userName=user_name)
    if user_queryset.count() !=0:
        return HttpResponse("There is already a user with this user name !!", status=400)
    user = User(userName=user_name, userEmail=user_email)
    user.save()
    return JsonResponse({"user":user.as_json()})
