import React, { useState } from 'react'

function TodoItem({ id, task, handleRemove, handleUpdate }) {
   const [editTask, setEditTask] = useState(task)
   const [isEditing, setIsEditing] = useState(false)

   const toggleEdit = () => {
      setIsEditing(edit => !edit)
   }

   const handleChange = e => {
      setEditTask(e.target.value);
   }

   const update = (e) => {
      e.preventDefault();
      handleUpdate(id, editTask)
      setIsEditing(false)
   }

   const remove = () => handleRemove(id)

   let todo = (
      <div>
         <li>{task}</li>
         <button onClick={remove}>X</button>
         <button onClick={toggleEdit}>Edit</button>
      </div>
   )

   if (isEditing) {
      todo = (
         <div>
            <form onSubmit={update}>
               <input type="text" value={editTask} onChange={handleChange} />
               <button>Update!</button>
            </form>
         </div>
      );
   }

   return todo
}
export default TodoItem