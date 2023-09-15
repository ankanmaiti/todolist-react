import Button from "./Button";
import { useTodos } from "/src/context/TodoProvider";
import { useRef } from "react";
import ClipboardIcon from "./Icons/ClipboardIcon";
import PlusIcon from "./Icons/PlusIcon";

export default function TodoInput() {
  const inputRef = useRef(null);
  const { addTask } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = inputRef.current.value;
    if (newTask?.length < 5) return;

    addTask(newTask);
    inputRef.current.value = "";
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex h-max w-full select-none rounded bg-white py-2 text-xl shadow"
      >
        {/* clipboard icon */}
        <Button className="text-indigo-500">
          <ClipboardIcon />
        </Button>

        {/* input field */}
        <div className="w-10/12">
          <input
            ref={inputRef}
            type="text"
            className="w-full border-none bg-transparent px-2 lowercase text-indigo-500 outline-none"
            placeholder="Enter your next task"
          />
        </div>

        {/* add icon */}
        <Button type="submit" className="text-indigo-500">
          <PlusIcon />
        </Button>
      </form>
    </>
  );
}
