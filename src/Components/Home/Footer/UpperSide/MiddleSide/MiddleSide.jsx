import Icons from "./Icons/Icons";

export default function MiddleSide({ className }) {
  return (
    <>
      <div className={`text-center text-white  ${className}`}>
        <h3 className="uppercase font-bold text-[1.5rem] mb-2">
          around the web
        </h3>
        <Icons />
      </div>
    </>
  );
}
