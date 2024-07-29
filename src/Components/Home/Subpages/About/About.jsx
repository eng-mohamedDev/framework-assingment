import "../Css/effects.css";

export default function About() {
  return (
    <div className="bg-emerald-400 main-content flex flex-col items-center justify-center py-36 gap-3 text-white">
      <h3 className="uppercase font-bold text-[2.5rem]">about componnet</h3>
      <div className="star relative  py-3">
        <i className="fa-solid fa-star text-[1.1rem]"></i>
      </div>
      <div className="content flex flex-row items-center justify-center w-[75%] gap-10">
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>

        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  );
}
