import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectAria, setSelectAria] = useState(false);
  return (
    <nav className="fixed top-0 w-full  px-2 sm:px-4 py-2.5  dark:bg-gray-900 bg-black">
      <div className="container flex flex-wrap items-center justify-between mx-auto  ">
        <Link className="text-white" to={"/"}>
          {" "}
          OMER GOKCEN
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
          focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={selectAria}
          onClick={() => {
            setSelectAria(!selectAria);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className={
            selectAria
              ? "block w-full md:block md:w-auto transition duration-1700 ease-in-out"
              : "hidden  w-full md:block md:w-auto  transition duration-1700 ease-in-out"
          }
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-black md:bg-black md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-gray-700 md:hover:scale-125 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="home"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-gray-700 md:hover:scale-125 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-gray-700 md:hover:scale-125 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to={"/portfolio"}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-gray-700 md:hover:scale-125 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                to={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
