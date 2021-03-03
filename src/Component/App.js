import React from "react";
import emojipedia from "../emojipedia.js";
import Entry from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <input className="input" />
      <dl className="dictionary">{emojipedia.map(emoji =>
          <Entry
            key={emoji.id}
            aria-label={emoji.name}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
          />
       )
      }
    </dl>
    </div>
  );
}

export default App;