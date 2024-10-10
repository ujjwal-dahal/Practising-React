
import { useState , useEffect } from "react";


function Child(){

  let [counter, setCounter] = useState(0)

  function handleCounter(){
    setCounter(counter + 1)
  }

  useEffect(()=>{
      console.log("Component is Mounted");

      return ()=>{
        console.log("Component is Unmounted");
        
      }
      
  },[counter])

  return <>

<h1>{counter}</h1>
<button onClick={handleCounter} >Counter</button>

  </>
}


export default Child;

