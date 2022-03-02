import React from 'react';
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';


const TodoListItem = ({todo, onRemoveTodo}) => {
  
    return (
    <li className={styles.ListItem}>
        <span >{todo.id}: </span>
        <span>{todo.fields.Title}</span>
        <button type="button" className={styles.button} onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li> 
    );

};

TodoListItem.propTypes = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func
};

export default TodoListItem;