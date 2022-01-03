import React, { useState } from 'react';

import './App.css';

import { TaskForm } from './components/TaskForm/TaskForm';
import { TasksList } from './components/TasksList/TasksList';

const initialState = [
  {
    id: 1,
    title: 'Primera tarea',
    description: 'Primera descripción',
    done: true
  },
  {
    id: 2,
    title: 'Segunda tarea',
    description: 'Segunda descripción',
    done: false
  },
  {
    id: 3,
    title: 'Tercera tarea',
    description: 'Tercera descripción',
    done: false
  }
]

interface ITask {
  id: number
  title: string,
  description: string,
  done: boolean
}

function App(): JSX.Element {
  const [tasksList, setTasksList] = useState<ITask[]>(initialState);

  const addTask = (task: ITask) => {
    // const newTasks: ITask[] = [ ...tasksList, { ...task, created: 123}] Da error porque el objeto no coincide con el que se le está pasando

    setTasksList([ ...tasksList, task ])
  }

  return (
    <div className="container">
        <div className="App">
          <TaskForm addTask={addTask} />
          <TasksList tasks={tasksList} />
        </div>
    </div>
  );
}

export default App;
