import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import MenuPage from "../Pages/Menu/MenuPage";
import ShopPage from "../Pages/Shop/ShopPage";

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
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/menus",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "/shop",
        element: <ShopPage></ShopPage>,
      }
    ],
  },
]);

export default router;
