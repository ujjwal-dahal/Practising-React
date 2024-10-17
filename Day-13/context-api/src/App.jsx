import MyComp from "./Hooks/useNavigate/MyComp";

import About from "./Components/Website/About";
import Services from "./Components/Website/Services";
import Contact from "./Components/Website/Contact";
import Home from "./Components/Website/Home";
import Layout from "./Components/Website/Layout";
import Privacy from "./Components/Website/Privacy";
import Terms from "./Components/Website/Terms";
import Error from "./Components/Website/Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PostData from "./Components/Axios/PostData";

import CrudApi from "./API/components/CrudApi";

function App() {
  let myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <MyComp />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "privacy",
          element: <Privacy />,
        },
        {
          path: "terms",
          element: <Terms />,
        },
        {
          path:"/postdata",
          element : <PostData />
        },
        {
          path:"/crud",
          element : <CrudApi />
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
