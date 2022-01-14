import {useContext, createContext, useState } from "react";

const TodoContext = createContext();

const initialTodoListState = ["Ali Shamsian"]

const TodoProvider = ({children})=>{
    const [todoList, setTodoList] = useState(initialTodoListState);

    const getNumberOfTodos = ()=> todoList.length;

    const addTodo = (newTodoItem)=>{
        setTodoList([...todoList , newTodoItem]);
    }

    const removeTodo = (todoIndex)=>{
        const newList = todoList.filter((_ , index)=> index !== todoIndex);
        setTodoList(newList);
    }

    const contextValue = {
        todoList,
        getNumberOfTodos,
        addTodo,
        removeTodo
    } 

    return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
}

export const useTodoContext = () => useContext(TodoContext)

export default TodoProvider;