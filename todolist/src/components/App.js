import React, { useState } from "react";
import Todoitem from "./todoitem";
import Input from "./InputArea";

function App() {
  const [item, setItem] = useState([]);

  function Additem(textItem) {
    setItem((prevItem) => {
      return [...prevItem, textItem];
    });
  }

  function deleteItem(id){
    setItem((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input onChange= {Additem}/>
      <div>
        <ul>
          {item.map((todolist, index) => (
            <Todoitem 
            key = {index}
            id ={index}
            text={todolist}
            onClick={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
