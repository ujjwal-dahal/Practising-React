import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Home from "./Components/Home.jsx";
import Services from "./Components/Services.jsx";
import PageNotFound from "./Components/PageNotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/about/:username?"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/contact"
        >
        <Route index element={<><Navbar/><Contact /></>} />
        <Route path="login" element ={<><Navbar/><h1>This is Login Page</h1></>} />
        <Route path=":id/:username/" element = {<><Navbar/><Contact /></>} />
        </Route>

        
        <Route
          path="/service"
          element={
            <>
              <Navbar />
              <Services />
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <Navbar /> <PageNotFound />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
