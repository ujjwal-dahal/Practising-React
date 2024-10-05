import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        type="button"
        className={`btn btn-${props.tag}`}
        onClick={props.onClick} // Correctly use props.onClick
      >
        {props.title}
      </button>
    </>
  );
};

export default Button;
