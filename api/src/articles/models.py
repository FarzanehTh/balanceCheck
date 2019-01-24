from django.db import models

MAX_URL = 2000
MAX_STRING = 2000
MAX_INTEGERS = 10
MAX_DECIMALS = 2

class Articles(models.Model):
    articleUrl = models.URLField(primary_key=True)
    articleRating = models.DecimalField(
        decimal_places = MAX_DECIMALS,
        max_digits=MAX_INTEGERS)
    articleNumVotes = models.IntegerField()
    articleTitle = models.CharField(max_length=MAX_STRING)
    articleAuthor = models.CharField(max_length=MAX_STRING)
    # will store date article was posted
    articleDatePosted = models.DateField(null=True)
    # will apply combined quality/#votes/new score (decaying algorithm)
    articleHotness = models.DecimalField(decimal_places = MAX_DECIMALS,
        max_digits=MAX_INTEGERS)
    numRatesOne = models.IntegerField()
    numRatesTwo = models.IntegerField()
    numRatesThree = models.IntegerField()
    numRatesFour = models.IntegerField()
    numRatesFive = models.IntegerField()

    def as_json(self):
        return dict(
            articleUrl=self.articleUrl,
            articleRating=self.articleRating,
            articleNumVotes=self.articleNumVotes,
            articleTitle=self.articleTitle,
            articleAuthor=self.articleAuthor,
            articleDatePosted=self.articleDatePosted,
            articleHotness=self.articleHotness,
            numRatesOne=self.numRatesOne,
            numRatesTwo=self.numRatesTwo,
            numRatesThree=self.numRatesThree,
            numRatesFour=self.numRatesFour,
            numRatesFive=self.numRatesFive,

        )
