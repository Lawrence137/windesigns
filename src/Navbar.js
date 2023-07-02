import { Link } from "react-router-dom";
import React, { useState } from "react";
import novavest from "./assets/novavest.png";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = ({ isAuthenticated, handleLogout }) => {
  const [nav, setNav] = useState(false);

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <nav className="sticky fixed top-0 left-0 right-0 bg-black text-white flex justify-between px-4 py-2">
      <div className="flex items-center ">
      <Link to="/">
        <img
          src={novavest}
          alt="logo"
          className="w-24 h-20 object-contain scale-125"
        />
        </Link>
        <div className="ms-5 hidden md:flex space-x-4 font-bold">
          <Link to="/" exact className="nav-link">
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/search" exact className="nav-link">
                Search
              </Link>
              <Link to="/shelf" exact className="nav-link">
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
          <Link to="/login" className="nav-link mr-4">
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
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 py-4 z-10 text-gray-500 md:hidden'>
        {nav ?  <FaTimes  size={30}/> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className='fixed top-0 left-0 w-full h-screen bg-white text-black'>
          <div className='h-full overflow-y-scroll'>
            <ul className='flex flex-col justify-center items-center py-6'>
              <li onClick={handleLinkClick} className='px-4 cursor-pointer capitalize py-6 text-2xl'>
                <Link to="/">Home</Link>
              </li>
              {isAuthenticated && (
                <>
                  <li onClick={handleLinkClick} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                    <Link to="/search">Search</Link>
                  </li>
                  <li onClick={handleLinkClick} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                    <Link to="/shelf">Shelf</Link>
                  </li>
                  <li onClick={() => { handleLogout(); handleLinkClick(); }} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                    Logout
                  </li>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <li onClick={handleLinkClick} className='px-4 cursor-pointer capitalize py-6 text-2xl'>
                    <Link to="/login">Login</Link>
                  </li>
                  <li onClick={handleLinkClick} className='px-4 cursor-pointer capitalize py-6 text-2xl'>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};








// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import novavest from "./assets/novavest.png";
// import { FaBars, FaTimes } from "react-icons/fa";

// export const Navbar = ({ isAuthenticated, handleLogout }) => {
//   const [nav, setNav] = useState(false);

//   return (
//     <nav className="sticky top-0 bg-black text-white flex justify-between px-4 py-2">
//       <div className="flex items-center">
//         <img
//           src={novavest}
//           alt="logo"
//           className="w-24 h-20 object-contain"
//         />
//         <div className="ms-5 hidden md:flex space-x-4 font-bold">
//           <Link to="/" exact className="nav-link">
//             Home
//           </Link>
//           {isAuthenticated ? (
//             <>
//               <Link to="/search" exact className="nav-link">
//                 Search
//               </Link>
//               <Link to="/shelf" exact className="nav-link">
//                 Shelf
//               </Link>
//               <Link to="/" onClick={handleLogout} exact className="nav-link">
//                 Logout
//               </Link>
//             </>
//           ) : null}
//         </div>
//       </div>
//       {!isAuthenticated && (
//         <div className="hidden md:flex items-center font-bold">
//           <Link to="/login" className="nav-link mr-4">
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="nav-link rounded-full bg-blue-700 py-2 px-4 mr-6"
//           >
//             Sign Up
//           </Link>
//         </div>
//       )}
//       <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 py-4 z-10 text-gray-500 md:hidden'>
//         {nav ?  <FaTimes  size={30}/> : <FaBars size={30} />}
//       </div>

//       {nav && (
//         <div className='fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-blue-900 text-gray-500'>
//           <div className='h-full overflow-y-scroll'>
//             <ul className='flex flex-col justify-center items-center py-6'>
//               <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
//                 Home
//               </li>
//               {isAuthenticated && (
//                 <>
//                   <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
//                     Search
//                   </li>
//                   <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
//                     Shelf
//                   </li>
//                   <li onClick={handleLogout} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
//                     Logout
//                   </li>
//                 </>
//               )}
//               {!isAuthenticated && (
//                 <>
                  // <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                  //   <Link to="/login">Login</Link>
                  // </li>
                  // <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                  //   <Link to="/signup">Sign Up</Link>
                  // </li>
//                 </>
//               )}
//             </ul>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };
