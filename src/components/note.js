import React from 'react';
import {TextField, Button} from '@material-ui/core';

function Note({note, handleEdit, handleDelete}){

  return(
    <div>
      {console.log("in note")}
      <TextField id="outlined-basic"
      value = {note.content}
      name="noteContent"
      variant="outlined"/>
      <Button
        color="primary"
        variant="contained"
        onClick = {handleEdit}
      >
        Edit
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick = {handleDelete}
      >
        Delete
      </Button>
    </div>
  );
}

export default Note;
