import { useState } from "react"

function App(){
  return (
    <div>
      <Form/>
      

    </div>
  )

}

function Form (){
  const [username,setusername]=useState("");
  const [password,setpassword]=useState("");

  function userchange(event){
    setusername(event.target.value);
  }

  function passwordchange(event){
    setpassword(event.target.value);
  }

  const [click,setclick]=useState(false);


  function rendeer(){
    setclick(!click)
  }

  return(
    <div style={{display:"block",justifyContent:"center"}}>
      <h1>Login Form</h1><br/>
      <input type="text" value={username} onChange={userchange} autoFocus></input><br/>
      <input type ="text" value={password} onChange={passwordchange}></input><br/>
    <button onClick={rendeer}>Click me (creds)</button>
{click &&(
  <>
  <h1>{username}</h1>
  <h1>{password}</h1>
  
  </>
)}
      
    </div>
  )
}

export default App