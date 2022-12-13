import React, { useEffect, useState } from "react";
import logo_eng from "../../images/utils/ratopati_eng.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";
import { RiNotification2Fill } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark" || localStorage.getItem("theme") === "light") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleDark = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme);
  };
  return (
    <div className="sticky  top-0">
      <div className="px-5 py-5 flex justify-around items-center bg-white dark-mode drop-shadow-md ">
        <Link to="/">
          <img className="w-32" src={logo_eng} alt="" />
        </Link>
        <div className="flex justify-center items-center space-x-5 ">
          <div className="  flex relative justify-center items-center">
            <input
              type="text"
              className=" rounded-md px-5 w-80 py-2  bg-lgray dark-btn "
              placeholder="Search by Title"
            />
            <AiOutlineSearch
              size={20}
              className="absolute right-3"
              color="gray"
            />
          </div>
          <div className="space-x-5 text-gray">
            <button className="px-6 py-2 rounded-md bg-lgray dark-btn">
              Nepali
            </button>
            <Link
              to="/compact"
              className="px-6 py-2 rounded-md bg-lgray  dark-btn"
            >
              Compact View
            </Link>
          </div>
        </div>

        {/* right side icons */}
        <div className="flex justify-center items-center  space-x-5">
          <CgDarkMode
            size={25}
            onClick={handleDark}
            className="dark-text text-black cursor-pointer"
          />
          <RiNotification2Fill size={25} className=" text-black dark-text" />
          <Link
            to="/login"
            className="flex rounded-md justify-center items-center px-5 py-2 space-x-2 text-black bg-lgray"
          >
            <HiOutlineUserCircle size={25} color="black" />
            <h1 className="">Login</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
