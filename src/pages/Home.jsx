import React from "react";
import TopNav from "../components/TopNav";
import assets from "../assets/assets";

const Home = () => {
  return (
    <div className="relative w-full h-screen" id="header">
      <TopNav />
      <div className="hero"></div>
      <img
        src={assets.header_img}
        alt=""
        className="object-cover w-full h-full"
      />
      <div className="headerText absolute w-[50vw] h-[12vw] z-10 top-[38%] left-1/2 transform -translate-x-1/2">
        <h1 className="text-[5vw] text-center font-bold text-white font-sans tracking-tighter leading-[5vw]">
          Explore homes that fit your dreams
        </h1>
      </div>
      <div className="buttons absolute top-[60%] left-1/2 transform -translate-x-1/2 mt-5 text-white ">
        <button className="px-5 py-3 border-2 font-bold border-white bg-transparent rounded mx-5">
          Projects
        </button>
        <button className="px-5 py-3 border-2 font-bold border-white bg-transparent rounded">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Home;
