import React from 'react';
import InputWithLabel from './InputWithLabel';

function AddToDoForm({onAddTodo}){
    
    const [todoTitle, setTodoTitle] = React.useState('');//variable, function

    function handleTitleChange(event){
        const newTodoTitle = event.target.value;
        event.preventDefault();
        setTodoTitle(event.target.value);
        console.log(newTodoTitle);
    
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo({title:todoTitle, id: Date.now()});   
        setTodoTitle('');
    }
    
    
    return(
        <form onSubmit={handleAddTodo}>
            <InputWithLabel 
            htmlFor="label" 
            handleTitleChange ={handleTitleChange}
            todoTitle={todoTitle}
            >
            Title
            </InputWithLabel>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddToDoForm;