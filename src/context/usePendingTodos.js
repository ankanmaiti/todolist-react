import { useState } from "react";

export default function usePendingTodos(INITIAL_TODOS = []) {
  const [pendingTodos, setPendingTodos] = useState(() =>
    INITIAL_TODOS.filter((todo) => todo && todo.isPending),
  );

  function addTask(task) {
    setPendingTodos((prev) => [
      ...prev,
      { task, isPending: true, id: crypto.randomUUID() },
    ]);
  }

  function removePendingTask(id) {
    setPendingTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function markAsComplete(id) {
    const [taskOBJ] = pendingTodos.filter((todo) => todo.id === id);
    setPendingTodos((prev) => prev.filter((todo) => todo.id !== id));

    taskOBJ.isPending = false;
    return taskOBJ;
  }

  return { pendingTodos, addTask, removePendingTask, markAsComplete };
}
