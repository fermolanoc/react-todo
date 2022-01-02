import React from "react";
import "./Button.css";

function Button(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <button onClick={() => onClickButton()}>
      Add item
      <span className="add-icon">+</span>
    </button>
  );
}

export { Button };
