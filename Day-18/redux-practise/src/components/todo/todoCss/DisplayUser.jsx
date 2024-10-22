import { useSelector } from "react-redux";
import DeleteItems from "../DeleteItems";
import DeleteAllTodo from "./DeleteAllTodo";

let DisplayUser = () => {
  let todoData = useSelector((state) => {
    return state.todo;
  });

  return (
    <>
      {todoData.length ? todoData.map((item, index) => {
        return (
          <ul className="items" key={index}>
            <li>{item}</li>
            <DeleteItems id={index} />
          </ul>
        );
      }) : <p style={{textAlign:"center" , fontWeight:"bold"}}>No Any Todo</p>}
      {todoData.length ?  <DeleteAllTodo /> : "" }
    </>
  );
};

export default DisplayUser;
