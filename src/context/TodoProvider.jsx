import { createContext, useContext, useState } from "react";
import usePendingTodos from "./usePendingTodos";
import useCompleteTodos from "./useCompleteTodos";
export const INITIAL_TODOS = [
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
  const [tabLabel, setTabLabel] = useState("all");
  const { pendingTodos, addTask, removePendingTask, markAsComplete } =
    usePendingTodos(INITIAL_TODOS);
  const { completeTodos, addCompleteTasks, removeCompleteTasks } =
    useCompleteTodos(INITIAL_TODOS);

  let todos;

  switch (tabLabel) {
    case "todo":
      todos = pendingTodos;
      break;

    case "done":
      todos = completeTodos;
      break;

    default:
      todos = [...pendingTodos, ...completeTodos];
      break;
  }

  function deleteTask(id) {
    removePendingTask(id);
    removeCompleteTasks(id);
  }

  function completeTask(id) {
    const taskOBJ = markAsComplete(id);
    console.log(taskOBJ);
    taskOBJ && addCompleteTasks(taskOBJ);
  }

  return (
    <todosContext.Provider
      value={{ todos, setTabLabel, addTask, deleteTask, completeTask }}
    >
      {children}
    </todosContext.Provider>
  );
}
