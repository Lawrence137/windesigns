import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import novavest from "../assets/novavest.png";
import { FaBars, FaTimes } from "react-icons/fa";
export const Navbar = ({ isAuthenticated, handleLogout }) => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
 <nav className="sticky top-0 left-0 right-0 bg-black text-white flex justify-between px-4 py-2">
    <div className="flex items-center ">
      <Link to="/">
        <img
          src={novavest}
          alt="logo"
          className="w-24 h-20 object-contain scale-125"
        />
      </Link>
      <div className="ms-5 hidden md:flex space-x-4 font-bold">
        {isAuthenticated ? (
          <>
            <Link to="/company" exact className="nav-link">
              Search
            </Link>
            <Link to="/imvestment" exact className="nav-link">
              Shelf
            </Link>
            <Link to="/" onClick={handleLogout} exact className="nav-link">
              Logout
            </Link>
          </>
        ) : null}
      </div>
    </div>
    {!isAuthenticated && (
      <div className="hidden md:flex items-center font-bold">
        <Link to="#" className="nav-link mr-4">
          Login
        </Link>
        <Link
          to="/signup"
          className="nav-link rounded-full bg-blue-700 py-4 px-10  mr-6"
        >
          Sign Up
        </Link>
      </div>
    )}
    <div
      onClick={() => setNav(!nav)}
      className="cursor-pointer pr-4 py-4 z-30 text-white md:hidden"
    >
      {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>

{nav && (
  <>
  <div
    ref={navRef}
    className={`fixed top-0 right-0 w-3/4 h-screen bg-white text-black transition-opacity duration-300 ease-in-out z-20 ${
      nav ? "opacity-100" : "opacity-0"
    }`}
  >
    <div className="h-full overflow-y-scroll">
      <ul className="flex flex-col justify-center items-center py-6">
        <li
          onClick={handleLinkClick}
          className="px-4 cursor-pointer capitalize py-6 text-2xl"
        >
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated && (
          <>
            <li
              onClick={handleLinkClick}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link to="/investment">Search</Link>
            </li>
            <li
              onClick={handleLinkClick}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link to="/company">Shelf</Link>
            </li>
            <li
              onClick={() => {
                handleLogout();
                handleLinkClick();
              }}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              Logout
            </li>
          </>
        )}
        {!isAuthenticated && (
          <>
            {/* <li onClick={handleLinkClick} className='px-4 cursor-pointer capitalize py-6 text-2xl'>
              <Link to="/login">Login</Link>
            </li> */}
            <li
              onClick={handleLinkClick}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  </div>


            <div
            className={`fixed inset-0 bg-black transition-opacity duration-700 z-10 ${
              nav ? "opacity-70" : "opacity-0 pointer-events-none"
            }`}
          />
          </>
      )}
    </nav>
  );
};
