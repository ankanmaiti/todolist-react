import Button from "./Button";
import { useTodos } from "/src/context/TodoProvider";
import { twMerge } from "tailwind-merge";
import TickIcon from "./Icons/TickIcon";
import DeleteIcon from "./Icons/DeleteIcon";
import { useState } from "react";

export default function Task({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [task, setTask] = useState(todo.task);
  const { deleteTodo, toggleTodo, editTodo } = useTodos();

  function handleEdit(e) {
    switch (e.key) {
      case "Enter":
        editTodo(todo.id, task);
        setIsEditable(false);
        break;

      case "Escape":
        setTask(todo.task);
        setIsEditable(false);
        break;
    }
  }

  return (
    <>
      <div
        className={twMerge(
          "flex border-b py-2 hover:bg-slate-200 ",
          todo.isPending || "bg-green-200",
          todo.isPending || "hover:bg-green-300",
          isEditable && "bg-slate-300",
        )}
      >
        {/* todo check button */}
        <Button onClick={() => isEditable || toggleTodo(todo.id)}>
          <TickIcon isPending={todo.isPending} />
        </Button>

        {/* task */}
        <div className="w-10/12">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value.toLowerCase())}
            onDoubleClick={() => todo.isPending && setIsEditable(true)}
            onKeyUp={handleEdit}
            readOnly={!isEditable}
            className={twMerge(
              `"w-full rounded text-lg lowercase text-indigo-500 outline-none`,
              todo.isPending || "line-through",
              isEditable ? "bg-white px-2" : "bg-transparent ",
            )}
          />
        </div>
        {/* delete todo button */}
        <Button onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </Button>
      </div>
    </>
  );
}
