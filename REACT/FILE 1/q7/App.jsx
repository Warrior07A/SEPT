// ## 7. Passing Props Down

// - Build **`Parent`** and **`Child`** components: Pass data from **`Parent`** to **`Child`** using props,
//   and render the data in the child.


function App(){
  return (
    <>
    
    <Parent/>
    
    </>
  )
}


function Parent(){
  return (
    <>
    <Child message={"Hello from Mr. Lee !"}/>
    </>
  )
}

function Child({message}){
  return <div>
    {message}
  </div>
}

export default App;