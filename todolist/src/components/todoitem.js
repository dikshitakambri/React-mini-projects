import React, { useState } from "react";

function Todoitem(props){

    const [isDone, setisDone] = useState(false);

    function textDecor(){
        setisDone(prevStyle => {
            return !prevStyle;
        })
    }
    return <div onClick={textDecor}>
        <li style={{textDecoration: isDone ? 'line-through' : "none"}}>{props.text}</li>
    </div>
}

export default Todoitem;