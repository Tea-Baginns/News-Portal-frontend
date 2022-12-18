import React, { useEffect, useState } from "react";
import logo_eng from "../../images/utils/ratopati_eng.svg";
import logo_nep from "../../images/utils/ratopati_nep.svg";
import ad_logo from "../../images/utils/ads.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";
import { RiNotification2Fill } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { createContext } from "react";

export const ThemeProvider = createContext();

const Navbar = ({ children }) => {
  const [views, setViews] = useState(false);
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("Nepali");
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
  const handleClick = () => {
    setLang(lang === "Nepali" ? "English" : "Nepali");
  };
  return (
    <>
      <div className="sticky z-10 top-0  ">
        <div className="px-5 py-5 flex  justify-around items-center bg-white dark-mode drop-shadow-md ">
          <Link to="/">
            <img
              className="w-32"
              src={lang !== "English" ? logo_eng : logo_nep}
              alt=""
            />
          </Link>
          <div className="flex justify-center items-center space-x-5 ">
            <div className="  flex relative justify-center items-center">
              <input
                type="text"
                className=" rounded-md px-5 w-80 py-2  bg-lgray dark-btn "
                placeholder={
                  lang !== "English" ? "Search by Title" : "शीर्षक द्वारा खोज"
                }
              />
              <AiOutlineSearch
                size={20}
                className="absolute right-3"
                color="gray"
              />
            </div>
            <div className="space-x-5 text-gray">
              <button
                onClick={handleClick}
                className="px-6 py-2 rounded-md bg-lgray dark-btn"
              >
                {lang}
              </button>
              {views ? (
                <Link to="/">
                  <button
                    onClick={() => setViews(!views)}
                    className="px-6 py-2 rounded-md bg-lgray  dark-btn"
                  >
                    {lang !== "English" ? "Normal View" : "भिउ"}
                  </button>
                </Link>
              ) : (
                <Link to="/compact">
                  <button
                    onClick={() => setViews(!views)}
                    className="px-6 py-2 rounded-md bg-lgray  dark-btn"
                  >
                    {lang !== "English" ? "Compact View" : "कम्प्याक्ट भिउ"}
                  </button>
                </Link>
              )}
            </div>
          </div>

          {/* right side icons */}
          <div className="flex justify-center items-center  space-x-5">
            <img className="text-white" src={ad_logo} alt="" />
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
              <h1>{lang !== "English" ? "Login" : "लग-इन"}</h1>
            </Link>
          </div>
        </div>
      </div>
      <ThemeProvider.Provider value={lang}>{children}</ThemeProvider.Provider>
    </>
  );
};

export default Navbar;
