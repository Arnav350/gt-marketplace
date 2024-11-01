import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/TodoList'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.listHeader}>Your Todos</Text>
      <View style={styles.todoContainer}>
        <TodoList />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingLeft: 15,
  },
  listHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  todoContainer: {
    flex: 1,
    backgroundColor: '#f5fbff',
    borderRadius: 10,
    marginRight: 15,
  },

});
