from newspaper import Article
import json
import requests

# url = 'https://www.theguardian.com/us-news/2018/oct/13/melania-trump-parts-company-with-presidents-agenda-in-abc-interview'


def scrape_article(url):

    article = Article(url)
    article.download()
    article.parse()

    # I am not sure what the articleName is ??

    dic = {}
    dic["articleUrl"] = url
    dic["articleRating"] = 0
    dic["articleNumVotes"] = 0
    dic["articleTitle"] = article.title
    dic["articleAuthor"] = article.authors
    dic["articleDatePosted"] = article.publish_date
    dic["articleHotness"] = 0
    dic["articleText"] = article.text

    json_article = json.dumps(dic, indent=4, sort_keys=True, default=str)

    return json_article
