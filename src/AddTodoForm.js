import React from 'react';

function AddToDoForm(props){
    
    const handleAddtodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.value;
        console.log(todoTitle);
        event.target.reset();
        onAddtodo(newTodo);
    }
    
 
    
    return(
        <form onSubmit={handleAddtodo}>
            <label htmlFor="todoTitle">
                Title 
            </label>
            <input id="todoTitle" type="text" name="title"/>
            <button type="submit">Add </button>
        </form>
    );
}

export default AddToDoForm;