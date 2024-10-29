This is a Django Project that acts as a backend for a todo application. Within the "todo" module the main functionality for this application is found. 

In toDoAPI/todo/models.py I defined a todo model with required specifications.

In toDoAPI/todo/views.py I created two classes that handle CRUD operations.   
  The TodoListCreate class handles POST and GET (All) operations. Ex query. https:..../todos/
  The TodoDetail class handles PATCH, DELETE, and GET (<ID>) operations. Ex query. https:..../todos/<pk:id>/

I mapped each class to seperate paths within toDoAPI/todo/urls.py. This way when a GET operation is called a URL with an id will return solely the corresponding todo object and not the whole table.

Within my project paths, toDoAPI/urls.py, I mapped the url prefix "todos" to my todo application urls.

Tested operations with Unit Tests toDoAPI/todo/test_todo.py (Checks for valid status code : 20*)
