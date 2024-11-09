from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ToDo
from .serializers import ToDoSerializer

@api_view(['GET', 'POST'])
def ToDo_list_create(request):
    if request.method == 'GET': # For get request without primary key provided
        return Response(ToDoSerializer(ToDo.objects.all(), many = True).data)
    elif request.method == 'POST':
        serializer = ToDoSerializer(data = request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST) # Handles serializer error
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)        

@api_view(['GET', 'PATCH', 'DELETE'])
def ToDo_by_id(request, pk):
    try:
        ToDo = ToDo.objects.get(pk = pk)
    except ToDo.DoesNotExist: # Error handling for nonexistent IDs
        return Response({"error": "Requested ID does not exist"}, status = status.HTTP_404_NOT_FOUND)

    if request.method == 'GET': # For get request with primary key provided
        return Response(ToDoSerializer(ToDo).data)
    elif request.method == 'PATCH':
        serializer = ToDoSerializer(ToDo, data = request.data, partial = True)
        if not serializer.is_valid():
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        ToDo.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
