import { createContext, useContext, useState } from "react";

const INITIAL_TODOS = [
  {
    id: crypto.randomUUID(),
    task: "study math",
    isPending: false,
  },
  {
    id: crypto.randomUUID(),
    task: "study padagogy",
    isPending: true,
  },
  {
    id: crypto.randomUUID(),
    task: "watch youtube",
    isPending: true,
  },
  {
    id: crypto.randomUUID(),
    task: "watch anime",
    isPending: true,
  },
];

const todosContext = createContext();

export function useTodos() {
  return useContext(todosContext);
}

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  function deleteTask(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => id != todo.id));
  }

  function addTask(task) {
    setTodos((prev) => [
      ...prev,
      { task, isPending: true, id: crypto.randomUUID() },
    ]);
  }

  function editTask(id, newTask) {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => {
        if (id === todo.id) todo.task = newTask;
        return todo;
      }),
    );
  }

  function completeTask(id) {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => {
        if (id === todo.id) todo.isPending = false;
        return todo;
      }),
    );
  }

  return (
    <todosContext.Provider
      value={{ todos, addTask, deleteTask, editTask, completeTask }}
    >
      {children}
    </todosContext.Provider>
  );
}
