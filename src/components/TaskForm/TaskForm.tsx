import React, { useState } from 'react'

import './TaskForm.css'

type FormElement = React.FormEvent<HTMLFormElement>;

export const TaskForm = (props: any) => {
      const [form, setForm] = useState<object>({});

      const handleInputChange = (e: any) => {
            setForm({ 
                  ...form, 
                  [e.target.name]: e.target.value 
            });
      };

      const handleSubmit = (e: FormElement) => {
            e.preventDefault();

            props.addTask(form)
      }

      return (
            <form onSubmit={(e) => handleSubmit(e)}>
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

                  <button type="submit" >Save Task</button>
            </form>
      )
}
