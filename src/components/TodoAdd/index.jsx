import React from 'react';

const Index = ({handleSubmit, todo, setTodo}) => {

  return (
    <form className='todo-form' onSubmit={e => handleSubmit(e)}>
      <div className='form-field'>
        <input
          type='text'
          name='name'
          value={todo.name}
          className='todo-input'
          placeholder='Name your plan?'
          onChange={e => setTodo({ ...todo, name: e.target.value })}
        />
      </div>
      <br></br>
      <div className='form-field'>
        <input
          type='text'
          name='description'
          className='todo-input'
          value={todo.desc}
          placeholder='Description of your todo?'
          onChange={e => setTodo({ ...todo, desc: e.target.value })}
        />
      </div>
      <br></br>
      <button type='submit' className='todo-button'>
        {todo.id ? 'Edit' : 'Add'}
      </button>
    </form>
  );
};

export default Index;