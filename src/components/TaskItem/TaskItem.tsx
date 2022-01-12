import React, { useState } from 'react'
import { ITask } from '../../interfaces/Task'
import './TaskItem.css'

export const TaskItem = ({ id, title, description, done }: ITask) => {
      return (
            <div className="card" key={id}>
                  <h3 className="card__title" >{title}</h3>
                  <p className="card__description">{description}</p>
                  <span
                        className={`card__status ${done ? 'success' : 'pending'}`}
                  >
                        {done ? 'Hecha' : 'Pendiente'}
                  </span>
            </div>
      )
}
