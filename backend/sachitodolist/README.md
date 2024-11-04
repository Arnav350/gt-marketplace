This is a simple todo list application built with Django and Django REST Framework (DRF). 
This app allows users to create, read, update, and delete todo items.

Installation

1. clone repository: git clone https://github.com/yourusername/todolistapp.git
   cd todolistapp
2. create or activate python enviornment: python -m venv venv, source venv/bin/activate
3. python manage.py runserver
URL/API calls:
List all todos: 
  URL: /api/todos/
  Method: GET
  Response: JSON array of todo items
  Create a new todo
URL: /api/todos/
  Method: POST
  Request body: {"title": "New Todo"}
  Response: JSON object of the created todo item
  Retrieve a todo by ID
URL: /api/todos/{id}/
  Method: GET
  Response: JSON object of the todo item
  Update a todo by ID
URL: /api/todos/{id}/
  Method: PATCH
  Request body: {"title": "Updated Title", "completed": true}
  Response: JSON object of the updated todo item
  Delete a todo by ID
URL: /api/todos/{id}/
  Method: DELETE
  Response: HTTP 204 No Content
