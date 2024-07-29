import img from "../../../../assets/Images/avataaars.svg";
import "../Css/effects.css";
export default function Main() {
  return (
    <div className="bg-emerald-400 main-content flex flex-col items-center justify-center py-10 gap-6">
      <img src={img} alt="react-img" className="w-[20%]" />
      <div className="content text-center text-white">
        <h3 className="uppercase font-bold text-[2.5rem]">start framework</h3>
        <div className="star relative  py-3">
          <i className="fa-solid fa-star text-[1.1rem]"></i>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}
