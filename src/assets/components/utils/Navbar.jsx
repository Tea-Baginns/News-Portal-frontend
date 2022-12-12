import React from "react";
import logo_eng from "../../images/utils/ratopati_eng.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";
import { GrNotification } from "react-icons/gr";
import { HiOutlineUserCircle } from "react-icons/hi";
const Navbar = () => {
  return (
    <div className="sticky top-0">
      <div className="px-5 py-5 flex justify-around items-center bg-white drop-shadow-md ">
        <img className="w-36" src={logo_eng} alt="" />
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
            <button className="px-6 py-2 bg-lgray text-gray">Nepali</button>
            <button className="px-6 py-2 bg-lgray text-gray">
              Compact View
            </button>
          </div>
        </div>

        {/* right side icons */}
        <div className="flex justify-center items-center space-x-5">
          <CgDarkMode size={25} />
          <GrNotification size={25} />
          <div className="flex justify-center items-center px-5 py-2 space-x-2 bg-lgray">
            <HiOutlineUserCircle size={25} />
            <h1>Login</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
