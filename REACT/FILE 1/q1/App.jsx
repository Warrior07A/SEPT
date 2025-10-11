// ## 1. Simple Render

// - Build a React component called **`HelloWorld`** that displays 'Hello, World!' 
// with a prop to change the greeting text.

import React from "react";

function App(){
 return( 
 <>
  <HelloWorld title={"hello world"}/>
  <HelloWorld title={"okay cool"}/>
 </>

 )
}

function HelloWorld({title}){
  return (
  <>
  <div>
    <h1>{title}</h1>
  </div>
  </>
  )
}

export default App