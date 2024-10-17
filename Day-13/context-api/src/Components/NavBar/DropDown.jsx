import styles from "./DropDown.module.css"
import { Link } from "react-router-dom";


let DropDown = ()=>{

  return <>
    <div className={styles["main-container"]} >
    <Link to="/home" className={styles["drop-link"]} >Home</Link> 
    <Link to="/home" className={styles["drop-link"]} >Contact</Link> 
    <Link to="/home" className={styles["drop-link"]} >About</Link> 
    </div>
  </>
}

export default DropDown;