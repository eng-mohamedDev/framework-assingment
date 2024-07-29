import img1 from "../../../../assets/Images/poert1.png";
import img2 from "../../../../assets/Images/port2.png";
import img3 from "../../../../assets/Images/port3.png";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-5">
      <h3 className="uppercase font-bold text-[2.5rem]">portfolio componnet</h3>
      <div className="star-dark relative py-3">
        <i className="fa-solid fa-star text-[1.1rem]"></i>
      </div>
      <div className="imgs container flex flex-wrap justify-center gap-10">
        <img src={img1} alt="home" className="w-[30%] rounded-xl" />
        <img src={img2} alt="cake" className="w-[30%] rounded-xl" />
        <img src={img3} alt="circ" className="w-[30%] rounded-xl" />
        <img src={img1} alt="home" className="w-[30%] rounded-xl" />
        <img src={img2} alt="cake" className="w-[30%] rounded-xl" />
        <img src={img3} alt="circ" className="w-[30%] rounded-xl" />
      </div>
    </div>
  );
}
