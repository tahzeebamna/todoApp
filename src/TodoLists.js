import React from 'react';
import './App.css'

const TodoLists = (props) =>{
    
    return (
        <div className="todo_style">
         <li>{props.text}</li>
         <i className="fa fa-times" area-hidden ="true" onClick={()=>{
             props.onSelect(props.id);
         }}></i>
        </div>
    );
}

export default TodoLists