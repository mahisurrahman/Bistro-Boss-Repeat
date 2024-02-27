
import { NavLink, Outlet } from "react-router-dom";
import { TbShoppingCartFilled } from "react-icons/tb";
import { TiHomeOutline } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineRateReview } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineContactSupport } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 font-avent-pro max-w-screen-xl mx-auto">
      <div className="col-span-3 bg-zinc-950 text-zinc-100 py-10 px-5 overflow-y-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold">Welcome to Bistro Boss</h1>
          <hr />
          <p className="text-lg mt-2 tracking-widest font-bold">
            This is the User Panel
          </p>
        </div>
        <div className="mt-5">
          <ul>
            <li className="my-2 duration-700 text-sm font-extrabold uppercase tracking-widest border px-4 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 hover:cursor-pointer hover:duration-700">
              <NavLink className="flex items-center gap-5" to="/dashboard/userHome">
                <TiHomeOutline className="text-xl"></TiHomeOutline>
                User Home
              </NavLink>
            </li>
            <li className="my-2 duration-700 text-sm font-extrabold uppercase tracking-widest border px-4 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 hover:cursor-pointer hover:duration-700">
              <NavLink className="flex items-center gap-5" to="/dashboard/cart">
                <TbShoppingCartFilled className="text-xl"></TbShoppingCartFilled>
                My Cart
              </NavLink>
            </li>
            <li className="my-2 duration-700 text-sm font-extrabold uppercase tracking-widest border px-4 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 hover:cursor-pointer hover:duration-700">
              <NavLink className="flex items-center gap-5" to="/dashboard/reservation">
                <SlCalender className="text-xl"></SlCalender>
                Reservation
              </NavLink>
            </li>
            <li className="my-2 duration-700 text-sm font-extrabold uppercase tracking-widest border px-4 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 hover:cursor-pointer hover:duration-700">
              <NavLink className="flex items-center gap-5" to="/dashboard/payment">
                <GiReceiveMoney className="text-xl"></GiReceiveMoney>
                Payment History
              </NavLink>
            </li>
            <li className="my-2 duration-700 text-sm font-extrabold uppercase tracking-widest border px-4 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 hover:cursor-pointer hover:duration-700">
              <NavLink className="flex items-center gap-5" to="/dashboard/review">
                <MdOutlineRateReview className="text-xl"></MdOutlineRateReview>
                Add Review
              </NavLink>
            </li>
            <li className="my-2 duration-700 text-sm font-extrabold uppercase tracking-widest border px-4 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 hover:cursor-pointer hover:duration-700">
              <NavLink className="flex items-center gap-5" to="/dashboard/bookings">
                <CiCalendarDate className="text-xl"></CiCalendarDate>
                MY Booking
              </NavLink>
            </li>
            <div className="my-5">
               <hr />
            </div>
            <li className="my-2 duration-700 text-sm font-extrabold uppercase tracking-widest border px-4 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 hover:cursor-pointer hover:duration-700">
              <NavLink className="flex items-center gap-5" to="/">
                <CiHome className="text-xl"></CiHome>
                Home Page
              </NavLink>
            </li>
            <li className="my-2 duration-700 text-sm font-extrabold uppercase tracking-widest border px-4 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 hover:cursor-pointer hover:duration-700">
              <NavLink className="flex items-center gap-5" to="/menus">
                <MdOutlineRestaurantMenu className="text-xl"></MdOutlineRestaurantMenu>
                Menu
              </NavLink>
            </li>
            <li className="my-2 duration-700 text-sm font-extrabold uppercase tracking-widest border px-4 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 hover:cursor-pointer hover:duration-700">
              <NavLink className="flex items-center gap-5" to="/shop">
                <FaBagShopping className="text-xl"></FaBagShopping>
                Shop
              </NavLink>
            </li>
            <li className="my-2 duration-700 text-sm font-extrabold uppercase tracking-widest border px-4 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950 hover:cursor-pointer hover:duration-700">
              <NavLink className="flex items-center gap-5" to="/contact">
                <MdOutlineContactSupport className="text-xl"></MdOutlineContactSupport>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-9 bg-zinc-800 text-zinc-100 px-10 py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;