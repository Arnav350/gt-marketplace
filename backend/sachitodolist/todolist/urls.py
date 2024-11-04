from django.urls import path
from .views import TodoItemListCreateView, TodoItemRetrieveUpdateDeleteView

urlpatterns = [
    path('todos/', TodoItemListCreateView.as_view(), name='todoitem-list-create'),
    path('todos/<int:pk>/', TodoItemRetrieveUpdateDeleteView.as_view(), name='todoitem-detail'),
]
