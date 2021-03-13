import React, {useState} from "react";

function Input(props){

    const [textItem, settextItem] = useState("");

    function Handlechange(event) {
        const newItem = event.target.value;
    
        settextItem(newItem);
      }

    return <div>
        <div className="form">
        <input type="text" value={textItem} onChange={Handlechange} />
        <button onClick={() =>{
            props.onChange(textItem);
            settextItem("");
         }}>
        <span>Add</span>
        </button>
      </div>
    </div>;
}

export default Input;