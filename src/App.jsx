import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Notfound/NotFound";

import Main from "./Components/Home/Subpages/Main/Main";
import About from "./Components/Home/Subpages/About/About";
import Contact from "./Components/Home/Subpages/Contact/Contact";
import Portfolio from "./Components/Home/Subpages/Portfolio/Portfolio";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <Main /> },
        { path: "About", element: <About /> },
        { path: "Contact", element: <Contact /> },
        { path: "Portfolio", element: <Portfolio /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
