import React from "react";
import { useTodos } from "/src/context/TodoProvider";

export default function Tab({
  tabLabel,
  name = "tab",
  defaultChecked = false,
}) {
  const { setTabLabel } = useTodos();
  return (
    <div>
      <input
        type="radio"
        name={name}
        id={tabLabel}
        className="peer appearance-none"
        onClick={(e) => e.currentTarget.checked}
        onChange={(e) => setTabLabel(e.target.value.toLowerCase())}
        value={tabLabel}
        defaultChecked={defaultChecked}
      />
      <label
        htmlFor={tabLabel}
        className="rounded px-2 py-1 peer-checked:bg-indigo-500 peer-checked:text-white"
      >
        {tabLabel}
      </label>
    </div>
  );
}
