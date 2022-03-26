import { useState } from "react";
import NoteContext from "./noteContext";

  const NoteState = (props)=> {
  const host = "http://localhost:5000"
  const notesInitial =  []
  const [notes, setNotes] = useState(notesInitial);


 // Get all Notes
 const getNotes = async () => {
  // API Call
   const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzNTk4ODQzN2QwNjk1YzE0Mjg0ZGU3In0sImlhdCI6MTY0ODEzNTMwNH0.64nTi5eNsH5bD8wzuxB43t_tXngZUi-MUqX6uWzVL8c"
    },
  });

  const json = await response.json()
  console.log(json)
  setNotes(json)
}

 // Add a Note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzNTk4ODQzN2QwNjk1YzE0Mjg0ZGU3In0sImlhdCI6MTY0ODEzNTMwNH0.64nTi5eNsH5bD8wzuxB43t_tXngZUi-MUqX6uWzVL8c"
      },
      body: JSON.stringify({title, description, tag}) 
    });

    const json = await response.json();
    console.log(json);

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
   const deleteNote = async(id) => {
     // API Call
     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzNTk4ODQzN2QwNjk1YzE0Mjg0ZGU3In0sImlhdCI6MTY0ODEzNTMwNH0.64nTi5eNsH5bD8wzuxB43t_tXngZUi-MUqX6uWzVL8c"
      },
      
    });
    const json = response.json();
    console.log(json)

     console.log("Delete" + id);
     const newNotes = notes.filter((note) => {return note._id!==id})
     setNotes(newNotes)     
   }

 // Edit a Note
   const editNote = async (id, title, description, tag) => {
     // API Call
     const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzNTk4ODQzN2QwNjk1YzE0Mjg0ZGU3In0sImlhdCI6MTY0ODEzNTMwNH0.64nTi5eNsH5bD8wzuxB43t_tXngZUi-MUqX6uWzVL8c"
      },
      body: JSON.stringify({title, description, tag}) 
    });
    const json = await response.json();
  

    let newNotes = JSON.parse(JSON.stringify(notes))
     // Logic to edit in client
     for (let index = 0; index < newNotes.length; index++) {
       const element = newNotes[index];
       if(element._id === id){
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;       
       }
     }   
       setNotes(newNotes); 
    }
  
      return (
         <NoteContext.Provider value = {{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
         
         </NoteContext.Provider>
      )
}

export default NoteState;