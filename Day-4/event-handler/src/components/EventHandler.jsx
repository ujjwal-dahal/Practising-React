import styles from "../style/EventHandler.module.css";
import Button from "./Button";
import { useState } from "react";

function EventHandler() {

  const [enterData , setEnterData] = useState("")
  const [btnClickData , setBtnClickData] = useState("")
  const [checkEvent ,setCheckEvent] = useState([])
  

  function handleClickButton(event){
        setEnterData(event.target.value)
        
  }



  function clickButton(event){
      setBtnClickData(enterData)
      setCheckEvent(event)
      
  }

  // console.log(checkEvent);
  

  // console.log(enterData);
  

  return (
    <>
      {/* <h1 className={styles["title"]}>
    This is Event Handler
  </h1>
  <h2 className={styles["second-title"]}>
    This is also Event Handler
  </h2>
<h3 className={styles["third-title"]}>
{props.children}
</h3> */}

      <div className={styles["main-container"]}>
        <input
          type="email"
          className="form-control"
          id=""
          placeholder="Enter Here"
          value={enterData}
         onChange={handleClickButton}
        ></input>

        <Button title="Click Me" clickButton = {clickButton} />

        <h3> {btnClickData} </h3>
      </div>
    </>
  );
}

export default EventHandler;
