// ## 2. Input Values

// - Create a **`TextInputMirror`** component that displays a text input.
// As the user types, show the value below in real time.

import { useState } from "react";

function App(){
  const [inputvalue,setinputvalue]=useState("");
  const inputhandler=(event)=>{
    setinputvalue(event.target.value);
  }
  return (
    <>
    <div>
      <input type="text" value={inputvalue} onChange={inputhandler} autoFocus></input>
      <h1>{inputvalue}</h1>
    </div>
    </>
  )
}

export default App;