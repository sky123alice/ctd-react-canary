import React from 'react';
import InputWithLabel from './InputWithLabel';
import styles from './AddTodoForm.Module.css';
import PropTypes from 'prop-types';

function AddToDoForm({onAddTodo}){
    
    const [todoTitle, setTodoTitle] = React.useState('');//variable, function

    function handleTitleChange(event){
        const newTodoTitle = event.target.value;
        event.preventDefault();
        setTodoTitle(event.target.value);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo({fields: {
            Title: todoTitle,
          }
    , id: Date.now()});   
        setTodoTitle('');
    }
    
    
    return(
        <form onSubmit={handleAddTodo}>
            <>Title </>
                <InputWithLabel 
                htmlFor="label" 
                handleTitleChange ={handleTitleChange}
                todoTitle={todoTitle} 
                />
                <button type="submit" className={styles.button} > Add</button>
            
        </form>
    );
}

// AddToDoForm.propTypes = {
//     onAddTodo: PropTypes.func
// };

export default AddToDoForm;