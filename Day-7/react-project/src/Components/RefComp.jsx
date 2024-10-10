import { useEffect, useRef, useState } from "react";

function RefComp() {
  // let counter = 0;

  // function Counter() {
  //   counter +=1;
  //   console.log(counter);
  // }

  let counter = useRef(0)

  function Counter(){
    counter.current+=1
    console.log(counter.current);
    

  }

  let [count , setCount] = useState(0)

  function increaseNumber(){
    setCount(count + 1)
    console.log("Component is Re-render");
    
  }

  return (
    <>
      <button onClick={Counter}>Click me</button>
      <button onClick={increaseNumber}>Counter</button>
    </>
  );
}

export default RefComp;
