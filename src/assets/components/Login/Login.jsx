import React, { useContext, useEffect } from "react";
import sign_in from "../../images/SignIn/signin.png";
import logo_eng from "../../images/utils/ratopati_eng.svg";
import logo_nep from "../../images/utils/ratopati_nep.svg";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ThemeProvider } from "../utils/Navbar";
const Login = () => {
  const lang = useContext(ThemeProvider);

  return (
    <div className="flex justify-between items-center overflow-y-hidden bg-white dark-btn">
      <div className="flex flex-col mx-auto justify-center  items-center w-1/3">
        <img
          src={lang !== "English" ? logo_eng : logo_nep}
          className="w-36 "
          alt="logo"
        />
        <h1 className="text-2xl font-bold mt-10 .dark-text">Welcome Back</h1>
        <form className="w-full mt-5">
          <input
            type="text"
            placeholder="Email"
            className="border-b-2 py-3 px-3 outline-none dark-btn border-b-gray w-full"
          />
          <div className="flex border-b-2 justify-between relative items-center w-full border-b-gray">
            <input
              type="password"
              placeholder="Password"
              className=" py-3 px-3 outline-none  w-full dark-btn"
            />
            <AiFillEye
              size="30"
              className="dark-btn text-gray w-max absolute right-5"
            />
          </div>

          <Link to="/profile">
            <h1 className="w-full mt-5 bg-red text-white py-3 text-center rounded-md">
              Login
            </h1>
          </Link>
          <Link to="/signup">
            <h1 className="w-11/12 mt-5 text-center text-gray">
              Don't have an account?
              <span className="text-red"> Sign Up</span>
            </h1>
          </Link>
        </form>
      </div>
      <div className="   py-5 px-20 flex-[0.7] bg-lgray  ">
        <img src={sign_in} className="px-2" alt="" />
      </div>
    </div>
  );
};

export default Login;
