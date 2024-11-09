from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.ToDo_list_create, name='ToDo_list_create'),
    path('todos/<int:pk>/', views.ToDo_by_id, name='ToDo_by_id')
]