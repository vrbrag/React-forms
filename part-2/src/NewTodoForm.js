import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

function NewTodoForm({ addItem }) {

   const INITIAL_STATE = {
      task: ""
   }
   const [formData, setFormData] = useState(INITIAL_STATE)
   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData(formData => ({
         ...formData,
         [name]: value
      }))
   }

   const input = (e) => {
      e.preventDefault()
      addItem({ ...formData, id: uuid() })
      setFormData({ task: "" })
   }

   return (
      <div>
         <form onSubmit={input}>
            <input
               type="text"
               placeholder="add item todo"
               name="task"
               value={formData.task}
               onChange={handleChange}
            />
            <button>Add Todo</button>
         </form>
      </div>
   )
}
export default NewTodoForm