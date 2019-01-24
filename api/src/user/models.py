from django.db import models

MAX_URL = 2000
MAX_STRING = 2000

class User(models.Model):
    userName = models.CharField(max_length=MAX_STRING)
    userEmail = models.EmailField()

    def as_json(self):
        return dict(
            userName=self.userName,
            userEmail=self.userEmail,

        )
