import React, { FormEvent, useState } from 'react'

import { ITask } from '../../interfaces/Task';
import { CustomEventTarget } from '../../interfaces/CustomEventTarget';

import './TaskForm.css'

// type FormElement = React.FormEvent<HTMLFormElement> | React.FormEvent<EventTarget>;
type HandleInputChange = CustomEventTarget

interface Props {
      addTask: (task: ITask) => void
};

const initialState = {
      id: new Date().getTime(),
      title: '',
      description: '',
      done: false
};

export const TaskForm = ({ addTask }: Props) => {
      const [form, setForm] = useState<ITask>(initialState);

      const handleInputChange = (e: CustomEventTarget): void => {
      
            setForm({ 
                  ...form, 
                  [e.target.name]: e.target.value 
            });
      };

      const handleSubmit = (e: FormEvent): void => {
            e.preventDefault();

            addTask(form);
      }

      return (
            <form onSubmit={(e) => handleSubmit(e)}>
                  <h2>Add Task</h2>

                  <input 
                        type="text"
                        name="title"
                        className="form-control" 
                        placeholder="Write a title" 
                        onChange={(e) => handleInputChange(e)}
                  />

                  <input 
                        type="text"
                        name="description"
                        className="form-control" 
                        placeholder="Write a description" 
                        onChange={(e) => handleInputChange(e)}
                  />

                  <select 
                        name="done"
                        className="form-control"
                        onChange={handleInputChange}     
                  >
                        <option value={`${true}`}>Hecha</option>
                        <option value={`${false}`}>Pendiente</option>
                  </select>

                  <button className="form-control" type="submit" >Save Task</button>
            </form>
      )
}
