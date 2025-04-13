import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/Home/Home";
import DitailsPage from "../pages/projects/components/ditailsPage";
import Error from "../error/error";
import LogIn from "../pages/developer/logIn";
import Develop from "../develop/develop";
import UpdateProject from "../pages/developer/components/updateProject";
import Blogs from "../pages/blog/blogs";

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
      {
        path: "/developer",
        element: <LogIn></LogIn>
      },
      {
        path:"/develop",
        element: <Develop></Develop>
      },
      {
        path: "/updateProject/:id",
        element: <UpdateProject></UpdateProject>,
        loader: ({ params }) => params.id,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ],
  },
]);
export default router;
