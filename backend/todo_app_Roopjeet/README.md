# **This is the api of our Todo app**

## **1. How would a user GET a list of all todos?**

User Steps to Get a List of All Todos
Send a GET Request to the `/todos/` Endpoint: This endpoint is designed to handle requests to list all existing todos.

Using curl:
`curl -X GET http://yourdomain.com/api/todos/`
When using Django, the domain by default would be http://localhost:8000/ so the curl request would look like
`curl -X GET http://localhost:8000/api/todos/`

Receive the Response: The user will receive a JSON response containing a list of all todos.
If there are todos, the response might look like this:
`[
  {
    "id": 1,
    "title": "Buy groceries",
    "completed": false,
    "created_at": "2024-10-30T12:34:56Z"
  },
  {
    "id": 2,
    "title": "Complete Django project",
    "completed": true,
    "created_at": "2024-10-31T09:15:42Z"
  }
]`

## **2. How would a user CREATE new todos?**

To create a new todo, the user would send a POST request with the necessary data (such as the title of the todo).
Send a POST Request to the `/todos/` Endpoint: The user should send a POST request to /todos/ with a JSON payload containing at least the title of the todo.

Using curl:
`curl -X POST http://yourdomain.com/api/todos/ -H "Content-Type: application/json" -d '{"title": "Learn Django"}'
`
When using Django, the domain by default would be http://localhost:8000/ so the curl request would look like
`curl -X POST http://localhost:8000/api/todos/ -H "Content-Type: application/json" -d '{"title": "Learn Django"}'

`"Content-Type: application/json"` is used to tell the api that our data is in json format
If the creation is successful, the response might look like this:
`{
  "id": 3,
  "title": "Learn Django",
  "completed": false,
  "created_at": "2024-10-31T12:45:00Z"
}
`

## **3. How would a user GET a Todo by ID?**

First, the user needs to know the id of the specific Todo they want to retrieve.
Send a GET Request to the Endpoint for Retrieving a Specific Todo
The endpoint for retrieving a specific todo item by id is `/todos/<id>/`
Replace <id> with the actual ID of the todo item.
The user would need to perform a GET request to this endpoint.
Example using curl: Retrieving ID 5
`curl -X GET http://yourdomain.com/api/todos/5/`
When using Django, the domain by default would be http://localhost:8000/ so the curl request would look like
`curl -X GET http://localhost:8000/api/todos/5/`

If the todo with the given id exists, the server will return a response with the details of the todo item in JSON format, for example:
`{
  "id": 5,
  "title": "Finish Django project",
  "completed": false,
  "created_at": "2024-10-31T10:15:30Z"
}
`
If the todo with the given id does not exist, the server will return a `404 Not Found` response

## **4. How would a user UPDATE a todo by ID?** 
To update a specific Todo item by its ID, the user would use a PATCH request, providing only the fields they want to update (like title or completed).
Send a PATCH Request to the /todos/<id>/ Endpoint:

The user will send a PATCH request to `/todos/<id>/`, where <id> is the ID of the todo they want to update. They would include the fields they want to modify in the request body as JSON.

Example Using curl:
`curl -X PATCH http://yourdomain.com/api/todos/5/ -H "Content-Type: application/json" -d '{"completed": true}'`
When using Django, the domain by default would be http://localhost:8000/ so the curl request would look like
`curl -X PATCH http://localhost:8000/api/todos/5/ -H "Content-Type: application/json" -d '{"completed": true}'`

If the update is successful, the response might look like:
`{
  "id": 5,
  "title": "Learn Django",
  "completed": true,
  "created_at": "2024-10-31T12:45:00Z"
}
`
If there’s a validation error (e.g., empty title), DRF would return a 400 Bad Request response with an error message

## **5. How would a user DELETE a todo by ID?** 
The user will send a DELETE request to `/todos/<id>/`, where <id> is the ID of the todo they want to delete.

Example Using curl:
`curl -X DELETE http://yourdomain.com/api/todos/5/`
When using Django, the domain by default would be http://localhost:8000/ so the curl request would look like
`curl -X DELETE http://localhost:8000/api/todos/5/`

After successfully deleting the todo, the view returns a `204 No Content` response, indicating that the request was successful but there is no further information to return.
If the todo with the specified ID does not exist, the user will receive a `404 Not Found` response.