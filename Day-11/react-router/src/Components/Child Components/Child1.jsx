import Child2 from "./Child2";


function Child1(props){
  console.log(props.yourName);
  

  return <>
 <Child2 yourName_Passed = {props.yourName} />
   </>
}


export default Child1;