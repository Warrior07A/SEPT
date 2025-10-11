// ## 8. Conditional Rendering

import { useState } from "react";

// - Render “Logged In” or “Guest” based on a **`loggedIn`** boolean prop.

function App(){
return (
  <>
  <Check iflog={true}/>
  </>
)
}

function Check({iflog}){
  return (
    <>
    {iflog ? <h3> LoggedIn</h3> : <h3> Guest</h3>}
    </>
  )

}

export default App;