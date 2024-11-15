import React from 'react';
import TopNav from '../components/TopNav';
import assets from '../assets/assets';

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <TopNav />
      <div className="hero"></div>
      <img src={assets.header_img} alt="" className="object-cover w-full h-full" />
      <div className="headerText absolute w-[50vw] h-[12vw] z-10 top-[35%] left-1/2 transform -translate-x-1/2">
        <h1 className="text-[5vw] text-center font-bold text-white font-sans">Explore homes that fit your dreams</h1>
      </div>
    </div>
  );
};

export default Home;
