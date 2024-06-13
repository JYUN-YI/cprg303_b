"use client";
import React from 'react';
import {
  ScrollView,
  Pressable,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ToDoList = ({ tasks }) => { // Step 2.1: Destructure tasks prop
  return (
    <ScrollView>
      {tasks.map((task, index) => ( // Step 2.2: Map tasks to render list items
        <Pressable key={index}>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>{task}</Text> {/* Render task */}
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
