import React from "react";
import sign_in from "../../images/SignIn/signin.png";
import logo_eng from "../../images/utils/ratopati_eng.svg";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="flex justify-between items-center overflow-y-hidden bg-white dark:bg-black transition delay-100 ease-in-out">
      <div className="flex flex-col mx-auto justify-center  items-center w-1/3">
        <img src={logo_eng} className="w-36 " alt="logo" />
        <h1 className="text-2xl font-bold mt-10 dark:text-white transition delay-100 ease-in-out">
          Create an Account
        </h1>
        <form className="mt-5">
          <input
            type="text"
            placeholder="Full Name"
            className="border-b-2 py-3 px-3 outline-none border-b-gray w-full dark:bg-black transition delay-100 ease-in-out"
          />
          <input
            type="text"
            placeholder="Email"
            className="border-b-2 py-3 px-3 outline-none border-b-gray w-full dark:bg-black transition delay-100 ease-in-out"
          />
          <div className="flex border-b-2 justify-between items-center border-b-gray">
            <input
              type="password"
              placeholder="Password"
              className=" py-3 px-3 outline-none  w-full dark:bg-black transition delay-100 ease-in-out"
            />
            <AiFillEye size="30" color={"gray"} />
          </div>
          <div className="flex border-b-2 justify-between items-center border-b-gray">
            <input
              type="password"
              placeholder="Confirm Password"
              className=" py-3 px-3 outline-none  w-full dark:bg-black transition delay-100 ease-in-out"
            />
            <AiFillEye size="30" color={"gray"} />
          </div>
          <div className="flex border-b-2 justify-between items-center border-b-gray">
            <input
              type="password"
              placeholder="I am a"
              className=" py-3 px-3 outline-none  w-full dark:bg-black transition delay-100 ease-in-out"
            />
            <div className="flex justify-center items-center  accent-gray dark:text-gray transition delay-100 ease-in-out space-x-2">
              <div className="flex justify-center items-center space-x-3">
                <input
                  type="radio"
                  name="name"
                  value="Reader"
                  checked
                  className=""
                />
                <label>Reader</label>
              </div>
              <div className="flex justify-center items-center space-x-3">
                <input type="radio" name="name" value="Journalist" />
                <label>Journalist</label>
              </div>
            </div>
          </div>
          <h1 className="w-11/12 mt-5 text-gray">
            By creating an account, you agree to Ratopati’s{" "}
            <span className="text-red">
              User Agreement, Privacy Policy, and Cookie Policy.{" "}
            </span>
          </h1>
          <button className="w-full mt-5 bg-red text-white py-3 rounded-md">
            Submit
          </button>
          <Link to="/login">
            <h1 className="w-11/12 mt-5 text-center text-gray">
              Already have an account?
              <span className="text-red"> Log In</span>
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

export default Signup;
