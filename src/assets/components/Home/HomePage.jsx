import React from "react";

import Trending from "../../images/Home/Trending.png";
import ImageCard from "../utils/ImageCard";
import Sidebar from "../utils/Sidebar";

const HomePage = () => {
  return (
    <Sidebar>
      <div className="px-8 py-6  w-3/4 mx-auto mr-0 ">
        <div className="flex  justify-between items-center px-2">
          <h1 className="text-lg font-semibold dark-text">Red Headlines</h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <ImageCard to="/news" />
        {/* Trending */}
        <div className="flex  justify-between items-center px-2">
          <h1 className="text-lg mt-3 dark-text font-semibold">Trending</h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <img className="py-5 w-96 " src={Trending} alt="news" />
          <img className="py-5 w-96 " src={Trending} alt="news" />
        </div>
        {/* You Might Be Interested In */}
        <h1 className="text-lg font-semibold dark-text">
          You Might Be Interested In{" "}
        </h1>
        <div className="flex flex-col justify-center  ">
          <>
            <ImageCard to="/news" />
            <ImageCard to="/news" />
            <ImageCard to="/news" />
            <ImageCard to="/news" />
          </>
        </div>
        <div className="flex  justify-between items-center">
          <h1 className="text-lg font-semibold dark-text">Trending</h1>
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
