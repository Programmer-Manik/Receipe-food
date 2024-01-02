import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../components/Layouts/LoginLayout/LoginLayout";
import Main from "../components/Layouts/Main";
import ViewsLayout from "../components/Layouts/ViewsLayout/ViewsLayout";
import Blog from "../components/pages/Blog/Blog";
import Error from "../components/pages/Error/Error";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Registration from "../components/pages/Registration/Registration";
import ViewRecipes from "../components/pages/ViewRecipes/ViewRecipes";
import PrivateRoutes from "./PrivateRoutes";

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
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/viewrecipes",
    element: <ViewsLayout></ViewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoutes>
            <ViewRecipes></ViewRecipes>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://banglar-food-server-mdsumonali372.vercel.app/chep/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
