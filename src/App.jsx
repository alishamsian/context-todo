import React from 'react'
import "./App.css"
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import TodoProvider from './context/TodoProvider'
const App = () => {
    return (
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>

            <TodoProvider>
                <TodoForm />
                <TodoList />
            </TodoProvider>
        </div>
    )
}

export default App
