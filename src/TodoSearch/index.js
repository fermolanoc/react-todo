import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchVal, setSearchVal } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    // console.log(event.target.value);
    setSearchVal(event.target.value);
  };
  return (
    <input
      placeholder="Looking for: cry while chopping onions"
      value={searchVal}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
