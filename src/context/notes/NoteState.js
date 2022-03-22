import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=> {
  const s1 = {
       "name" : "Surk",
       "language" : "JS"
  }
  const [first, setfirst] = useState(s1);
  const update = ()=> {
      setTimeout(() => {
          setState({
            "name" : "Daw",
            "language" : "CPP"
          })
      }, 1000);
  }
      return (
         <NoteContext.Provider value = {{state, update}}>
            {props.children}
         
         </NoteContext.Provider>
      )
}

export default NoteState;
