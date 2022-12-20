import React, { useContext } from "react";
import SideCard from "../../images/sidebar/SportsCard.svg";
import Forex from "../../images/sidebar/forex.svg";
import FakeThumb from "./FakeThumb";
import { ThemeProvider } from "./Navbar";
const SportsNews = () => {
  const lang = useContext(ThemeProvider);
  return (
    <div className="px-8 sticky top-0 overflow-y-scroll h-screen py-10 bg-lgray dark-btn  ">
      <div className="flex  justify-between items-center ">
        <h1 className="text-lg font-semibold dark-text">
          {" "}
          {lang !== "English" ? "Sports News" : "खेलकुद समाचार"}
        </h1>

        <h1 className="text-sm text-gray font-semibold">See All</h1>
      </div>
      <div className="w-80 space-y-3 py-5">
        <img
          className="bg-white dark-mode px-3  py-5 rounded-md"
          src={SideCard}
          alt=""
        />
        <img
          className="bg-white dark-mode px-3  py-5 rounded-md"
          src={SideCard}
          alt=""
        />
      </div>
      {/* Forex */}
      <div className="flex  justify-between items-center mb-3 ">
        <h1 className="text-lg font-semibold dark-text">
          {" "}
          {lang !== "English" ? "Forex" : "विदेशी मुद्रा"}
        </h1>

        <h1 className="text-sm text-gray font-semibold">See All</h1>
      </div>
      <div className="bg-white dark-mode  w-full py-5 rounded-md">
        <img src={Forex} alt="" />
      </div>
      <div className="flex justify-center items-center my-5 ">
        <a href="https://globalimebank.com/" className="w-full" target="_blank">
          <img
            alt=""
            className="w-full"
            src="https://ratopatis.prixacdn.net/media/Global_Ime_update_21.gif"
          />
        </a>
      </div>

      {/* Politics */}

      <div className=" mt-5">
        <div className="flex  justify-between items-center ">
          <h1 className="text-lg font-semibold dark-text">
            {lang !== "English" ? "Politics" : "राजनीति"}
          </h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <FakeThumb />
        <FakeThumb />
        <FakeThumb />
        <FakeThumb />
      </div>
      {/* International */}
      <div className="flex  justify-between items-center my-3 ">
        <h1 className="text-lg font-semibold dark-text ">
          {lang !== "English" ? "International" : "अन्तर्राष्ट्रिय"}
        </h1>

        <h1 className="text-sm text-gray font-semibold">See All</h1>
      </div>
      <div className="bg-white dark-mode  w-full py-5 rounded-md">
        <img src={Forex} alt="" />
      </div>
      <div className=" mt-5">
        <div className="flex  justify-between items-center ">
          <h1 className="text-lg font-semibold dark-text">
            {lang !== "English" ? "Technology" : "प्रविधि"}
          </h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <FakeThumb />
        <FakeThumb />
        <FakeThumb />
        <FakeThumb />
      </div>
    </div>
  );
};

export default SportsNews;
