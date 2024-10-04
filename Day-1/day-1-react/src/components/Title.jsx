import { useState } from "react"

//This is Child Component
export function Title({name,address}){
  return (<>
    <h1>Name : {name} Address : {address}</h1>
  </>)
}

//Named Export

export function Title2(){
  let [yourName , setYourName] = useState("Ujjwal")
  let changeName = ()=>{
    setYourName("Hari")
  }

  function functionCall(){
    return "This is Function Call"
  }
  return <>
    <h2>This is Title2 and Your Name is {yourName} </h2>
    <button onClick={changeName} >Change Name</button>
    <h2>{functionCall()}</h2>
  </>
}

