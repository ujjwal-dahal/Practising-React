import Child3 from "./Child3";

const Child2 = (props) => {
  console.log(props.yourName_Passed);

  return (
    <>
     <Child3 yourName = {props.yourName_Passed} />
    </>
  );
};

export default Child2;
