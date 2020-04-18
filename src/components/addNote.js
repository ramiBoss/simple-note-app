import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditableNote from './editableNote';

function AddNote({handlePane}){
  const [isOpen, setOpen] = useState(false);
  const handleOnClick = () =>{
    handlePane(true);
    setOpen(true);
  }

  // const renderPane = () => {
  //   if(isActive){
  //     return (
  //       <EditableNote
  //         handlePane = {handlePane}
  //       />
  //     );
  // }else{
  //   return(
      // <div>
      //   <Button
      //     onClick = {(event) => {handleOnClick(true)}}>
      //     <AddIcon /> Add Note
      //   </Button>
      // </div>
  //     );
  //   }
  // }

  // return(
  //   <div>
  //     {renderPane()}
  //   </div>
  // );

  if(isOpen){
    return(<NoteForm/>);
  }else{
    return(
    <div>
      <Button
        onClick = {(event) => {handleOnClick(true)}}>
        <AddIcon /> Add Note
      </Button>
    </div>
  );
  }
}


function NoteForm(){
  return(<div></div>);
}

export default AddNote;
