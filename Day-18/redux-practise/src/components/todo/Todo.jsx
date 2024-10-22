import { useState } from "react";
import "./todoCss/Todo.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todoSlice.js";
import DisplayUser from "../todo/todoCss/DisplayUser.jsx"

let Todo = () => {
  let dispatch = useDispatch();

  let [inputData, setInputData] = useState("");

  const handleInput = (e) => {
    setInputData(e.target.value);

  };

  const addButton = () => {
    if(inputData!= ""){
      dispatch(addTodo(inputData));
      setInputData("");
    }else{
      window.alert("Empty todo is Invalid")
    }
  };

  return (
    <>
      <div className="data-container">
        <div className="add-container">
          <input
            type="text"
            placeholder="Your Todo"
            className="todo-box"
            value={inputData}
            onChange={handleInput}
          />
          <button className="btn add-btn" onClick={addButton}>
            Add Items
          </button>
        </div>
        <DisplayUser />
      </div>
    </>
  );
};

export default Todo;
