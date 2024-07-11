import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/Home/Home";
import DitailsPage from "../pages/projects/components/ditailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "ditails/:id",
        element: <DitailsPage></DitailsPage>,
      },
    ],
  },
]);
export default router;
