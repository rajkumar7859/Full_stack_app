import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

type todo = {
  id: number;
  content: string;
  status: boolean;
};

const Todo = () => {
  const [todos, setTodos] = useState<todo[]>([]);

  const addTodos = (content: string) => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        content,
        status: false
      }
    ]);
  };

  const toggleStatus = (id: number) => {
    let upDatedTodo = todos.map((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodos(upDatedTodo);
  };

  const deleteTodos = (id: number) => {
    let upDatedTodo = todos.filter((item) => item.id !== id);
    setTodos(upDatedTodo);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput onAdd={addTodos} />
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          toggleStatus={toggleStatus}
          deleteTodos={deleteTodos}
        />
      ))}
    </div>
  );
};

export default Todo;
