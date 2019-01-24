from django.urls import path, re_path

from . import views

urlpatterns = [
    path('create_vote', views.create_vote, name='create_vote'),
    path('get_article_ratings', views.get_article_ratings, name='get_article_ratings'),
    path('get_article_votes', views.get_article_votes, name='get_article_votes'),
    path('update_vote_value', views.update_vote_value, name='update_vote_value'),
    path('remove_article_votes', views.remove_article_votes, name='remove_article_votes'),

]
