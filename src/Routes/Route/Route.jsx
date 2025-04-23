import { createBrowserRouter } from "react-router-dom";
import Main from "./../../Layout/Main";
import Home from "./../../Pages/Home/Home";
import About from "./../../Pages/About/About";
import NotFound from "./../../Pages/Shared/NotFound/NotFound";
import Visa from "../../Pages/Visa/Visa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/visa",
        element: <Visa />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
