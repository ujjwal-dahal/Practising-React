import { useState } from "react";
import Button from "./components/Button"; 
import Data from "./components/Data"; 
import "./style/App.css"; 

function App() {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [array, setArray] = useState([]);

  function addClick() {
    if (todo && date) {
      setArray([...array, { todo, date }]);
      setTodo("");
      setDate("");
    }
  }

  function deleteItem(index) {
    const newArray = array.filter((_, i) => i !== index);
    setArray(newArray);
  }

  return (
    <>
      <div className="main-container">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo Here"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button tag="success" title="Add" onClick={addClick} />
      </div>
      {array.map((item, index) => (
        <Data key={index} todo={item.todo} date={item.date} onDelete={() => deleteItem(index)} />
      ))}
    </>
  );
}

export default App;
