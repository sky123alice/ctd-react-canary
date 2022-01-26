import React from 'react';
/* import AddToDoForm from './AddTodoForm'; */
import TodoListItem from './TodoListItem';



const TodoList = ({todoList, onRemoveTodo}) => { 
  
   return(
   <ul>
      {todoList.map((item) => (
       <TodoListItem key = {item.id} todo = {item} onRemoveTodo={onRemoveTodo}/>
       ))}
    </ul>
   );
};
 

export default TodoList;
