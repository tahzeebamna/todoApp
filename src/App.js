import React, { useState} from 'react'

import './App.css';
import TodoLists from './TodoLists';

function App() {
  const [listItem, setListItem] = useState("")
  const [item, setItem] = useState([])
  
  const listEvent = (event) =>{
    setListItem(event.target.value)

  }
  const listOfitem =()=>{
    setItem((preVal)=>{
      return [...preVal,listItem]

    })
    setListItem(" ");


  }
  const deleteItem=(id)=>{
    console.log("deete");
     
    setItem((preVal)=>{
      return preVal.filter((arrElem, index)=>{
        return index !== id;

      })
    })
}
  return (
    <div className="main_div">
      <div className="center_div">
      <br/>
        <h1>TODO App</h1>
      <br/>
        <input type="text" value ={listItem} onChange={listEvent}/>
        <button className="newBtn" onClick ={listOfitem}>+</button>
      <br/>
      
        <ol>
          {item.map((itemVal,index)=>{
            return <TodoLists keys={index}
             id={index} 
             text ={itemVal}
             onSelect={deleteItem}
             />
          })
          }
        
        </ol>    
      </div>
     
    </div>
  );
}

export default App;
