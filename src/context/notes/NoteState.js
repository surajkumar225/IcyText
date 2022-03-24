import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=> {
  const notesInitial =  [
    {
      "_id": "6236f2acdd794f717e8c312d",
      "user": "6235988437d0695c14284de7",
      "title": "Matrix",
      "description": "I Fall or I Fly",
      "tag": "Personal",
      "date": "2022-03-20T09:23:56.867Z",
      "__v": 0
    },
    {
      "_id": "6236f721c56cbee2c9d715bd",
      "user": "6235988437d0695c14284de7",
      "title": "Public",
      "description": "You will find him down the road",
      "tag": "Personal",
      "date": "2022-03-20T09:42:57.824Z",
      "__v": 0
    },
    {
      "_id": "6236f2acdd794f717e8c312d",
      "user": "6235988437d0695c14284de7",
      "title": "Matrix",
      "description": "I Fall or I Fly",
      "tag": "Personal",
      "date": "2022-03-20T09:23:56.867Z",
      "__v": 0
    },
    {
      "_id": "6236f721c56cbee2c9d715bd",
      "user": "6235988437d0695c14284de7",
      "title": "Public",
      "description": "You will find him down the road",
      "tag": "Personal",
      "date": "2022-03-20T09:42:57.824Z",
      "__v": 0
    },
    {
      "_id": "6236f2acdd794f717e8c312d",
      "user": "6235988437d0695c14284de7",
      "title": "Matrix",
      "description": "I Fall or I Fly",
      "tag": "Personal",
      "date": "2022-03-20T09:23:56.867Z",
      "__v": 0
    },
    {
      "_id": "6236f721c56cbee2c9d715bd",
      "user": "6235988437d0695c14284de7",
      "title": "Public",
      "description": "You will find him down the road",
      "tag": "Personal",
      "date": "2022-03-20T09:42:57.824Z",
      "__v": 0
    },
    {
      "_id": "6236f2acdd794f717e8c312d",
      "user": "6235988437d0695c14284de7",
      "title": "Matrix",
      "description": "I Fall or I Fly",
      "tag": "Personal",
      "date": "2022-03-20T09:23:56.867Z",
      "__v": 0
    },
    {
      "_id": "6236f721c56cbee2c9d715bd",
      "user": "6235988437d0695c14284de7",
      "title": "Public",
      "description": "You will find him down the road",
      "tag": "Personal",
      "date": "2022-03-20T09:42:57.824Z",
      "__v": 0
    }
  ] 
 const [notes, setNotes] = useState(notesInitial);

 // Add a Note
   const addNote = (title, description, tag) => {
     const note = {
      "_id": "6236f2acdd794f717e8c312d",
      "user": "6235988437d0695c14284de7",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-03-20T09:23:56.867Z",
      "__v": 0
    };
     setNotes(notes.concat(note))   // Concat returns new array

   }

 // Delete a Note
   const deleteNote = () => {
     
   }


 // Edit a Note
   const editNote = () => {
     
   }
   
      return (
         <NoteContext.Provider value = {{notes, addNote, deleteNote, editNote}}>
            {props.children}
         
         </NoteContext.Provider>
      )
}

export default NoteState;
