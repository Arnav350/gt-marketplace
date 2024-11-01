import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';


const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${day}/${month}/${year} ${hours}:${minutes}`;
};

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editTodo, setEditTodo] = useState(null);


    const addTodo = () => {
        if (newTodo.trim()) {
            setTodoList([...todoList, { id: uuid.v4(), text: newTodo.trim(), date: new Date(), completed: false}]);
            setNewTodo('')
        } else {
            setTodoList([...todoList, { id: uuid.v4(), text: "New Todo", date: new Date(), completed: false}]);
            setNewTodo('')
        }
    };

    const updateTodo = () => {
        if (editTodo && newTodo.trim()) {
            setTodoList(todoList.map(todo => todo.id === editTodo.id ? {...todo, text: newTodo.trim()} : todo));
            setEditTodo(null);
            setNewTodo('')
        }
    };
    const toggleComplete = (id) => {
        setTodoList(
          todoList.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
    };

    const deleteTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    const startEditing = (todo) => {
        setEditTodo(todo);
        setNewTodo(todo.text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Add a new todo"
                value={newTodo}
                onChangeText={setNewTodo}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={editTodo ? updateTodo : addTodo}
            >
                <Text style={styles.addButtonText}>{editTodo ? "Update Todo" : "Add Todo"}</Text>
            </TouchableOpacity>
            <FlatList
                data={todoList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View style={styles.todoItem}>
                    <View style={[styles.statusCircle, item.completed && styles.completedCircle]} />
                    <TouchableOpacity onPress={() => toggleComplete(item.id)} style={{ flex: 1 }}>
                    <Text style={[styles.todoText, item.completed && styles.completedText]}>
                        {item.text}
                    </Text>
                    <Text style={styles.dateText}>
                        Created on: {formatDate(item.date)}
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => startEditing(item)}>
                    <Text style={styles.editButton}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                    <Text style={styles.deleteButton}>Delete</Text>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    )

}

export default TodoList;

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    input: {
        backgroundColor: '#f0f0f0', 
        borderColor: 'f0f0f0', 
        borderWidth: 1,
        borderRadius: 25, 
        padding: 10,
    },
    todoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    },
    todoText: {
      fontSize: 16,
    },
    completedText: {
      textDecorationLine: 'line-through',
      color: 'gray',
    },
    dateText: {
      fontSize: 12,
      color: 'gray',
    },
    editButton: {
      color: 'blue',
      marginRight: 10,
    },
    deleteButton: {
      color: 'red',
    },
    statusCircle: {
        width: 20, 
        height: 20,
        borderRadius: 10, 
        borderWidth: 2, 
        borderColor: 'gray', 
        backgroundColor: 'transparent', 
        marginRight: 10, 
      },
    completedCircle: {
        backgroundColor: 'gray', 
        borderColor: 'gray', 
    },
    addButton: {
        backgroundColor: '#e0e0e0', 
        borderRadius: 25, 
        paddingVertical: 8, 
        paddingHorizontal: 20, 
        alignItems: 'center', 
        marginVertical: 10, 
        elevation: 2, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 2, 
      },
    addButtonText: {
        color: 'black', 
        fontSize: 18, 
        fontWeight: 'bold', 
      },
  });