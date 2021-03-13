import React, { useState } from "react";
import Todoitem from "./todoitem";

function App() {
  const [textItem, settextItem] = useState("");
  const [item, setItem] = useState([]);

  function Handlechange(event) {
    const newItem = event.target.value;

    settextItem(newItem);
  }

  function Additem() {
    setItem((prevItem) => {
      return [...prevItem, textItem];
    });
    settextItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={textItem} onChange={Handlechange} />
        <button onClick={Additem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todolist) => (
            <Todoitem 
            text={todolist}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
