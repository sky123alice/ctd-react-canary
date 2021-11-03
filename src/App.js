import React from 'react';
import TodoList from './TodoList.js';
import AddToDoForm from './AddTodoForm.js';
import todoList from './TodoList.js';

function App() {
  
  const [newTodo, setNewTodo] = React.useState('');
  
  return (
    
      <div>
        <h1>Todo List  </h1>
          <AddToDoForm onAddTodo={setNewTodo}/>
          <p>
             newTodo
          </p>


          <TodoList list ={todoList}/>
      </div>
   
  );
}

export default App;
