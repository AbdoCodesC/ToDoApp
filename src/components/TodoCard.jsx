export function TodoCard({
  todo,
  handleCompleteTodo,
  handleDeleteTodo,
  todoIndex,
}) {
  console.log("completed? ", todo.complete);
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => handleCompleteTodo(todoIndex)}
          disabled={todo.complete}
        >
          <h6>Done</h6>
        </button>
        <button onClick={() => handleDeleteTodo(todoIndex)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
