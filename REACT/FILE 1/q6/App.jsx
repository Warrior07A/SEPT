// ## 6. Custom Button

// - Make a reusable **`Button`** that takes a label and a function to call on click.

function App({label,fncall}){
  const fn=()=>{
    console.log("hi there")
  }
  return (
    <>
    <Custom label={"hi there button"} fncall={fn}/>
    </>
  )
}


function Custom({label,fncall}){
  

  return (
    <>
    <button onClick={fncall}>{label}</button>
    </>
  )
}
export default App;