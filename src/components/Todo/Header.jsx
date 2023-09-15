import TodosIcon from "./Icons/TodosIcon";

export default function Header() {
  return (
    <>
      <div className="flex border-b bg-slate-100  py-2 font-semibold uppercase">
        <div className="grid w-1/12 place-items-center text-xl">
          <TodosIcon className="text-2xl" />
        </div>
        <ul className="flex w-11/12 justify-end gap-1 px-3 text-slate-500">
          <li className="grid place-items-center rounded px-2">Todo</li>
          <li className="grid place-items-center rounded px-2">Done</li>
          <li className="grid place-items-center rounded bg-indigo-400 px-2 text-white">
            All
          </li>
        </ul>
      </div>
    </>
  );
}
