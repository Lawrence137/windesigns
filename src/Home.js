import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {BsArrowRightCircleFill} from "react-icons/bs"

export const Home = ({ setIsAuthenticated }) => {
  const [showBackground, setShowBackground] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signup");
    setIsAuthenticated(false);
    setShowBackground(false);
  };

  return (
    <div className="">
      {showBackground && (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${require('./assets/backgrd.jpg')})` }}>
          <div className="landing-page flex flex-col items-center justify-center h-screen" style={{ backgroundColor: 'rgba(2, 0, 2, 0.8)' }}>
            <h4 className="text-6xl md:text-8xl font-signature bg-gradient-to-r from-red-700 via-blue-700 to-yellow-700 py-2 inline-block" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              NOVAVE$T
            </h4>
  
            <form className="mt-4 flex flex-col items-center" onSubmit={handleSubmit}>
            <button type="submit" className="flex py-4 px-10 text-xl rounded-full mt-4 text-black font-bold bg-gradient-to-r from-red-700 via-blue-700 to-yellow-700 w-full">
  Get Started
  <span className='flex-shrink-0'>
    <BsArrowRightCircleFill size={25} className='ml-2'/>
  </span>
</button>



            </form>
          </div>
        </div>
      )}
  
      {!showBackground && (
        <div className="flex justify-around mt-5">
          {/* <div className="mt-4 p-5 card col-5">
            <p className="text-3xl text-base font-bold leading-9" style={{ lineHeight: "3rem" }}>
              Welcome to Novavest, your one stop investment platform. Invest from as low as $1.
            </p>
          </div> */}
          <div className="card col-4 mt-4 justify-center">
            <h4 className="ms-5 m-3 mt-4 font-bold">You are signed in!</h4>
          </div>
        </div>
      )}
    </div>
  );
}  