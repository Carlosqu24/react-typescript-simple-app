import React, { useState } from 'react'
import { ITask } from '../../interfaces/Task'
import './TaskItem.css'

interface Props {
      id: string,
      title: string,
      description: string,
      done: boolean,
      deleteTask: (id: string) => void
}

export const TaskItem = ({ id, title, description, done, deleteTask }: Props) => {
      return (
            <div className="card" key={id}>
                  <h3 className="card__title" >{title}</h3>
                  <p className="card__description">{description}</p>
                  <span
                        className={`card__status card__status--${done ? 'success' : 'pending'}`}
                  >
                        {done ? 'Done' : 'Pending'}
                  </span>

                  <button
                        className="card__delete-task"
                        onClick={() => deleteTask(id)}
                  >Delete Task</button>
            </div>
      )
}
