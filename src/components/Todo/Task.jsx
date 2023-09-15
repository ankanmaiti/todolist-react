import Button from "./Button";
import { useTodos } from "/src/context/TodoProvider";
import { twMerge } from "tailwind-merge";
import TickIcon from "./Icons/TickIcon";
import DeleteIcon from "./Icons/DeleteIcon";

export default function Task({ todo }) {
  const { deleteTask, completeTask } = useTodos();

  return (
    <>
      <div
        className={twMerge(
          "flex border-b py-2 hover:bg-slate-200",
          todo.isPending || "bg-green-200",
          todo.isPending || "hover:bg-green-300",
        )}
      >
        {/* todo check button */}
        <Button onClick={() => completeTask(todo.id)}>
          <TickIcon isPending={todo.isPending} />
        </Button>

        {/* task */}
        <p
          className={twMerge(
            `w-10/12 text-lg lowercase text-indigo-500`,
            todo.isPending || "line-through",
          )}
        >
          {todo.task}
        </p>

        {/* delete todo button */}
        <Button onClick={() => deleteTask(todo.id)}>
          <DeleteIcon />
        </Button>
      </div>
    </>
  );
}
