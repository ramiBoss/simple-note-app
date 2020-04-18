import React, {useState, useEffect} from 'react'
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Note from './note';
import AddNote from './addNote';
// import EditableNote from './editableNote';
import { notes } from '../dummyData';

function NotesApp(){
  // const [pane, handlePane] = useState(false);
  // const [selected, setSelected] = useState({});

  // const handleNoteEdit = (note) =>{
  //   console.log("handleNoteEdit");
  //   handlePane(true);
  //   setSelected(note);
  // }
  // const handleNoteDelete = (note) =>{
  //   console.log("handleNoteDelete");
  // }


  return(
    <div>
    <NotesList
      notes = {notes}
    />
    <AddNote/>
    </div>
  );
}


function NotesList({notes}){
  const renderNotesList = () =>{
    // console.log("renderNotesList");
    return notes.map((item) =>{
      // console.log("note: " + JSON.stringify(item));
      return(
          <EditableNote
          key = {item.id}
          note = {item}
          // handleEdit = {(event) => {handleNoteEdit(item)}}
          // handleDelete = {(event) => {handleNoteDelete(item)}}
          />
      );
    });
  }
  return(
    <div>
      {renderNotesList()}
    </div>
  );
}

function EditableNote({note}){
  const [isOpen, handleOpen] = useState(false);
  const handleEdit = (x) =>{
    setOpen(x);
  }
  const handleDelete = () =>{

  }
  if(isOpen){
    <NoteForm
      note = {note}
      handleClose = {handleOpen}
    />
  }else{
    <Note
    note = {note}
    handleEdit = {handleOpen}
    handleDelete = {(event) => {handleNoteDelete(item)}}
    />
  }
}


function NoteForm({note, handleClose}){
  const [content, setContent] = useState(note.content);
  const handleContent = (event) =>{
    setContent(event.target.value);
  }
  const handleSubmit = () =>{
    console.log();
  }
  return(
    <div>
    <form>
      <TextField id="outlined-basic"
      value = {content}
      name="noteContent"
      variant="outlined"
      onChange = {(event) => {handleContent(event)}}/>
      <Button
        color="primary"
        variant="contained"
        type = "submit"
        onClick = {handleSubmit}
      >
        Save
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick = {(event) => {handleClose(false)}}
      >
        Close
      </Button>
    </form>
    </div>
  );
}

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

export default NotesApp;
