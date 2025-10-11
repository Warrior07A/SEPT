// ## 5. Basic Counter

import { useState } from "react";

// - Implement a button to increment a number, and display the updated count.

function App(){

   const [increment,setincrement]=useState(0);
   
   const add=()=>{
    setincrement(increment+1);
   }
    return (
        <>
        <div>
            <button onClick={add}></button>
            <button>{increment}</button>
        </div>
        
        </>
    )
}

export default App;