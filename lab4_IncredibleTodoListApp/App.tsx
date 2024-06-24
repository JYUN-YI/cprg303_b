import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ToDoForm from './toDoForm';

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    // Update the tasks state with the new task
    setTasks([...tasks, task]);
  };

  return (
    <View style={styles.container}>
      {/* Pass addTask function as a prop to ToDoForm */}
      <ToDoForm addTask={addTask} />
      {/* Render your task list or any other components */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
});
