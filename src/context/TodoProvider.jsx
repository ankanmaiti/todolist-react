import { createContext, useContext, useEffect, useState } from "react";

const todosContext = createContext({
  todos: [],
  addTodo: (task) => {},
  toggleTodo: (id) => {},
  deleteTodo: (id) => {},
});

export function useTodos() {
  return useContext(todosContext);
}

export default function TodoProvider({ children }) {
  const [tabLabel, setTabLabel] = useState("all");
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || [],
  );

  let todosToDisplay;

  switch (tabLabel) {
    case "todo":
      todosToDisplay = todos.filter((todo) => todo.isPending);
      break;

    case "done":
      todosToDisplay = todos.filter((todo) => !todo.isPending);
      break;

    default:
      todosToDisplay = todos;
      break;
  }

  function addTodo(task) {
    const newTodo = { id: crypto.randomUUID(), task, isPending: true };
    setTodos((prev) => [...prev, newTodo]);
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isPending: !todo.isPending } : todo,
      ),
    );
  }

  // store todos to localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <todosContext.Provider
      value={{ todosToDisplay, setTabLabel, addTodo, deleteTodo, toggleTodo }}
    >
      {children}
    </todosContext.Provider>
  );
}
