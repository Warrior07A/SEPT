// ## 4. Show/Hide
// - Add a button that toggles the visibility of a <div> with any content.

import { useState } from "react"
function App(){

  const [hideorview,setview]=useState(true);
  
  const toggled=()=>{
    setview(!hideorview)
  }
  return (
    <>
    <button onClick={toggled}>CLick me to see magic</button>
    <div style={{display : hideorview ? 'block' :'none'}}>
      hi there my name is akshat mittal this content should be hidden or should be visible once you click the button.
    </div>
    
    </>
  )
}

const toggle=()=>{

}
export default App