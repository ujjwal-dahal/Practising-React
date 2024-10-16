import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";


function Layout(){

  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
}

export default Layout;