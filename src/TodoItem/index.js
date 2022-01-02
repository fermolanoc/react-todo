import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li>
      <div>
        <span
          className={`icon ${props.completed && "completed"}`}
          onClick={props.onComplete}
        >
          ✓
        </span>
        <p className={`${props.completed && "completed"}`}>{props.text}</p>
      </div>
      <span className="icon delete-icon" onClick={props.onDelete}>
        🅧
      </span>
    </li>
  );
}

export { TodoItem };
