import axios from "axios";
import { AiFillEye } from "react-icons/ai";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";

import getUrl from "../../../utils/getUrl";
import { ThemeProvider } from "../utils/Navbar";
import sign_in from "../../images/SignIn/signin.png";
import logo_eng from "../../images/utils/ratopati_eng.svg";
import logo_nep from "../../images/utils/ratopati_nep.svg";
const Login = () => {
  const lang = useContext(ThemeProvider);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: (e) => {
      e.preventDefault();
      return axios.post(getUrl("/user/login"), { email, password });
    },
    onSuccess(data) {
      localStorage.setItem("token", data.data.token);
      navigate("/");
    },
    onError(error) {
      // TODO: handle this
    },
  });

  return (
    <div className="flex justify-between items-center overflow-y-hidden bg-white dark-btn">
      <div className="flex flex-col mx-auto justify-center  items-center w-1/3">
        <img
          src={lang !== "English" ? logo_eng : logo_nep}
          className="w-36 "
          alt="logo"
        />
        <h1 className="text-2xl font-bold mt-10 .dark-text">Welcome Back</h1>
        <form className="w-full mt-5" onSubmit={mutation.mutate}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b-2 py-3 px-3 outline-none dark-btn border-b-gray w-full"
          />
          <div className="flex border-b-2 justify-between relative items-center w-full border-b-gray">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
      <div className="py-5 px-20 flex-[0.7] bg-lgray  ">
        <img src={sign_in} className="px-2" alt="" />
      </div>
    </div>
  );
};

export default Login;
