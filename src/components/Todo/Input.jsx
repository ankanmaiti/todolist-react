import { TfiWrite } from "react-icons/tfi";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "./Button";
import { useTodos } from "../../context/TaskContextProvider";
import { useRef } from "react";

export default function TodoInput() {
  const inputRef = useRef(null);
  const { addTask } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
    addTask(inputRef.current.value);
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
          <TfiWrite />
        </Button>

        {/* input field */}
        <div className="w-10/12">
          <input
            ref={inputRef}
            type="text"
            className="w-full border-none bg-transparent px-2 lowercase outline-none"
            placeholder="Enter your next task"
          />
        </div>

        {/* add icon */}
        <Button type="submit" className="text-indigo-500">
          <AiOutlinePlus />
        </Button>
      </form>
    </>
  );
}
