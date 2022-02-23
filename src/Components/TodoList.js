import React from 'react';
import TodoListItem from './TodoListItem';



const TodoList = ({todoList, onRemoveTodo}) => { 
  
   return(
   <ul>
      {todoList.map((item) => (
       <TodoListItem key = {item.id} todo = {item} onRemoveTodo={onRemoveTodo} />
       ))}
    </ul>
   );
};
 
TodoList.PropTypes = {
   todoList: PropTypes.array,
   onRemoveTodo: PropTypes.func

};

export default TodoList;
