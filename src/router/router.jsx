import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/Home/Home";
import DitailsPage from "../pages/projects/components/ditailsPage";
import Error from "../error/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ditails/:id",
        element: <DitailsPage></DitailsPage>,
        loader: ({ params }) => params.id,
      },
    ],
  },
]);
export default router;
