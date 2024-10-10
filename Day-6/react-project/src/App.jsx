import { useMemo, useState } from "react";
import MyComp from "./Components/MyComp";

function App() {
  let [count, setCount] = useState(0);

  
  console.log("This is Parent Component");

  let randomNumber = useMemo(() => Math.random() * 10, [])
  

  return (
    <>
      <h3>{randomNumber} </h3>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <MyComp/>
    </>
  );
}



export default App;
