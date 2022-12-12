import React from "react";
import { Link } from "react-router-dom";
import NewsCard from "../../images/Home/NewsCard.svg";
import Trending from "../../images/Home/Trending.png";
import Sidebar from "../utils/Sidebar";
const HomePage = () => {
  return (
    <Sidebar>
      <div className="px-8 py-6  w-3/4 mx-auto mr-0 ">
        <div className="flex  justify-between items-center px-2">
          <h1 className="text-lg font-semibold dark:text-white transition delay-100 ease-in-out">
            Red Headlines
          </h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <Link to="/news">
          <img className="py-2 w-full" src={NewsCard} alt="news" />
        </Link>
        {/* Trending */}
        <div className="flex  justify-between items-center px-2">
          <h1 className="text-lg mt-3 font-semibold">Trending</h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <img className="py-5 w-96 " src={Trending} alt="news" />
          <img className="py-5 w-96 " src={Trending} alt="news" />
        </div>
        {/* You Might Be Interested In */}
        <h1 className="text-lg font-semibold dark:text-white transition delay-100 ease-in-out">
          You Might Be Interested In{" "}
        </h1>
        <div className="flex flex-col justify-center items-center ">
          <img className="py-5 w-full" src={NewsCard} alt="news" />
          <img className="py-5 w-full" src={NewsCard} alt="news" />
          <img className="py-5 w-full" src={NewsCard} alt="news" />
          <img className="py-5 w-full" src={NewsCard} alt="news" />
          <img className="py-5 w-full" src={NewsCard} alt="news" />
        </div>
        <div className="flex  justify-between items-center">
          <h1 className="text-lg font-semibold dark:text-white transition delay-100 ease-in-out">
            Trending
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
