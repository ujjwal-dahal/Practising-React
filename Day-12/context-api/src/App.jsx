import MyComp from "./Hooks/useNavigate/MyComp"
import MyCompUseState from "./Hooks/useState/MyCompUseState";

import About from "./Components/Website/About";
import Services from "./Components/Website/Services";
import Contact from "./Components/Website/Contact";
import Home from "./Components/Website/Home";
import Navbar from "./Components/NavBar/Navbar";

import { BrowserRouter , Routes , Route } from "react-router-dom";

function App(){


  return <>
  <BrowserRouter>
    <Routes>
      <Route index element={<> <Navbar/><MyComp/> </>} />
      <Route path="/home" element={<><Navbar/><Home/></>} />
      <Route path="/about" element={<> <Navbar/><About/> </>} />
      <Route path="/contact" element={<> <Navbar/><Contact/> </>} />
      <Route path="/services" element={<> <Navbar/><Services/> </>} />
      <Route path="*" element={<><Navbar/><h1>404 Errors</h1></>} />
    </Routes>
  </BrowserRouter>

    
  </>
}


export default App;