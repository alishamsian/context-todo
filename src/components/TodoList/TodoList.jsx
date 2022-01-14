import React from 'react'
import { useTodoContext } from '../../context/TodoProvider'
import "./TodoList.css"
const TodoList = () => {
    const {todoList , removeTodo} = useTodoContext();
    return (
        <ul>
            {todoList.map((todo , index) =>(
                <li key={index} className="TaskItem">
                    {todo}
                    <button onClick={()=>removeTodo(index)}>delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
