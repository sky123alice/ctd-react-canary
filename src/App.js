import React from 'react';
import TodoList from './TodoList.js';
import AddToDoForm from './AddTodoForm.js';



function App() {
  
  /* const [newTodo, setNewTodo] = React.useState('');  */
  const [todoList, setTodoList] = React.useState([]); 

  function addTodo(newTodo){
    setTodoList([...todoList,newTodo]);//check
  }

  return (
    
      <div>
        <h1>Todo List  </h1>
          <AddToDoForm onAddTodo={addTodo} />
          <p>
             {/* {newTodo.title} */}
          </p>

          <TodoList todoList={todoList} />
      </div>
   
  ); 
}

export default App;
