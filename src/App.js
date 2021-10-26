import React from 'react';
import TodoList from './TodoList.js';
import AddToDoForm from './AddTodoForm.js';

function App() {
  return (
    
      <div>
        <h1>Todo List </h1>
          <AddToDoForm />
          <TodoList />
      </div>
   
  );
}

export default App;
