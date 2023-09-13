export default function Button({
  children,
  className,
  type = "button",
  onClick = () => {},
}) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={className + " grid w-1/12 place-items-center"}
      >
        {children}
      </button>
    </>
  );
}
