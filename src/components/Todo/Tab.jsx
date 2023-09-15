import React from "react";

export default function Tab({
  tabLabel,
  name = "tab",
  onChange = () => {},
  defaultChecked = false,
}) {
  return (
    <div>
      <input
        type="radio"
        name={name}
        id={tabLabel}
        className="peer appearance-none"
        onClick={(e) => e.currentTarget.checked}
        onChange={(e) => onChange(e.target.value)}
        defaultChecked={defaultChecked}
        value={tabLabel}
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
