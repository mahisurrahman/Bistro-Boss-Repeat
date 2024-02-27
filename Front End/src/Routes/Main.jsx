import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import MenuPage from "../Pages/Menu/MenuPage";
import ShopPage from "../Pages/Shop/ShopPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "menus",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "shop",
        element: <ShopPage></ShopPage>,
      }
    ],
  },
  {
    path:'login',
    element: <Login></Login>,
  },
  {
    path: 'signup',
    element: <Signup></Signup>,
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: 'userhome',
        element: <UserHome></UserHome>,
      },
      {
        path: 'cart',
        element: <Cart></Cart>,
      }
    ]
  }
]);

export default router;
