import React, { useState } from 'react'; 
import ToDoList from './toDoList';
function App() {
  const [tasks, setTasks] = useState([ 
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
      
      <ToDoList tasks={tasks} /> 
      
  );
}

export default App;
