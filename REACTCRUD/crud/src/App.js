import { useState } from "react";
import { TodoList } from "./TodoList";
import uuidv4 from "uuidv4";

function App() {
  const [todos, setTodos] = useState(["todo1", "todo2"]);
  const [inputValue, setInputValue] = useState("");

  const getInputValue = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const addTodos = () => {
    if (!inputValue) return;
    setTodos((todos) => {
      return [...todos, inputValue];
    });
    setInputValue("");
  };

  const deleteTodos = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} deleteTodos={deleteTodos} />
      <div className="top-wrap">
        <input
          type="text"
          name=""
          id=""
          className="h-full p-2 border border-black"
          onChange={getInputValue}
          value={inputValue}
        />
        <button className="p-2 text-white bg-zinc-400" onClick={addTodos}>
          Add a todo
        </button>
        <button className="p-2 text-white bg-red-400">Clear Completed</button>
      </div>
      <p> {todos.length} Todos Left</p>
    </>
  );
}

export default App;
