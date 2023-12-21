import Home from "../views/index";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function IndexRouter() {
  return <RouterProvider router={router} />;
}
