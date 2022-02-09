import React from 'react';
import TodoListItem from './TodoListItem';
import styles from './TodoListItem.module.css';


const TodoList = ({todoList, onRemoveTodo}) => { 
  
   return(
   <ul>
      {todoList.map((item) => (
       <TodoListItem key = {item.id} todo = {item} onRemoveTodo={onRemoveTodo} className={styles.itemInput} />
       ))}
    </ul>
   );
};
 

export default TodoList;
