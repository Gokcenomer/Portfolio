import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Portfolio = () => {
  return (
    <div className="flex flex-col justify-center items-center  text-white bg-black">
      <Navbar />
      <section className="text-white mb-4 ">
        <div className="my-24">
          <p className="block text-gray-400 text-center">Wiew my work</p>
          <h1 className="block text-center font-bold text-4xl underline underline-offset-8 decoration-blue-700 ">
            Portfolio
          </h1>
        </div>
        <div className="bg-black flex flex-col gap-4 rounded text-center lg:grid lg:grid-cols-2 lg:px-4 md:gap-16">
          <Link
            to={"https://github.com/Gokcenomer/snap-shot-gallery"}
            target="_blank"
          >
            <div className=" w-96 h-60  lg:wh-full lg:w-[540px]   flex flex-col items-center justify-around hover:scale-105 cursor scale-100 gap-2 p-4 bg-yellow-400  ">
              <p>Tailwind / React.js /</p>
              <h2 className="font-black text-2xl">SnapShot</h2>
              <p>View Work</p>
            </div>
          </Link>
          <Link
            to={"https://github.com/Gokcenomer/social-proof-section"}
            target="_blank"
          >
            <div className="w-96 h-60 lg:wh-full lg:w-[540px]   flex flex-col items-center justify-around hover:scale-105 cursor scale-100 gap-2 p-4 bg-purple-800 ">
              <p>Html / Css</p>
              <h2 className="font-black text-2xl">Social Proof Section</h2>
              <p>View Work</p>
            </div>
          </Link>
          <Link
            to={"https://github.com/Gokcenomer/memory-card"}
            target="_blank"
          >
            <div className="w-96 h-60 lg:wh-full lg:w-[540px]   flex flex-col items-center justify-around hover:scale-105 cursor scale-100 gap-2 p-4 bg-indigo-800">
              <p>React.js</p>
              <h2 className="font-black text-2xl">Memory Card</h2>
              <p>View Work</p>
            </div>
          </Link>
          <Link
            to={"https://github.com/Gokcenomer/Etch-a-Sketch-"}
            target="_blank"
          >
            <div className="w-96 h-60 lg:wh-full lg:w-[540px]   flex flex-col items-center justify-around hover:scale-105 cursor scale-100 gap-2 p-4 bg-pink-800">
              <p>Html / Css / Javascript</p>
              <h2 className="font-black text-2xl">Etch a Sketch</h2>
              <p>View Work</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
