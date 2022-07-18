import React, { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {
const [todoID, setTodoID] = useState(1)
  // const {isLoading,data:todos =[]} = useGetTodosQuery();  
const {data:todo,isLoading} = useGetTodoQuery(todoID);
 
const nextTodo =()=>{
  setTodoID(todoID+1);
}
const prevTodo =()=>{
  if (todoID===1)return;
  setTodoID(todoID-1);
}
  return (
  <>
    <h1>Todos -RTK Query</h1>
    <hr></hr>
    <h4>isLoading : {isLoading?'TRUE':'FALSE'}</h4>    
    <pre>{JSON.stringify(todo)}</pre>
    {/* <ul>
   {todos.map(todo=> <li key={todo.id}>
     <strong>{todo.completed?'DONE':"PENDING"}</strong>{todo.title}
     </li>) }
    </ul> */}
    <button type='button' onClick={prevTodo}>Prev todo</button>
    <button type='button' onClick={nextTodo}>Next todo</button>
    </>
  )
}
