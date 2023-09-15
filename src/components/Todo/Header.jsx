import TodosIcon from "./Icons/TodosIcon";
import Tab from "./Tab";

export default function Header() {
  return (
    <>
      <div className="flex border-b bg-slate-100  py-2 font-semibold uppercase">
        <div className="grid w-1/12 place-items-center text-xl">
          <TodosIcon className="text-2xl" />
        </div>
        <ul className="flex w-11/12 justify-end gap-1 px-3 text-slate-500">
          <li>
            <Tab tabLabel="TODO" />
          </li>
          <li>
            <Tab tabLabel="DONE" />
          </li>
          <li>
            <Tab tabLabel="ALL" defaultChecked />
          </li>
        </ul>
      </div>
    </>
  );
}
