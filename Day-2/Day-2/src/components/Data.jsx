import React from "react";
import Button from "./Button";
import "../style/Data.css"; 

function Data(props) {
  return (
    <div className="data-container">
      <p>{props.todo}</p>
      <p>{props.date}</p>
      <Button tag="danger" title="Delete" onClick={props.onDelete} />
    </div>
  );
}

export default Data;
