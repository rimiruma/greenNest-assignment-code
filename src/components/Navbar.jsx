import { Link, NavLink, useLocation } from "react-router";
import logoImg from "../assets/logo.png";
import { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const location = useLocation();
  const { user, logOut } = use(AuthContext);
   const { theme, toggleTheme } = useTheme();

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
      <div className="bg-green-100 dark:bg-black px-4 md:px-8 navbar">
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

         {/* Theme Toggle */}
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox"  className="theme-controller" value="synthwave" onChange={(e) => toggleTheme(e.target.checked)} checked={theme === "dark"} />

        {/* sun icon */}
        <svg
          className="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>

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
              <Link to="/auth/login" className="btn bg-green-200 dark:bg-black">
                Login
              </Link>
              <Link to="/auth/register" className="btn bg-green-200 dark:bg-black">
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
