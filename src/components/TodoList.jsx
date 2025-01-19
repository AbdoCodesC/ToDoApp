import { TodoCard } from "./TodoCard.jsx";

export function TodoList({
  todos,
  selectedTab,
  handleDeleteTodo,
  handleCompleteTodo,
}) {
  const filteredTabs =
    selectedTab === "All"
      ? todos
      : selectedTab === "Open"
      ? todos.filter((todo) => !todo.complete)
      : todos.filter((todo) => todo.complete);
  console.log(filteredTabs);
  return (
    <>
      {filteredTabs.map((todo, index) => (
        <TodoCard
          todo={todo}
          key={index}
          index={index}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </>
  );
}
