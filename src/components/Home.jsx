import React from "react";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center ">
      <Navbar />
      <div className=" text-center text-white flex flex-col gap-14 mt-16">
        <h1 className="font-black text-6xl md:text-8xl animate-pulse">
          Omer Gokcen
        </h1>
        <p className=" text-2xl duration-500 md:text-3xl">
          I'm a Software Engineer
        </p>
      </div>
    </div>
  );
};

export default Home;
