import React from 'react';
import TodoList from './TodoList.js';
import AddToDoForm from './AddTodoForm.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AppStyles from './App.module.css';



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
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={
          <div className={AppStyles.container}>
           <h1>Todo List</h1>
           <AddToDoForm onAddTodo={addTodo} className={AppStyles.button}/> 
           {(isLoading)? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
          </div>
        }/>
      
        <Route path = "/new" element={
          <h3>New Todo List</h3>
        }/>
     
      </Routes>
    </BrowserRouter> 
  ); 
       
}


export default App;
