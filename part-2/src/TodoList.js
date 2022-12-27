import React, { useState } from 'react'
import NewTodoForm from './NewTodoForm'
import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList() {

   const [todos, setTodos] = useState([])

   const add = (newItemObj) => {
      setTodos(todos => [...todos, newItemObj])
   }
   const update = (id, updatedTask) => {
      setTodos(todos =>
         todos.map(todo =>
            todo.id === id ? { ...todo, task: updatedTask } : todo
         )
      )
   }
   const remove = (id) => {
      setTodos(todos => todos.filter(item => item.id !== id))
   }
   const todoComponents = (todos.map(item =>
      <TodoItem
         key={item.id}
         id={item.id}
         task={item.task}
         handleRemove={remove}
         handleUpdate={update}
      />
   ))
   return (
      <div className="TodoList">
         <h1 className="TodoList-title">Todo List</h1>
         <NewTodoForm addItem={add} />
         <div className="Todotodos">
            {todoComponents}
         </div>
      </div>
   )
}
export default TodoList