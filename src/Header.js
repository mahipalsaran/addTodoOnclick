import React from "react";

function Header(props) {
  return (
    <div>
      <h2>Todos App</h2>
      <button onClick={props.clearTodo}> Clear Todos</button>
    </div>
  );
}

export default Header;
