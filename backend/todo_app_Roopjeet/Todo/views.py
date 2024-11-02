from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Todo
from .serializers import TodoSerializer

class TodoListCreateView(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def perform_create(self, serializer):
        serializer.save()

class TodoRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get_object(self):
        try:
            return super().get_object()
        except Todo.DoesNotExist:
            return Response({"error": "Todo not found."}, status=status.HTTP_404_NOT_FOUND)
