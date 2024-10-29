from django.http import JsonResponse, HttpResponse
from django.core import serializers
from django.views import View
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .models import Todo
import json

@method_decorator(csrf_exempt, name ="dispatch")
class TodoListCreate(View):
    def get(self,request):
        todos = Todo.objects.all()
        json_data = serializers.serialize('json', todos)
        return HttpResponse(json_data, content_type='application/json')
    
    def post(self, request):
        try:
            data = json.loads(request.body)
            title = data.get('title')
            if not title or not title.strip():
                return JsonResponse({"error": "Title is required"}, status=400)
            completed = data.get('completed')
            if completed is not None and not isinstance(completed, bool):
                return JsonResponse({"error": "'completed' must be a boolean (true or false)"}, status=400)
            todo = Todo.objects.create(title = title, completed = completed if completed is not None else False)
            json_data = serializers.serialize('json',[todo])
            return HttpResponse(json_data, content_type='application/json',status =201)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON data"}, status=400)
        
@method_decorator(csrf_exempt, name ="dispatch")
class TodoDetail(View):
    def get(self, request, pk):
        todo = get_object_or_404(Todo, pk=pk)
        json_data = serializers.serialize('json', [todo])
        return HttpResponse(json_data, content_type='application/json')

    def patch(self, request, pk):
        try:
            todo = get_object_or_404(Todo, pk=pk)
            data = json.loads(request.body)
            title = data.get('title')

            if title and title.strip():
                todo.title = title
            else:
                return JsonResponse({"error": "Title cannot be empty"}, status=400)
            
            completed = data.get('completed')
            if completed is not None:
                todo.completed = completed

            todo.save()
            json_data = serializers.serialize('json', [todo])
            return HttpResponse(json_data, content_type='application/json')
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON data"}, status=400)
        
    def delete(self, request, pk):
        todo = get_object_or_404(Todo, pk=pk)
        todo.delete()
        return JsonResponse({"message": "Todo deleted successfully"}, status=204)