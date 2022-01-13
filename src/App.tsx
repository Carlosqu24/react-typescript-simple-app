import React, { useState } from 'react';
import { v4 } from 'uuid';
import { ITask } from './interfaces/Task';

import './App.css';

import { TaskForm } from './components/TaskForm/TaskForm';
import { TasksList } from './components/TasksList/TasksList';

const initialState = [
  {
    id: v4(),
    title: 'First Task',
    description: 'First Description',
    done: true
  },
  {
    id: v4(),
    title: 'Second Task',
    description: 'Second Description',
    done: false
  },
  {
    id: v4(),
    title: 'Third Task',
    description: 'Third Description',
    done: false
  }
];

function App(): JSX.Element {
  const [tasksList, setTasksList] = useState<ITask[]>(initialState);

  const addTask = (task: ITask) => {
    setTasksList([ ...tasksList, task ]);
  };

  const deleteTask = (id: string): void => {
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
