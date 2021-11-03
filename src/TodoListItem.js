import React from 'react';

const TodoListItem = (props) => (

    <li>
        <span>{props.item.id}</span>
        <span>{props.item.title}</span>
    </li>
);

export default TodoListItem;