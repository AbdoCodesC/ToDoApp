export function Header({ todos }) {
  return (
    <header className="text-gradient">
      You have {todos.length} open {todos.length === 1 ? "task" : "tasks"}.
    </header>
  );
}
