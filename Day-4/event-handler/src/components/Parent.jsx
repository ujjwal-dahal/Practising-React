import { useState } from "react";
import Child from "./Child";

function Parent() {

  const [userData , setUserData] = useState("")

  function onClickDown(event){
      // console.log(event.key);
      // console.log(event.target.value);
   
      if (event.key == "Enter"){
        setUserData(event.target.value)
        console.log(userData);
      }  
  }
  
  return <>
  <Child keyDown = {onClickDown} />
  <h1>{userData}</h1>


  </>
}

export default Parent;
