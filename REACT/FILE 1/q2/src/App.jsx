// ## 2. Input Values

// - Create a **`TextInputMirror`** component that displays a text input.
// As the user types, show the value below in real time.

function App(){
  return (
    <>
    <TextInputMirror/>
    </>
  )


}

function TextInputMirror(){
  return (
    <>
    <div>
      <input type="text"></input>
    </div>
    </>
  )
}

export default App;