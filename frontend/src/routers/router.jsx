import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Banner from "../pages/home/Banner";
import Login from "../components/Login"; // Update path based on your file structure
import Register from "../components/Register";
import CartPage from "../pages/clothes/CartPage";
import CheckoutPage from "../pages/clothes/CheckoutPage";
import SingleCloth from "../pages/clothes/SingleCloth";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/clothes/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageClothes from "../pages/dashboard/manageClothes/ManageClothes";
import AddCloth from "../pages/dashboard/addCloth/AddCloth";
import UpdateCloth from "../pages/dashboard/EditCloth/UpdateCloth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <PrivateRoute><OrderPage/></PrivateRoute>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      { path: "/login",
        element:<Login/>
       },
       {
        path:"/register",
        element:<Register/>
       },
       {
        path:"/cart",
        element:<CartPage/>
       },
       {
        path:"checkout",
        element:<PrivateRoute><CheckoutPage/></PrivateRoute>
       },
       {
        path:"/clothes/:id",
        element:<SingleCloth/>
       }

    ],
  },
  {
    path:"/admin",
    element: <AdminLogin/>,
  },
  {
    path:"/dashboard",
    element:<AdminRoute><DashboardLayout/></AdminRoute>,
    children:[
      {
        path:"",
        element:<AdminRoute><Dashboard/></AdminRoute>
      },
      {
        path:"add-new-cloth",
        element:<AdminRoute><AddCloth/></AdminRoute>
      },
      {
        path:"edit-cloth/:id",
        element:<AdminRoute><UpdateCloth/></AdminRoute>
      },
      {
        path:"manage-clothes",
        element:<AdminRoute><ManageClothes/></AdminRoute>
      },
    ]
  }
]);

export default router;
