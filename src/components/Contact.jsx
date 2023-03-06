import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center  ">
      <Navbar />

      <section>
        <div>
          <p className=" text-gray-400 text-center">Get in touch</p>
          <h1 className=" text-center font-bold text-4xl underline underline-offset-8 decoration-blue-700 text-white">
            Contact
          </h1>
        </div>
        <div className="m-4">
          <p className="text-white font-black">Message me</p>
          <form className="flex flex-col gap-4 mt-4 md:w-full" action="/">
            <div className="w-full space-y-4">
              <input
                placeholder="Name"
                className="w-full p-2 text-blue-700 opacity-40 focus:ring-blue-700 border-2 border-blue-700 focus:border-2 outline-2 outline-blue-700 focus:border-blue-700"
                type="text "
              ></input>
              <input
                placeholder="Email"
                className="w-full p-2 text-blue-700 opacity-40 focus:ring-blue-700 border-2 border-blue-700 focus:border-2 outline-2 outline-blue-700 focus:border-blue-700"
                type="text "
              ></input>
            </div>
            <input
              placeholder="Subject"
              className="w-full p-2 text-blue-700 opacity-40 focus:ring-blue-700 border-2 border-blue-700 focus:border-2 outline-2 outline-blue-700 focus:border-blue-700"
              type="text "
            ></input>
            <textarea
              placeholder="Message"
              className="w-full p-2 text-blue-700 opacity-40 focus:ring-blue-700 border-2 border-blue-700 focus:border-2 outline-2 outline-blue-700 focus:border-blue-700 "
              type="textarea"
              rows="5"
              cols="30"
            ></textarea>
            <button className="rounded-full bg-blue-700 text-white opacity-100 h-12 w-1/2 mt-2">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
