import React from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-12 h-[12vh] fixed top-0 left-0 z-10 flex justify-between items-center bg-black bg-opacity-60">
      <img src={assets.logo} className="w-[12vw] h-[2.5vw] " alt="" />
      <div>
        {["home", "about", "project", "|", "testimonial"].map((e, i) => {
          return (
            <a
              className="cursor-pointer text-gray-100 hover:text-gray-400 m-5  transition duration-300 ease-in-out"
              key={i}
              href={`#${e.replace(/\s/g, "").toLowerCase()}`}
            >
              {e.toUpperCase()}
            </a>
          );
        })}
      </div>
      {/* Button */}
      <button onClick={()=> navigate("/signin")} className="ml-4 px-5 py-3 bg-white text-black rounded-full hover:bg-gray-400 transition duration-300 ease-in-out">
        Sign Up
      </button>

    
    </div>
  );
};

export default TopNav;
