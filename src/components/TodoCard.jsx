export function TodoCard({
  todo,
  handleCompleteTodo,
  handleDeleteTodo,
  index,
}) {
  console.log("completed? ", todo.complete);
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => handleCompleteTodo(index)}
          disabled={todo.complete}
        >
          <h6>Done</h6>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
