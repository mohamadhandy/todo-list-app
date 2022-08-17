import React from 'react';
import TodoCard from '../TodoCard';

const Index = props => {
  const _deleteTodoHandler = (todo, id) => {
  !todo.isComplete ? props.deleteTodos(id) : '';
  };

  const _editTodoHandler = (todoParam, id) => {
    !todoParam.isComplete ? props.editTodos(id) : ''
  }
  const _completeTodoHandler = (id) => {
    props.completeTodo(id)
  }

  const _removeTodosHandler = () => {
    props.removeTodos()
  }

  return (
    <div>
      {
      props.todos.length > 0 ?
        props.todos.map(todo => {
          return (
            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={todo.id}>
              <TodoCard
                
                name={todo.name}
                desc={todo.desc}
                isComplete={todo.isComplete}
                deleteHandler={() => _deleteTodoHandler(todo, todo.id)}
                editHandler={() => _editTodoHandler(todo, todo.id)}
                completeTodoHandler={() => _completeTodoHandler(todo.id)}
              />
            </div>
            
          );
        })
        : ''
      }
      {
        props.todos.length > 0 
        ?
        <div>
          <button onClick={() => _removeTodosHandler()}>Remove All</button>
        </div>
        :
        ''
      }
    </div>
  );
};

export default Index;