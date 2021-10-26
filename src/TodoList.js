import React from 'react';

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

function TodoList(){
    return(
        <ul>{
            todoList.map(function (item){
              return <li key={item.id}>{item.title}</li>;
            })}
        </ul>

    );
}

export default TodoList;
