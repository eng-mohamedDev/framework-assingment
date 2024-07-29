import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav className="p-8 bg-cyan-950">
      <div className="container flex justify-between items-center text-white">
        <Link className="uppercase text-[2rem] font-bold" to={"/"}>
          Start Framework
        </Link>
        <ul className="flex justify-between gap-10 uppercase font-bold text-[1rem]">
          <li>
            <NavLink className="p-2 rounded-lg" to={"/About"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="p-2 rounded-lg" to={"/Portfolio"}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className="p-2 rounded-lg" to={"/Contact"}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
