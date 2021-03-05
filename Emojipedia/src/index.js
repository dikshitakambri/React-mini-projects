import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function(emojiEntry){
  return emojiEntry.meaning.substring(0, 100)
});

console.log(newEmojipedia);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

