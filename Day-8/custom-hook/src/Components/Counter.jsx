import useCounter from "../utils/useCounter";

function Counter(){

 let [value , setValue] =  useCounter(0 , 4)


  return <>

<h1>{value}</h1>
<button onClick={setValue} >Counter</button>



  </>
}


export default Counter;