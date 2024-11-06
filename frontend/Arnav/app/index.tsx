import { useState, useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  created_at: Date;
}

const STORAGE_KEY = '@todos';

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos)).catch(() => 
      Alert.alert('Error', 'Failed to save todos')
    );
  }, [todos]);

  const loadTodos = async () => {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsedTodos = JSON.parse(saved).map((todo: any) => ({
          ...todo,
          created_at: new Date(todo.created_at)
        }));
        setTodos(parsedTodos);
      }
    } catch {
      Alert.alert('Error', 'Failed to load todos');
    }
  };

  const addTodo = () => {
    const title = newTodo.trim();
    if (!title) {
      Alert.alert('Error', 'Title cannot be empty');
      return;
    }

    const todo: Todo = {
      id: Date.now().toString(),
      title,
      completed: false,
      created_at: new Date()
    };
    
    setTodos([todo, ...todos]);
    setNewTodo('');
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const updateTodo = (id: string, newTitle: string) => {
    const title = newTitle.trim();
    if (!title) {
      Alert.alert('Error', 'Title cannot be empty');
      return;
    }

    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, title } : todo
    ));
    setEditingId(null);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.header}>Todo List</ThemedText>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newTodo}
          onChangeText={setNewTodo}
          placeholder="Add a new todo..."
          onSubmitEditing={addTodo}
        />
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <ThemedText>Add</ThemedText>
        </TouchableOpacity>
      </View>

      {todos.map(todo => (
        <View key={todo.id} style={styles.todoItem}>
          <TouchableOpacity onPress={() => toggleTodo(todo.id)}>
            <ThemedText>[{todo.completed ? 'x' : ' '}]</ThemedText>
          </TouchableOpacity>

          {editingId === todo.id ? (
            <TextInput
              style={styles.input}
              defaultValue={todo.title}
              onSubmitEditing={(e) => updateTodo(todo.id, e.nativeEvent.text)}
              onBlur={() => setEditingId(null)}
              autoFocus
            />
          ) : (
            <TouchableOpacity 
              style={styles.todoTitle} 
              onPress={() => setEditingId(todo.id)}
            >
              <ThemedText style={todo.completed ? styles.completed : undefined}>
                {todo.title}
              </ThemedText>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
            <ThemedText style={styles.deleteButton}>X</ThemedText>
          </TouchableOpacity>
        </View>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 8,
  },
  button: {
    padding: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  todoTitle: {
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },
  deleteButton: {
    color: 'red',
  },
});
