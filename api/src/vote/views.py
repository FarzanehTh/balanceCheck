from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.generic.detail import DetailView
from vote.models import Vote
from articles.models import Articles
from user.models import User
from user.views import create_dummy_user
from django.utils.decorators import method_decorator
from django.http import QueryDict
from django.views import View

import time


@csrf_exempt
def get_article_ratings(request):
    if request.method == "GET":
        article_url = request.GET.get("article_url", None)
        if article_url is None:
            return HttpResponse(status=400)
        try:
            article = check_article_status(article_url)
            rate_dict = {
                    1: article.numRatesOne,
                    2: article.numRatesTwo,
                    3: article.numRatesThree,
                    4: article.numRatesFour,
                    5: article.numRatesFive,
                }
            return JsonResponse(rate_dict)
        except Exception as e:
            if e.__class__.__name__ is "Exception_Article":
                return HttpResponse("There is no such article !!", status=400)
        return HttpResponse("An error in getting the articles ratings occued", status=400)


@csrf_exempt
def get_article_votes(request):
    if request.method == 'GET':
        article_url = request.GET.get("article_url", None)
        if article_url is None:
            return HttpResponse(status=400)
        try:
            article = check_article_status(article_url)
        except Exception as e:
            if e.__class__.__name__ is "Exception_Article":
                return HttpResponse("There is no such article !!", status=400)
        list_of_votes = article.vote_set.all()
        votes = [vote.as_json() for vote in list_of_votes]
        return JsonResponse({"votes": votes})
    else:
        return HttpResponse(status=400)


