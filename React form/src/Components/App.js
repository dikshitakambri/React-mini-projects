import React, { useState } from "react";
import Form from "./Login";

const isUserRegistered = true;

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <Form isRegister={isUserRegistered} />
    </div>
  );
}

export default App;
