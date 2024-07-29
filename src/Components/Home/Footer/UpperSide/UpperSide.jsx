import LeftSide from "./LeftSide/LeftSide";
import MiddleSide from "./MiddleSide/MiddleSide";
import RightSide from "./RightSide/RightSide";

export default function UpperSide() {
  return (
    <div className="bg-cyan-950 py-16">
      <div className="container flex justify-between">
        <LeftSide className="w-1/3" />
        <MiddleSide className="w-1/3" />
        <RightSide className="w-1/3" />
      </div>
    </div>
  );
}
