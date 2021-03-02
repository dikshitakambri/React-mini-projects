import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function Dictionary(emoji) {
  return (
    <Entry
      key={emoji.id}
      aria-label={emoji.name}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <input className="input" />
      <dl className="dictionary">{emojipedia.map(Dictionary)}</dl>
    </div>
  );
}

export default App;
