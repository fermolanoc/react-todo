import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  return <div className="button-container">{props.children}</div>;
}

export { CreateTodoButton };
