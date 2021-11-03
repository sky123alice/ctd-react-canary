import React from 'react';
import AddToDoForm from './AddTodoForm';
import TodoListItem from './TodoListItem';


const todoList = [
    {
      id: '1',
      title: 'watch lectures'
    },
    {
      id: '2',
      title: 'read textbook'
    },
    {
      id: '3',
      title: 'complete assignment'
    },
  
  ];

const TodoList = (props) => (
    <ul>
      {props.list.map((item) => (
        <TodoListItem key={item.id} todo={item} /> 
      ))}
    </ul>

  );
 

export default TodoList;
