import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

export const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="">
        <div
          className="bg-cover bg-center h-screen"
          style={{
            backgroundImage: `url(${require("../assets/backgrd.jpg")})`
          }}
        >
          <div
            className="flex flex-col items-center justify-center h-screen"
            style={{ backgroundColor: "rgba(2, 0, 2, 0.8)" }}
          >
            <h4
              className="text-6xl md:text-8xl font-signature bg-gradient-to-r from-red-700 via-blue-700 to-yellow-700 py-2 inline-block"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              NOVAVE$T
            </h4>

            <form className="mt-4 flex flex-col items-center">
              <button
                type="submit"
                className="flex py-4 px-10 text-4x1 md:text-xl rounded-full mt-4 text-black font-bold bg-gradient-to-r from-red-700 via-blue-700 to-yellow-700 w-full"
                onClick={handleSubmit}
              >
                Get Started
                <span className="flex-shrink-0">
                  <BsArrowRightCircleFill size={25} className="ml-2" />
                </span>
              </button>
            </form>
          </div>
        </div>
    </div>
  );
};
