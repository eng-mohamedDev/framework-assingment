import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
