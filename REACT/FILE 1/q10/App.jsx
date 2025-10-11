// ## 10. Inline Styles From Props

// - Accept a **`color`** prop and use it to set the text color of a message.

function App(){
    return(
        <div>
            <Which_c color={'green'} mssg={"hi my name is akshat mittal"}/>
        </div>
    )
}

function Which_c({color,mssg}){
return (
    <div>
        <h1 style={{color:color}}>{mssg}</h1>
    </div>
)
}

export default App