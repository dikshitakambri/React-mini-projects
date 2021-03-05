import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      <dl>
        {notes.map((note) => (
          <Note key={note.id} title={note.title} content={note.content} />
        ))}
      </dl>
      <Footer />
    </div>
  );
}

export default App;
