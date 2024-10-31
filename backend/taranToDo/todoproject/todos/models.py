from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=200, null=False, blank=False)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
