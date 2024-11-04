from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import TodoItem
from .serializers import TodoItemSerializer

class TodoItemListCreateView(generics.ListCreateAPIView):
    queryset = TodoItem.objects.all()
    serializer_class = TodoItemSerializer

class TodoItemRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TodoItem.objects.all()
    serializer_class = TodoItemSerializer

    def get_object(self):
        try:
            return TodoItem.objects.get(pk=self.kwargs['pk'])
        except TodoItem.DoesNotExist:
            raise NotFound(detail="TodoItem not found.")

    def patch(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', True)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)
