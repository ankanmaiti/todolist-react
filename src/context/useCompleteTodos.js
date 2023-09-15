import { useState } from "react";

export default function useCompleteTodos(INITIAL_TODOS = []) {
  const [completeTodos, setCompleteTodos] = useState(() =>
    INITIAL_TODOS.filter((todo) => todo && !todo.isPending),
  );

  function addCompleteTasks(taskOBJ) {
    setCompleteTodos((prev) => [...prev, taskOBJ]);
  }

  function removeCompleteTasks(id) {
    setCompleteTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return { completeTodos, addCompleteTasks, removeCompleteTasks };
}
