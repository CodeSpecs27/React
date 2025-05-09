
import App1 from "./App1"
import { useState } from "react";

function App() {
 
let [value, setValue] = useState(0);

const addValue = () => {
  if(value <20){
    setValue(value + 1);
  }
  else{
    alert("Value reached 20");
  }
}

const removeValue = () => {
  if(value > 0){
    setValue(value - 1);
  }
  else{
    alert("Value reached 0");
  }
  
}

  return (
    <>  
       <h1>React | {value}</h1>
       <button onClick = {addValue}> Add Value </button>
       <br/>
       <button onClick = {removeValue}> Remove Value  </button>
       <App1/>
    </>
  )
}

export default App
