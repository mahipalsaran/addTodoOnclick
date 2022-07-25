import React from "react";
import Header from "./Header";
import "./styles.css";

export default function App() {
  const [todoList, setTodoList] = React.useState(["task 1", "task 2"]);
  const [todo, setTodo] = React.useState("");

  const clearTodo = () => {
    setTodoList([]);
  };

  return (
    <div className="App">
      <Header clearTodo={clearTodo} />
      {todoList.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
      <div>
        <input onChange={(e) => setTodo(e.target.value)} />
        <button onClick={() => setTodoList((todoList) => [...todoList, todo])}>
          Add Todo
        </button>
      </div>
    </div>
  );
}
