import { LiaCheckSolid, LiaCheckDoubleSolid } from "react-icons/lia";

function SingleTick() {
  return <LiaCheckSolid className="text-2xl text-blue-700 opacity-60" />;
}

function DoubleTick() {
  return <LiaCheckDoubleSolid className="text-2xl text-green-600" />;
}

export default function TickIcon({ isPending }) {
  if (isPending) return <SingleTick />;
  return <DoubleTick />;
}
