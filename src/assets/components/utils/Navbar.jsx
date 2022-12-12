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
      <div className="px-5 py-5 flex justify-around items-center bg-white dark:bg-black transition delay-100 ease-in-out drop-shadow-md ">
        <Link to="/">
          <img className="w-32" src={logo_eng} alt="" />
        </Link>
        <div className="flex justify-center items-center space-x-5 ">
          <div className="  flex relative justify-center items-center">
            <input
              type="text"
              className=" rounded-md px-5 w-80 py-2  bg-lgray"
              placeholder="Search by Title"
            />
            <AiOutlineSearch
              size={20}
              className="absolute right-3"
              color="gray"
            />
          </div>
          <div className="space-x-5">
            <button className="px-6 py-2 rounded-md bg-lgray dark:bg-brown dark:text-white text-gray transition delay-100 ease-in-out">
              Nepali
            </button>
            <button className="px-6 py-2 rounded-md bg-lgray text-gray dark:bg-brown dark:text-white transition delay-100 ease-in-out">
              Compact View
            </button>
          </div>
        </div>

        {/* right side icons */}
        <div className="flex justify-center items-center  space-x-5">
          <CgDarkMode
            size={25}
            onClick={handleDark}
            className="dark:text-white transition delay-100 ease-in-out cursor-pointer"
          />
          <RiNotification2Fill
            size={25}
            className=" dark:text-white transition delay-100 ease-in-out"
          />
          <Link
            to="/login"
            className="flex justify-center items-center px-5 py-2 space-x-2 bg-lgray"
          >
            <HiOutlineUserCircle size={25} color="gray" />
            <h1>Login</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
