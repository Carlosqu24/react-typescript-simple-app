import React, { useState } from 'react';

import { ITask } from './interfaces/Task';

import './App.css';

import { TaskForm } from './components/TaskForm/TaskForm';
import { TasksList } from './components/TasksList/TasksList';

const initialState = [
  {
    id: new Date().getTime(),
    title: 'Primera tarea',
    description: 'Primera descripción',
    done: true
  },
  {
    id: new Date().getTime(),
    title: 'Segunda tarea',
    description: 'Segunda descripción',
    done: false
  },
  {
    id: new Date().getTime(),
    title: 'Tercera tarea',
    description: 'Tercera descripción',
    done: false
  }
];

function App(): JSX.Element {
  const [tasksList, setTasksList] = useState<ITask[]>(initialState);

  const addTask = (task: ITask) => {
    setTasksList([ ...tasksList, task ]);
  };

  const deleteTask = (id: number): void => {
    const mappedTaskList = tasksList.filter(task => task.id !== id);

    setTasksList(mappedTaskList);
  };

  return (
    <div className="container">
        <div className="App">
          <TaskForm addTask={addTask} />
          <TasksList 
            tasks={tasksList}
            deleteTask={deleteTask} 
          />
        </div>
    </div>
  );
}

export default App;
