import React from 'react';
import TodoList from './TodoList.js';
import AddToDoForm from './AddTodoForm.js';




function App() {
    
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);

  React.useEffect(() =>{
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, 
    {headers:{ Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}})
    .then((response) => response.json())
    .then((result) => 
    {
      setIsloading(false);
      setTodoList(result.records);
      //console.log(result.records[0].fields.Title);
    }
    )});

  React.useEffect(() => {
    if(!isLoading){
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }}, [todoList]);

  function addTodo(newTodo){
    setTodoList([...todoList,newTodo]);
  }

  const removeTodo = (id) => {
  
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  
  };

  return (
    
      <>
        
        
        <h1>Todo List </h1>
          <AddToDoForm onAddTodo={addTodo} />
          {(isLoading)? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
  
        
      </>
   
  ); 
}

export default App;
