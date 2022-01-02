import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   {
//     text: "Cut onions",
//     completed: false,
//   },
//   {
//     text: "Study at Platzi",
//     completed: true,
//   },
//   {
//     text: "Watch 'The Good Place'",
//     completed: true,
//   },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
