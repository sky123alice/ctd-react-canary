import React from 'react';


const TodoListItem = ({todo, onRemoveTodo}) => {
   
    return (
    <li>
        <span>{todo.id}: </span>
        <span>{todo.fields.title}</span>
        <button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li> 
    );

};

export default TodoListItem;