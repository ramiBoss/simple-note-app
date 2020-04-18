import React from 'react';
import {TextField, Button} from '@material-ui/core';

function Note({note}){
  return(
    <div>
      // <label><label> lable here
      <TextField id="outlined-basic"
      value = {note.content}
      name="noteContent"
      variant="outlined"/>
      <Button
        color="primary"
        // fullWidth
        // type="submit"
        variant="contained"
        // className={classes.addUser}
      >
        Edit
      </Button>
      <Button
        color="primary"
        // fullWidth
        // type="submit"
        variant="contained"
        // className={classes.addUser}
      >
        Delete
      </Button>
    </div>
  );
}

export{
  Note
}
