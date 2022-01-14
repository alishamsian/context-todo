import React, { useState } from "react";
import { useTodoContext } from "../../context/TodoProvider";
import "./TodoForm.css";
const TodoForm = () => {
  const { getNumberOfTodos, addTodo } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!todoItem) {
      return;
    }

    addTodo(todoItem);
    setTodoItem("");
  };

  return (
    <div>
      <h3>Number of Todo items: {getNumberOfTodos()} </h3>
      <form className="AddTaskForm" onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="add new todo"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
