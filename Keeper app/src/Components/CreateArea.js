import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [isExpand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function Expand(){
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
          {isExpand && 
          <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> }
        
        <textarea
          name="content"
          onChange={handleChange}
          onClick={Expand}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand ? "3" : "1"}
        />
        <Zoom in={isExpand}>
        <Fab onClick={submitNote}>
          <AddCircleIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
