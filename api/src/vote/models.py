
from django.db import models
from articles.models import Articles
from user.models import User


MAX_URL = 2000
MAX_STRING = 2000


class Vote(models.Model):
    voteUrl = models.ForeignKey(Articles, db_column='articleUrl', on_delete=models.CASCADE)
    voter = models.ForeignKey(User, db_column='userName', on_delete=models.CASCADE)
    voteValue = models.IntegerField()


    def as_json(self):
        return dict(
            voteUrl=self.voteUrl.as_json(),
            voter=self.voter.as_json(),
            voteValue=self.voteValue,
        )
