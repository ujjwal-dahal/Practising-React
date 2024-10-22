import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Todo from "./components/Todo/Todo";


let App = ()=>{
  return <>
  <BrowserRouter>
    <Routes>
      <Route index element={<><Navbar/>  <h1>This is Home Page</h1></>} />
      <Route path="/about" element={<><Navbar/>  <h1>This is About Page</h1></>} />
      <Route path="/contact" element={<><Navbar/>  <h1>This is Contact Page</h1></>} />
      <Route path="/disclaimer" element={<><Navbar/>  <h1>This is Disclaimer Page</h1></>} />
      <Route path="/todo" element = {<><Navbar/><Todo/></>} />
    </Routes>
  </BrowserRouter>
   
  </>
}

export default App;