# *****version with dummy_user
@csrf_exempt
def create_vote(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        vote_value = json_data['vote_value']
        dummy_user= User()
        dummy_user.userName = str(time.time())  # random username
        dummy_user.userEmail = "CSC301@mail.ca"
        create_dummy_user(dummy_user)
        if not 1 <= int(vote_value) <= 5 :
            return HttpResponse("Vote value should be between 1 and 5 inclusive !!", status=500)
        article_url = json_data['article_url']
        try:
            article, user= check_user_and_article_status(article_url, dummy_user.userName)
            json_data = add_vote(article, user, vote_value)
            return JsonResponse(json_data)
        except Exception as e:
            print(e)
            if e.__class__.__name__ is "Exception_Article":
                return HttpResponse("There is no such article !!", status=400)
            else:
                return HttpResponse("An error in verifying article or user occured.", status=400)
        return HttpResponse("An error in creating the vote occured.", status=400)


@csrf_exempt
def remove_article_votes(request):
    if request.method == "DELETE":
        article_url = json.loads(request.body).get("article_url", None)
        if article_url is None:
            return HttpResponse(status=400)
        try:
            article = Articles.objects.filter(articleUrl=article_url)[0]
            list_of_votes = article.vote_set.all()
            for vote in list_of_votes:
                vote.delete()
            return HttpResponse("All votes for this article is deleted." ,status=200)
        except Exception as e:
            print(e)
            return HttpResponse("No Votes For this Article to delete!"+str(e), status=500)


# *****version with dummy_user
@csrf_exempt
def update_vote_value(request):
    if request.method == 'POST':
        context = json.loads(request.body)
        vote_value = context.get("vote_value", None)
        if not 1 <= vote_value <= 5 :
            return HttpResponse("Vote value should be between 1 and 5 inclusive !!", status=500)
        article_url = context.get("article_url", None)
        try:
            article, user= check_user_and_article_status(article_url, dummy_user.userName)
        except Exception as e:
            if e.__class__.__name__ is "Exception_Article":
                return HttpResponse("There is no such article !!", status=400)
            else:
                pass
        votes_of_article= Vote.objects.filter(voteUrl=article, voter=user)
        vote = votes_of_article[0]
        vote.voteValue = vote_value
        vote.save()
        json_data = vote.as_json()
        return JsonResponse(json_data)




#######  helpers
@csrf_exempt
def add_vote(article, user, vote_value):
    vote = Vote()
    apply_article_rating(article, vote_value)
    vote.voteUrl = article
    vote.voter = user
    vote.voteValue = vote_value
    vote.save()
    json_data = vote.as_json()
    return json_data


def apply_article_rating(article, rate):
    if int(rate) == 1:
        article.numRatesOne = article.numRatesOne + 1
        article.save()
    elif int(rate) == 2:
        article.numRatesTwo = article.numRatesTwo + 1
        article.save()
    elif int(rate) == 3:
        article.numRatesThree = article.numRatesThree + 1
        article.save()
    elif int(rate) == 4:
        article.numRatesFour = article.numRatesFour + 1
        article.save()
    elif int(rate) == 5:
        article.numRatesFive = article.numRatesFive + 1
        article.save()
    else:
        raise Exception_Article(" ")    

@csrf_exempt
def check_user_and_article_status(article_url, user_name):

    article_queryset = Articles.objects.filter(articleUrl=article_url)
    if article_queryset.count()!=0:
        article = article_queryset[0]
    else:
        print("Article")
        raise Exception_Article(" ")
    user_queryset = User.objects.filter(userName=user_name)
    user = user_queryset[0]
    if user_queryset.count() != 0:
        user = user_queryset[0]
    else:
        print("User")
        raise Exception_user(" ")
    return article, user


@csrf_exempt
def check_article_status(article_url):

    article_queryset = Articles.objects.filter(articleUrl=article_url)
    if article_queryset.count()!=0:
        article = article_queryset[0]
        return article
    else:
        raise Exception_Article(" ")


class Exception_Article(Exception):
      pass


class Exception_user(Exception):
      pass



# @csrf_exempt
# def create_vote(request):
#     if request.method == 'POST':
#         context = json.loads(request.body)
#         vote_value = context.get("vote_value", None)
#         user_name = context.get("user_name", None)
#         article_url = context.get("article_url", None)
#         try:
#             article, user= check_user_and_article_status(article_url, user_name)
#         except Exception as e:
#             if e.__class__.__name__ is "Exception_Article":
#                 return HttpResponse("There is no such article !!", status=400)
#             elif e.__class__.__name__ is  "Exception_user":
#                 return HttpResponse("You have not registered as a user yet !!", status=400)
#             else:
#                 pass
#         votes_of_user = Vote.objects.filter(voteUrl=article, voter=user)
#         if votes_of_user.count() == 0:
#             json_data = add_vote(article, user, vote_value)
#             return JsonResponse(json_data)
#         elif votes_of_user.count() == 1:
#                 return HttpResponse("You have already voted!!", status=400)
#         return HttpResponse("There are two votes with the same user_name for this article\
#                     You Cannot vote twice!!", status=400)





#
# @csrf_exempt
# def update_vote_value(request):
#     if request.method == 'POST':
#         context = json.loads(request.body)
#         vote_value = context.get("vote_value", None)
#         user_name = context.get("user_name", None)
#         article_url = context.get("article_url", None)
#         try:
#             article, user= check_user_and_article_status(article_url, user_name)
#         except Exception as e:
#             if e.__class__.__name__ is "Exception_Article":
#                 return HttpResponse("There is no such article !!", status=400)
#             elif e.__class__.__name__ is  "Exception_user":
#                 return HttpResponse("You have not registered as a user yet !!", status=400)
#             else:
#                 pass
#         votes_of_user = Vote.objects.filter(voteUrl=article, voter=user)
#         if votes_of_user.count() == 0:
#             HttpResponse("There is no vote for this user to update!!", status=400)
#         elif votes_of_user.count() == 1:
#             vote = votes_of_user[0]
#             vote.voteValue = vote_value
#             vote.save()
#             json_data = vote.as_json()
#             return JsonResponse(json_data)
#         else:
#             HttpResponse("There are two votes with the same user_name for this article\
#                 You Cannot vote twice!!", status=400)



# did not use it until now
@csrf_exempt
def apply_user_vote(article_url, user_name , vote_value):
    votes_of_user = Vote.objects.filter(articleUrl=article_url,userName=user_name)
    if votes_of_user.count() == 0:
        json_data = add_vote(article_url, user_name, vote_value)
        return JsonResponse(json_data)
    elif votes_of_user.count() == 1:
        vote = votes_of_user.first()
        vote.voteValue = vote_value
        vote.save()
        json_data = vote.as_json()
        return JsonResponse(json_data)
    else:
        return HttpResponse("There are two votes with the same user_name for this article\
            You Cannot vote twice!!", status=400)
