import React, {useState} from 'react';
import TodoCard from '../TodoCard';

// import './styles.css';

const Index = props => {

  const _deleteTodoHandler = id => {
    props.deleteTodos(id);
  };

  const _editTodoHandler = (todoParam, id) => {
    console.log("todolist", todoParam)
    console.log("id", id)
    props.editTodos(todoParam, id)
  }
  const _completeTodoHandler = (id) => {
    props.completeTodo(id)
  }

  return (
    <div>
      {props.todos.map(todo => {
        return (
          <div className='todo-row' key={todo.id}>
            <TodoCard
              
              name={todo.name}
              desc={todo.desc}
              isComplete={todo.isComplete}
              deleteHandler={() => _deleteTodoHandler(todo.id)}
              editHandler={() => _editTodoHandler(todo, todo.id)}
              completeTodoHandler={() => _completeTodoHandler(todo.id)}
            />
          </div>
          
        );
      })}
    </div>
  );
};

export default Index;