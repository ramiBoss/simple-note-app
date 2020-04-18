import React from 'react';
import {LabelTag} from './label';

function EditableNote({note}){

  const [content, setContent] = useState({note.content});
  const handleOnChange = (event) =>{
    setContent(event.target.value);
  }
  const handleSubmit = () =>{

  }

  return(
    <div>
      <form
      // className={classes.form}
      noValidate autoComplete="off"
      onSubmit={handleSubmit}>
        <TextField id="outlined-basic"
        value = {content}
        name="noteContent"
        variant="outlined"
        onChanges = {handleOnChange}/>
        <LabelTag/>
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
