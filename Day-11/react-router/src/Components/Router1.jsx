import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home.jsx"
import About from "./About.jsx"
import Contact from "./Contact.jsx"
import Services from "./Services.jsx"


function Router1(){
  let myRouter = Router([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
    {
      path: "/service",
      element: (
        <>
          <Navbar />
          <Services />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default Router1;