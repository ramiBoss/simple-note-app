import React, {useState, useEffect} from 'react';
import {TextField, Button, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from 'react-redux';
// import {LabelTag} from './label';

function EditableNote({handlePane, note}){
  const [content, setContent] = useState();
  if(note !== undefined){
    setContent(note.content);
  }
  // useEffect(() =>{
  //   setContent(note.content);
  // },[content]);
  console.log("note in EditableNote: " + JSON.stringify(note));
  const handleOnChange = (event) =>{
    setContent(event.target.value);
  }
  const handleSubmit = () =>{
    console.log("in submit: ");
  }

  return(
    <div>
      <IconButton onClick = {(event) => { handlePane(false)} }>
        <CloseIcon/>
      </IconButton>
      <form
      // className={classes.form}
      noValidate autoComplete="off"
      onSubmit={handleSubmit}>
        <TextField id="outlined-basic"
        value = {content}
        name="noteContent"
        variant="outlined"
        onChange = {handleOnChange}/>

        <Button
          color="primary"
          // fullWidth
          type="submit"
          variant="contained"
          // className={classes.addUser}
        >
          Save Changes
        </Button>
      </form>
    </div>
  );
}

export default EditableNote;
