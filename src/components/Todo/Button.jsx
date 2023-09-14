import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  className,
  type = "button",
  onClick = () => {},
}) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={twMerge(" grid w-1/12 place-items-center", className)}
      >
        {children}
      </button>
    </>
  );
}
