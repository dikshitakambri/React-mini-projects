import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handlechange(event) {
    const newV = event.target.value;
    const input = event.target.name;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [input]: newV
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={handlechange}
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          name="lName"
          onChange={handlechange}
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          name="email"
          onChange={handlechange}
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
