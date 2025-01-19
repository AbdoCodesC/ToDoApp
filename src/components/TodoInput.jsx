import { useState } from "react";

export function TodoInput({ handleAddTodo }) {
  const [input, setInput] = useState("");

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          if (!input) return;
          handleAddTodo(input);
          setInput("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
