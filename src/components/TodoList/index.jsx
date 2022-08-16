import React, {useState} from 'react';
import TodoCard from '../TodoCard';

// import './styles.css';

const Index = props => {
  console.log('props from list', props);
  console.log("Props test", props)

  // const updateTodo = (todoId) => {
  //   setTodo(prev => prev.map(item => (item.id === todoId)));
  // };

  // console.log(updateTodo("b95d7eb2-05e5-4568-a0d4-8d10da6f1bcf", {
  //   name: "nugraha",
  //   desc: "description test"
  // }))

  const _deleteTodoHandler = id => {
    props.deleteTodos(id);
  };

  const _editTodoHandler = (todoParam, id) => {
    console.log("todolist", todoParam)
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