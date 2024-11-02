This is an example project that shows a skeleton for the backend of a todo list app.

I have defined a model to represent each task, when it was created, and its status. A serializer is used to then convert the Python data models into a JSON POST. 

By using the REST Framework, users can POST a new task, GET a task by ID, and PATCH a task by updating certain characteristics.

The default location for POST is '.../todos/'. And to PATCH a certain task the user can use '.../todos/<id:pk>'.
