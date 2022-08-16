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

  return (
    <div>
      {props.todos.map(todo => {
        return (
          <TodoCard
            key={todo.id}
            name={todo.name}
            desc={todo.desc}
            deleteHandler={() => _deleteTodoHandler(todo.id)}
            editHandler={() => _editTodoHandler(todo, todo.id)}
          />
        );
      })}
    </div>
  );
};

export default Index;