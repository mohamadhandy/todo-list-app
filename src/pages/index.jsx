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
    desc: '',
    isComplete: false
  });

  const addTodoHandler = todo => {
    const newTodo = [{ id: uuidv4(), name: todo.name, desc: todo.desc, isComplete: false }];
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

  const updateTodo = id => {
    const newTodo = todos.find(item => item.id === id)
    setTodo(newTodo)
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos))
  }

  const removeTodos = () => {
    setTodos([]);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo.name || !todo.desc) {
      alert('Please fill in all fields');
      return;
    } else if (!todo.id){
      addTodoHandler(todo)
    } else {
      const dataUpdates = todos.map((t) => t.id === todo.id ? {...t, name: todo.name, desc: todo.desc} : t)
      setTodos(dataUpdates)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataUpdates))
    }
    setTodo({
      id: '',
      name: '',
      desc: ''
    });
  };

  useEffect(() => {
    const listTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    listTodos && setTodos(listTodos);
  }, [setTodos]);

  return (
    <div className='todo-app'>
      <h1>Hello, Create Your Activity</h1>
      <TodoAdd addHandler={addTodoHandler} todo={todo} setTodo={setTodo} todos={todos} handleSubmit={handleSubmit} />
      <TodoList todos={todos} deleteTodos={deleteTodoHandler} editTodos={updateTodo} completeTodo={completeTodo}
      removeTodos={removeTodos} />
    </div>
  );
};

export default Index;