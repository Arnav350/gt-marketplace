from django.test import TestCase, Client
from django.urls import reverse
from .models import Todo
import json

class UnitTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.todo_url = reverse('todo-list-create')
        self.todo_detail_url = lambda pk: reverse('todo-detail', kwargs = {'pk':pk})
        self.todo = Todo.objects.create(title = "UnitTest", completed = False)

    def test_get_all_todos(self):
        response = self.client.get(self.todo_url)
        self.assertEqual(response.status_code, 200)

    def test_create_todo(self):
        response = self.client.post(self.todo_url, 
                                    data=json.dumps({"title": "New Todo", "completed": False}), 
                                    content_type='application/json')
        self.assertEqual(response.status_code, 201)

    def test_get_single_todo(self):
        response = self.client.get(self.todo_detail_url(self.todo.id))
        self.assertEqual(response.status_code, 200)

    def test_update_todo(self):
        response = self.client.patch(self.todo_detail_url(self.todo.id), 
                                     data=json.dumps({"title": "Updated Todo", "completed": True}),
                                     content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_delete_todo(self):
        response = self.client.delete(self.todo_detail_url(self.todo.id))
        self.assertEqual(response.status_code, 204)