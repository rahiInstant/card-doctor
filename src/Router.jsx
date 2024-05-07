import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ServiceDetail from "./Component/Service/ServiceDetail";
import CheckOut from "./Component/CheckOut/CheckOut";
import AddNew from "./Component/AddNewService/AddNew";
import SignUp from "./Component/SignUp/SignUp";
import Login from "./Component/LogIn/Login";
import ErrorPage from "./Component/404/ErrorPage";
import CartDetail from "./Component/CartDetail/CartDetail";
import ManageOrder from "./Component/ManageOrder/ManageOrder";
import Home from "./Component/Home/Home";
import Private from "./Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetail></ServiceDetail>,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:8080/specific/${params.id}`),
      },
      {
        path: "/check-out/:id",
        element: (
          <Private>
            <CheckOut></CheckOut>
          </Private>
        ),
        loader: () => fetch(``),
      },
      {
        path: "/add-new-service",
        element: <AddNew></AddNew>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/cart-details",
        element: (
          <Private>
            <CartDetail></CartDetail>
          </Private>
        ),
      },
      {
        path: "/manage-order",
        element: <ManageOrder></ManageOrder>,
      },
    ],
  },
]);

export default router;
