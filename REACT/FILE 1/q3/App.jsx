// ## 3. Dynamic List

// - Render an unordered list from a prop: **`items: ['A', 'B', 'C']`**. If the prop changes, the list should update.

function App(){
return(
  <>
  <div>
    <List/>
  </div>
  </>
)
}

function List(){
  let list=['A','B','C','D','E']
  return(
    <>
    <ul>
    {list.map((item)=>(
      <li key={item}>{item}</li>
    ))}    
    </ul>
    
    </>
  )
}


export default App;