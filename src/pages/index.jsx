import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoAdd from '../components/TodoAdd';
import TodoList from '../components/TodoList';

const Index = () => {
  const LOCAL_STORAGE_KEY = 'list-todos';
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: '',
    name: '',
    desc: ''
  });

  const addTodoHandler = todo => {
    const newTodo = [{ id: uuidv4(), name: todo.name, desc: todo.desc }];
    setTodos([...todos, ...newTodo]);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...todos, ...newTodo])
    );
  };

  const deleteTodoHandler = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
  };

  const updateTodo = (todoObject, newValue) => {
    console.log("newValue", newValue)
    console.log("obj", todoObject)
    // console.log("todoId", todoId)
    const newTodo = todos.map(item => item.id === newValue ? {...item, name: todo.name, desc: todo.desc} : item)
    console.log("newTdoos", newTodo)
    setTodos(todos.map(item => item.id === newValue ? {...item, name: todo.name, desc: todo.desc} : item))
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodo))
    console.log("todo", todo)
    console.log("todos", todos)
  }

  useEffect(() => {
    const listTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    listTodos && setTodos(listTodos);
  }, [setTodos]);

  return (
    <div>
      <h1>Hello, Create Your Activity</h1>
      <TodoAdd addHandler={addTodoHandler} todo={todo} setTodo={setTodo} />
      <TodoList todos={todos} deleteTodos={deleteTodoHandler} editTodos={updateTodo} />
    </div>
  );
};

export default Index;