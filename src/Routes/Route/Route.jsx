import { createBrowserRouter } from "react-router-dom";
import Main from "./../../Layout/Main";
import Home from "./../../Pages/Home/Home";
import About from "./../../Pages/About/About";
import NotFound from "./../../Pages/Shared/NotFound/NotFound";
import Visa from "../../Pages/Visa/Visa";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";

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
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
