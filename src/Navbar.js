import {  Link } from "react-router-dom";
import React from 'react';
import novavest from "./assets/novavest.png";

export const Navbar = ({isAuthenticated, handleLogout}) => {
  return (
    <nav className="sticky top-0 bg-black text-white flex justify-between">
      <div className="flex items-center">
        <img src={novavest} alt="logo" style={{ width: "120px", height: "100px" }} />
        <div className="ms-5 flex space-x-4 font-bold">
          <Link to="/" exact className="nav-link">Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/search" exact className="nav-link">Search</Link>
              <Link to="/shelf" exact className="nav-link">Shelf</Link>
              <Link to="/" onClick={handleLogout} exact className="nav-link">Logout</Link>
            </>
          ) : null}
        </div>
      </div>
      {!isAuthenticated ? (
        <div className="flex items-center font-bold">
          <Link to="/login" className="nav-link mr-4">Login</Link>
          <Link to="/signup" className="nav-link rounded-full bg-blue-700 py-4 px-10 mr-6">Sign Up</Link>
        </div>
      ) : null}
    </nav>
  );
};

 

