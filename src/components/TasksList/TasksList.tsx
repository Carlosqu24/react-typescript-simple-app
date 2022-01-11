import React from 'react'

import './TaskList.css'

export const TasksList = (props: any) => {
      
      
      return (
            <div className="tasks-list">
                  <h2>TasksList</h2>
                  <div className="tasks-container">
                        {
                              props.tasks.map((task: any) => (
                                    <div className="card" key={task.id}>
                                          <h3 className="card__title" >{task.title}</h3>
                                          <p className="card__description">{task.description}</p>
                                          <span 
                                                className={`card__status ${task.done == 'true' ? 'success' : 'pending'}`}
                                          >
                                                { task.done == 'true' ? 'Hecha' : 'Pendiente'}
                                          </span>
                                    </div>
                              ))
                        }
                  </div>
            </div>
      )
}
