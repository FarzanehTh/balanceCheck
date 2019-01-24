from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from articles.models import Articles
from newspaper import Article, ArticleException
import re
import json

def get_article_by_url(request):
    query_url = request.GET.get("q", None)
    if not query_url:
        return HttpResponse(status=400)
    url_pattern = re.compile(
        '^(http:\/\/www\.|https:\/\/www\.|http:\/\/| + "https:\/\/)?[a-z0-9]+' +
        '([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$'
    )
    if url_pattern.match(query_url):
        try:
            article = Articles.objects.get(articleUrl=query_url)
            return JsonResponse(article.as_json())
        except Articles.DoesNotExist:
            return HttpResponse(
                "Article with url " + query_url + " not found.", status=404
            )
        return HttpResponse(status=200)
    else:
        return HttpResponse("Query is not a url", status=400)

@csrf_exempt
def get_all_articles(request):
    try:
        articles = [article.as_json() for article in Articles.objects.all()]
        return JsonResponse({"articles": articles})
    except Exception as e:
        print(e)
        return HttpResponse(status=500)

@csrf_exempt
def create_article(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        url = json_data['article_url']

        if Articles.objects.filter(articleUrl=url).exists():
            return HttpResponse("Article url exists", status=400)

        json_article = Article(url)
        try:
            json_article.download()
            json_article.parse()

            article_data = {
                "articleUrl": url,
                "articleRating": 0,
                "articleNumVotes": 0,
                "articleTitle": json_article.title,
                "articleAuthor": ', '.join(json_article.authors),
                "articleDatePosted": json_article.publish_date,
                "articleHotness": 0,
                "numRatesOne" : 0,
                "numRatesTwo" : 0,
                "numRatesThree" : 0,
                "numRatesFour" : 0,
                "numRatesFive" : 0,
            }

            article = Articles(**article_data)
            article.save()
            return JsonResponse(article_data)
        except ArticleException:
            return HttpResponse("Unable to parse article url", 400)
