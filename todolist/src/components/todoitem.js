import React, { useState } from "react";

function Todoitem(props){

    
    return <div onClick={() => {
        return props.onClick(props.id);
    }}>
        <li>{props.text}</li>
    </div>
}

export default Todoitem;