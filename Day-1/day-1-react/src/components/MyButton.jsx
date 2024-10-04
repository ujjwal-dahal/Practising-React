import { useState } from "react";


let MyButton = ({changeName ,  returnName})=>
  {
    let [name,setName] = useState("Ujjwal")
    let nameChange = ()=>{
      setName("Hari")
    }

    let nameReturn = ()=>{
      setName("Ujjwal")
    }

    return(
  <>
    <h1>Name : {name} </h1>
    <button onClick={nameChange} >{changeName}</button>
    <button onClick={nameReturn} >{returnName}</button>
  </>
)
}


export default MyButton;