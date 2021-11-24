import React from 'react';

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
            <label htmlFor="todoTitle">
                Title:  
            </label>
            <input id="todoTitle" type="text" name="title" value={todoTitle} onChange = {handleTitleChange} />{/*is this correct? name attribute?*/}
            <button type="submit">Add</button>
        </form>
    );
}

export default AddToDoForm;