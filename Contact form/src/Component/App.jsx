import "../styles.css";
import React from "react";
import Card from "./Card";
import Contact from "../Contact";

function CreateCard(contact){
  return <Card key={contact.id} name={contact.name} img= {contact.src} alt={contact.alt} tel={contact.tel} email={contact.email}/>
}

export default function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contact.map(CreateCard)}
    </div>
  );
}
