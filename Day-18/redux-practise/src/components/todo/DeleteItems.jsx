
import { MdDelete } from "react-icons/md";
import { deleteTodo } from "../../store/slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";

let DeleteItems = ({id})=>{

  let deleteData = useDispatch()

  let deleteBtn =()=>{
      deleteData(deleteTodo(id))
  }

  return <>
    <button className="btn delete-btn" onClick={deleteBtn}><MdDelete  className="delete"/>
    </button>
  </>
}

export default DeleteItems;