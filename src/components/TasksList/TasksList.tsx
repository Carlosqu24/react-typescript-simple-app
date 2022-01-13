import React from 'react'

import { ITask } from '../../interfaces/Task'
import { TaskItem } from '../TaskItem/TaskItem'

import './TaskList.css'

interface Props {
      tasks: ITask[],
      deleteTask: (id: string) => void
};

export const TasksList = ({ tasks, deleteTask }: Props) => {
      
      return (
            <div className="tasks-list">
                  <h2>TasksList</h2>
                  <div className="tasks-container">
                        {
                              tasks.map((task: ITask) => (
                                    <TaskItem 
                                          key={task.id}
                                          id={task.id}
                                          title={task.title}
                                          description={task.description}
                                          done={task.done}
                                          deleteTask={deleteTask}
                                    />
                              ))
                        }
                  </div>
            </div>
      )
}
