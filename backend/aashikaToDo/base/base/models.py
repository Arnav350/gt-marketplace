from django.db import models


class Task(models.Model):
    try:
        user = models.AutoField(primary_key=True)
        title = models.CharField(max_length=200, blank=False)
    except:
        raise Http404("Please add id and title")
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title 

    class Meta:
        ordering = ['completed']