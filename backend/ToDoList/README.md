# ToDoList

This is a simple project that defines the backend framework for a To Do List using Django and its rest framework. It implements a model for tasks and CRUD operations with those tasks.

## Operations

### List Tasks
`GET /api/todo/`

### Create Task
`POST /api/todo/`

**Request:**
```json
{
    "title": "Task title",
    "completed": false
}
```

### Get By ID
`GET /api/todo/{id}/`

### Update By ID
`PATCH /api/todo/{id}/`

### Delete By ID
`DELETE /api/todo/{id}/`