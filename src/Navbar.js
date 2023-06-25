import {  Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import novavest from "./assets/novavest.png";

export const Navbar = ({isAuthenticated, handleLogout}) => {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);


    return ( 

      <nav className="sticky top-0 bg-green-900 flex justify-between">
      <div className="flex items-center">
      <img src={novavest} alt="logo" style={{ width: "120px", height: "100px" }} />
      <a className="text-2xl md:text-4xl font-signature ml-2 text-black py-2">NovaVest</a>

        <div className="ms-5 flex space-x-4 font-bold">
          <Link to="/" exact className="nav-link">Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/search" exact className="nav-link">Search</Link>
              <Link to="/shelf" exact className="nav-link">Shelf</Link>
              <Link to="/" onClick={handleLogout} exact className="nav-link">Logout</Link>
            </>
          ) : (
            <Link to="/signup" className="nav-link">Sign Up</Link>
          )}
        </div>
      </div>
    </nav>
        
        
     );
}
 

