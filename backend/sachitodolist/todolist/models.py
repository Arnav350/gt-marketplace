from django.db import models

# Create your models here.
from django.db import models


class TodoItem(models.Model):
    title = models.CharField(max_length=500, blank=False, default=None)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title