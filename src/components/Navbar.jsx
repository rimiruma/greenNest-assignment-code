import { Link, NavLink, useLocation } from "react-router";
import logoImg from "../assets/logo.png";
import { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const location = useLocation();
  const { user, logOut } = use(AuthContext);

  const linkClasses = (path) =>
    `text-lg px-3 py-2 rounded-md font-medium transition duration-200 border-b-2 ${
      location.pathname === path
        ? "text-green-600 border-green-600"
        : "border-transparent hover:text-green-600 hover:border-green-400"
    }`;

  const handleLogOut = () => {
    logOut()
      .then(() => toast("✅ Logged out successfully!"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="shadow-md sticky top-0 z-50 max-w-[1200px] mx-auto">
      {/* Same width as Banner */}
      <div className=" bg-green-100 px-4 md:px-8 navbar">
        <div className="navbar-start flex items-center gap-2">
          {user && (
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>

              {/* Mobile Menu */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/" className={linkClasses("/")}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/all-plants" className={linkClasses("/all-plants")}>
                    All Plants
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/auth/profile" className={linkClasses("/profile")}>
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us" className={linkClasses("/about-us")}>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us" className={linkClasses("/contact-us")}>
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-error text-white mt-2 w-full"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-green-700">Plantify</span>
          </Link>
        </div>

        {/* Center Links (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className={linkClasses("/")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-plants" className={linkClasses("/all-plants")}>
                All Plants
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/auth/profile" className={linkClasses("/profile")}>
                  My Profile
                </NavLink>
              </li>
            )}
              <li>
                  <NavLink to="/about-us" className={linkClasses("/about-us")}>
                    About Us
                  </NavLink>
                </li>
                 <li>
                  <NavLink to="/contact-us" className={linkClasses("/contact-us")}>
                    Contact Us
                  </NavLink>
                </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li><a>{user?.displayName}</a></li>
                <li onClick={handleLogOut}><a>Logout</a></li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/auth/login" className="btn bg-green-200">
                Login
              </Link>
              <Link to="/auth/register" className="btn bg-green-200">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
