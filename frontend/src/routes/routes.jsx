import {
 
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Nav from "../component/layout/Nav";
import Tests from "../pages/Tests";
import Quiz from "../pages/Quiz";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
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
        path: "/test",
        element: <Tests />,
      },
      {
        path: "/quiz/:id",
        element: <Quiz />,
      },
    ],
  },
  
 
]);
