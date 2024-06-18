import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [navbarStyles, setNavbarStyles] = useState({
    color: "#2d3436",

    top: "0",
    width: "100%",
    zIndex: "1000",
  });

  const handleLogout = () => {
    localStorage.removeItem("isLoggedInTafe");
    navigate("/login");
  };
  return (
    <div className="absolute top-0 left-0 w-full z-10" style={navbarStyles}>
      <nav className="max-w-7xl px-5 mx-auto flex justify-between items-center lg:mt-0 text-white">
        <div className="flex flex-col items-center justify-center hover:cursor-pointer py-4">
          <div className="flex items-center gap-2">
            <div>
              <h4 className="lg:text-2xl md:text-xl sm:text-2xl ss:text-xl circular">
                Tafe
              </h4>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 navright-card">
          <ul className="capitalize hidden gap-10 items-end justify-end xl:flex">
            <li className="hover:cursor-pointer hover:text-green-500 poppins">
              Crops
            </li>
            <li className="hover:cursor-pointer hover:text-green-500  poppins">
              Seeds
            </li>

            <button
              onClick={handleLogout}
              className="hover:cursor-pointer bg-green-300 text-black  hover:bg-green-600 hover:text-white poppins pl-3 pr-3 rounded-md"
            >
              Logout
            </button>
          </ul>
          <div className="flex items-center cursor-pointer ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
