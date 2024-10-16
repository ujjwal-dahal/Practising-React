import useOnline from "../utils/useOnline";

function CheckOnline() {
  let checkStatus = useOnline();

 

  return <>User is : {checkStatus ? "Online" : "Offline"}</>;
}

export default CheckOnline;
