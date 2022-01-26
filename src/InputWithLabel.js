import React from 'react';

function InputWithLabel(props){
   
    const inputRef = React.useRef();

    React.useEffect(() =>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    },[inputRef]
    );
    
    return(
        <>
        
        <input 
            ref={inputRef}
            id="todoTitle" 
            type="text" 
            name="title" 
            value={props.todoTitle} 
            onChange = {props.handleTitleChange} 
            >
            </input>
        <label htmlFor ="label">
        {props.children}  
        </label>
        </>
    );
}

export default InputWithLabel;