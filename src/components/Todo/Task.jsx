import Button from "./Button";
import { LiaCheckSolid, LiaCheckDoubleSolid } from "react-icons/lia";
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { useTodos } from "../../context/TaskContextProvider";

export default function Task({ children, todo }) {
  const { deleteTask, completeTask } = useTodos();

  return (
    <>
      <div
        className={`${
          todo.isPending ? "" : "bg-green-200"
        }  group/task flex border-b border-slate-300/70 py-2 hover:bg-slate-200`}
      >
        {/* todo check */}

        <Button onClick={() => completeTask(todo.id)}>
          {/* single tick on pending task */}
          <LiaCheckSolid
            className={`${
              todo.isPending ? "block" : "hidden"
            } text-2xl text-yellow-700 opacity-60 group-hover/task:text-blue-700 group-hover/task:opacity-100`}
          />

          {/* double tick on completed task */}
          <LiaCheckDoubleSolid
            className={`${
              todo.isPending ? "hidden" : "block"
            } text-2xl text-green-600`}
          />
        </Button>

        {/* task */}
        <p
          className={`${
            todo.isPending ? "" : "line-through"
          } w-10/12 text-lg lowercase text-indigo-500`}
        >
          {children}
        </p>

        {/* delete todo */}
        <Button className={"group/delete"} onClick={() => deleteTask(todo.id)}>
          <AiOutlineDelete className=" text-xl text-red-500 opacity-70 group-hover/delete:hidden " />
          <AiFillDelete className="hidden text-xl text-red-500 group-hover/delete:block" />
        </Button>
      </div>
    </>
  );
}
