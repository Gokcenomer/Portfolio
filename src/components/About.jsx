import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center flow-scroll text-white ">
      <Navbar />
      <section className="lg:mb-14 ">
        <div className="my-16 md:mb-16">
          <p className="text-gray-400 text-center mb-2 ">
            Let me introduce myself
          </p>
          <h1 className="text-center font-bold text-4xl underline underline-offset-8 decoration-blue-700">
            About Me
          </h1>
        </div>
        <div className="px-8 md:grid  bg-black md:grid-cols-6 ">
          <div className="flex justify-center mt-4 md:col-start-2 ">
            <img
              src="./src/assets/gandalf.jpg"
              alt=""
              className="w-1/3  mb-4 object-cover "
            />
          </div>
          <div className="flex flex-col gap-4 md:col-span-3  ">
            <p className="text-blue-700 mt-8">Nice to meet you</p>
            <p className="font-black text-white text-lg text-left">
              Frontend Web Developer who creates amazing digital experiences!
            </p>
            <p className="text-gray-400 mb-4 text-left ">
              My unique blend of technical expertise, creative thinking, and
              background in psychology allows me to approach each project with a
              deep understanding of the end user's perspective, resulting in
              highly effective user-centred digital products.
            </p>
            <div className="flex flex-col gap-2 font-black md:gap-4 md:items-between">
              <p>
                Name: <span className="text-gray-">Omer Gokcen</span>
              </p>
              <p>
                Email:
                <span className="text-blue-700"> omer-gokcen@outlook.com</span>
              </p>
              <p>
                Location: <span className="text-gray-400">Mardin,Turkiye</span>
              </p>
              <p>
                Avability: <span className="text-gray-400">Open for work</span>
              </p>
              <button className="bg-blue-700 p-2 rounded-full w-1/2 sm:w-1/3 mt-4 md:w-1/2 lg:w-1/4 ">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
