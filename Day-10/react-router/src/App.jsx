import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About"
import Contact from "./Components/Contact"
import {Disclaimer} from "./Components/Disclaimer"

import { createBrowserRouter , RouterProvider } from "react-router-dom";


function App(){

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element : <><Navbar /> <Home /> </>
    },
    {
      path:"aboutus",
      element : <> <Navbar /> <About /> </>
    },
    {
      path :"contactus",
      element : <> <Navbar/> <Contact /> </>
    },
    {
      path :"disclaimer",
      element : <> <Navbar /> <Disclaimer /> </>
    }
  ])

  return <>
<RouterProvider router={myRouter} />
  </>
}


export default App;