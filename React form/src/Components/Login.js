import React, { useState } from "react";
import Input from "./Input";

function Form(props) {
  const [headingText, setHeadingText] = useState("Register");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleclick() {
    setHeadingText("Registered");
  }

  function Mousehandle() {
    setMouseOver(true);
  }

  function MousehandleOut() {
    setMouseOver(false);
  }

  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.isRegister && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        type="submit"
        onMouseOver={Mousehandle}
        onMouseOut={MousehandleOut}
        onClick={handleclick}
      >
        {props.isRegister ? [headingText] : "Login"}
      </button>
    </form>
  );
}

export default Form;
