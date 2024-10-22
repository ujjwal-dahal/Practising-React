import { useDispatch, useSelector } from "react-redux";
import { clearAllData } from "../../../store/slices/todoSlice";


let DeleteAllTodo = ()=>{
  let dispatch = useDispatch() 

  let clearAllDataBtn = ()=>{
    dispatch(clearAllData())
    console.log("Data");
    
  }

  return <>
    <button className="btn delete-all-user" onClick={clearAllDataBtn}>Clear All</button>
  </>
}
export default DeleteAllTodo;