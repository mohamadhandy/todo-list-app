import React from 'react';
import {FaCheck} from 'react-icons/fa'
import {FiLoader} from 'react-icons/fi'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import {AiOutlineFileDone} from 'react-icons/ai'

const Index = props => {
  const { name, desc, id, isComplete } = props;
  console.log("props from card", props)
  return (
    <div className='item-row'>
      <div className='name-item'>
        <h2>{name}</h2>
        <p>{desc}</p>
        <p>{isComplete ? <FaCheck /> : <FiLoader /> }</p>
      </div>
      <div className='icon-item'>
        <p onClick={() => props.deleteHandler(id)}>
          Delete <RiCloseCircleLine />
        </p>
        <p onClick={() => props.editHandler(id)}>
          Edit <TiEdit />
        </p>
        <p onClick={() => props.completeTodoHandler(id)}>
          Complete todo <AiOutlineFileDone className="complete-todo" />
        </p>
      </div>
      
      {/* <RiCloseCircleLine 
        onClick={() => props.deleteHandler(id)}
        className="delete-icon"
      />
      <TiEdit 
        onClick={() => props.editHandler(props, id)}
        className='edit-icon'
      />
      <AiOutlineFileDone 
        onClick={() => props.completeTodoHandler(id)}
      /> */}
    </div>
  );
};

export default Index;