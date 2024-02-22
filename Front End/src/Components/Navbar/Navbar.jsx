import { Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <div className="flex justify-between items-center gap-5 text-xl font-normal">
      <Link to="/">
        <li className="tracking-wider font-semibold duration-700 hover:text-orange-600 hover:cursor-pointer hover:duration-700">
          Home
        </li>
      </Link>
      <Link to="/contact">
        <li className="tracking-wider font-semibold duration-700 hover:text-orange-600 hover:cursor-pointer hover:duration-700">
          Contact Us
        </li>
      </Link>
      <Link>
        <li className="tracking-wider font-semibold duration-700 hover:text-orange-600 hover:cursor-pointer hover:duration-700">
          Dashboard
        </li>
      </Link>
      <Link to="/menus">
        <li className="tracking-wider font-semibold duration-700 hover:text-orange-600 hover:cursor-pointer hover:duration-700">
          Our Menu
        </li>
      </Link>
      <Link to="/shop">
        <li className="tracking-wider font-semibold duration-700 hover:text-orange-600 hover:cursor-pointer hover:duration-700">
          Our Shop
        </li>
      </Link>
    </div>
  );
  return (
    <div className="navbar bg-transparent px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div>
          <Link to="/">
            <p className="text-3xl font-bold tracking-widest text-orange-600">
              Bistro Boss
            </p>
          </Link>
          <p className="text-lg font-bold tracking-normal -mt-2 text-red-600">
            Get Something Delicious
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="duration-700 px-4 py-2 hover:bg-white rounded-lg text-xl font-bold bg-orange-600 text-white hover:text-black hover:cursor-pointer hover:border-2 hover:border-orange-600 hover:duration-700">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
