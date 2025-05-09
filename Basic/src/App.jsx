
import App1 from "./App1"
import { useState } from "react";

function App() {
 
let [value, setValue] = useState(0);


const addValue = () => {
  setValue(value + 1);
}

const removeValue = () => {
  setValue(value - 1);
}

  return (
    <>
       <h1>React | {value}</h1>
       <button onClick = {addValue}> Add Value </button>
       <button onClick = {removeValue}> Remove Value  </button>
       <App1/>
    </>
     
  )
}

export default App
