import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ToDoList from './toDoList';
import ToDoForm from './toDoForm';

function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
