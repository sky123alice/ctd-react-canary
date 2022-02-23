import React from 'react';
import styles from './TodoListItem.module.css';


const TodoListItem = ({todo, onRemoveTodo}) => {
   
    return (
    <li className={styles.ListItem}>
        <span >{todo.id}: </span>
        <span>{todo.fields.title}</span>
        <button type="button" className={styles.button} onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li> 
    );

};

TodoListItem.PropTypes = {
    todo: PropTypes.string,
    onRemoveTodo: PropTypes.func
};

export default TodoListItem;