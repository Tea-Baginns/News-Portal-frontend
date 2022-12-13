import React from "react";
import { useContext } from "react";

import Trending from "../../images/Home/Trending.png";
import ImageCard from "../utils/ImageCard";
import { ThemeProvider } from "../utils/Navbar";
import { data } from "../utils/data";
import Sidebar from "../utils/Sidebar";

const HomePage = () => {
  const lang = useContext(ThemeProvider);
  return (
    <Sidebar>
      <div className="px-8 py-10  mx-auto  ">
        <div className="flex  justify-between items-center px-2">
          <h1 className="text-lg font-semibold dark-text">
            {lang !== "English" ? "Red Headlines" : "रातो तातो खबर"}
          </h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <ImageCard link="/news" />
        {/* Trending */}
        <div className="flex  justify-between items-center px-2">
          <h1 className="text-lg mt-3 dark-text font-semibold">
            {" "}
            {lang !== "English" ? "Trending" : "ट्रेन्डिङ"}
          </h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <img className="py-5 w-96 " src={Trending} alt="news" />
          <img className="py-5 w-96 " src={Trending} alt="news" />
        </div>
        <div className="flex justify-around py-5 items-center">
          <a href="http://www.civilbank.com.np/" target="_blank">
            <img
              alt=""
              className="animated fadeIn mx-auto"
              data-src="https://ratopatis.prixacdn.net/media/civil_bank_nov_to_jan.gif"
              src="https://ratopatis.prixacdn.net/media/civil_bank_nov_to_jan.gif"
            />
          </a>
          <a href="https://www.facebook.com/yeticarpetnepal" target="_blank">
            <img
              alt=""
              class="animated fadeIn"
              data-src="https://ratopatis.prixacdn.net/media/Yeti-Carpet-1_1.gif"
              src="https://ratopatis.prixacdn.net/media/Yeti-Carpet-1_1.gif"
            />
          </a>
        </div>
        {/* You Might Be Interested In */}
        <h1 className="text-lg font-semibold dark-text">
          {lang !== "English"
            ? "You Might Be Interested In"
            : "तपाईंलाई रुचि हुन सक्छ"}{" "}
        </h1>
        <div className="flex flex-col justify-center  ">
          <>
            <ImageCard link="/news" />
            <ImageCard link="/news" />
            <ImageCard link="/news" />
            <ImageCard link="/news" />
          </>
        </div>
        <div className="flex  justify-between items-center">
          <h1 className="text-lg font-semibold dark-text">
            {" "}
            {lang !== "English" ? "Ratopati Video" : "रातोपाटी भिडियो"}{" "}
          </h1>
          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <img className="py-5 w-96 " src={Trending} alt="news" />
          <img className="py-5 w-96 " src={Trending} alt="news" />
        </div>
      </div>
    </Sidebar>
  );
};

export default HomePage;
