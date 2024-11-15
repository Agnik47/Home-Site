import React from "react";
import assets from "../assets/assets";

const TopNav = () => {
  return (
    <div className="w-full p-12 h-[12vh] absolute top-0 left-0 z-10 flex justify-between items-center">
      <img src={assets.logo} className="w-[12vw] h-[2.5vw]" alt="" />
      <div>
        {["home", "about", "project", "|", "testimonial"].map((e, i) => {
          return (
            <a
              className="cursor-pointer text-[#e4edf2] hover:text-gray-400 m-2 "
              key={i}
              href={`#${e.replace(/\s/g, "").toLowerCase()}`}
            >
              {e.toUpperCase()}
            </a>
          );
        })}
      </div>
      {/* Button */}
      <button className="ml-4 px-5 py-3 bg-white text-black rounded-full hover:bg-gray-400 transition duration-300 ease-in-out">
        Sign Up
      </button>
    </div>
  );
};

export default TopNav;
