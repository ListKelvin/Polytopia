import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EllipSecurve from "../pages/EllipSecurve";
import Home from "../pages/Home";

import NavBar from "../components/NavBar";

import Train from "../pages/Train";
import Human from "../pages/Human";
const RouterComponent = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <div>error warning</div>,
        },
        {
          path: "ellip",
          element: <EllipSecurve />,
          errorElement: <div>error warning</div>,
        },
        {
          path: "train",
          element: <Train />,
          errorElement: <div>error warning</div>,
        },
        {
          path: "human",
          element: <Human />,
          errorElement: <div>error warning</div>,
        },
      ],
    },

    { path: "*", element: <div> unknown page</div> },
  ]);

  return (
    <RouterProvider fallbackElement={<div> Loading</div>} router={router} />
  );
};

export default RouterComponent;
