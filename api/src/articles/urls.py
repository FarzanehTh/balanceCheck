from django.urls import path
# from vote.views import VoteDetailView

from . import views

urlpatterns = [
    path(
        'get_article_by_url',
        views.get_article_by_url,
        name='get_article_by_url'
    ),
    path('get_all_articles', views.get_all_articles, name='get_articles'),
    path('create_article', views.create_article, name='create_article')
]
