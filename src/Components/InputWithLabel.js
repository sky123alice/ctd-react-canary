import React from 'react';
import PropTypes from 'prop-types';

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
        
        </>
    );
}

InputWithLabel.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func

};

export default InputWithLabel;