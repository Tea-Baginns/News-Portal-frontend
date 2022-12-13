import React, { useContext } from "react";
import saved_posts from "../../images/Profile/posts.svg";

import Trending from "../../images/Home/Trending.png";
import ImageCard from "../utils/ImageCard";
import Sidebar from "../utils/Sidebar";
import { ThemeProvider } from "../utils/Navbar";
const CompactCard = () => {
  return (
    <div className=" my-5 w-full flex flex-col  space-y-6  rounded-md text-gray">
      <img
        src={saved_posts}
        alt=""
        className="bg-white dark-mode rounded-md px-5 py-5"
      />
    </div>
  );
};
const CompactView = () => {
  const lang = useContext(ThemeProvider);

  return (
    <Sidebar>
      <div className="px-8 py-10  mx-auto">
        <div className="flex  justify-between items-center px-2">
          <h1 className="text-lg font-semibold dark-text">
            {" "}
            {lang !== "English" ? "Red Headlines" : "रातो तातो खबर"}
          </h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>{" "}
        <CompactCard />
        <CompactCard />
        <CompactCard />
        <CompactCard />
        {/* Trending */}
        <div className="flex  justify-between items-center px-2">
          <h1 className="text-lg mt-3 dark-text font-semibold">
            {" "}
            {lang !== "English" ? "Trending" : "ट्रेन्डिङ"}
          </h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <CompactCard />
        <CompactCard />
        <CompactCard />
        {/* You Might Be Interested In */}
        <h1 className="text-lg font-semibold dark-text">
          {lang !== "English"
            ? "You Might Be Interested In"
            : "तपाईंलाई रुचि हुन सक्छ"}{" "}
        </h1>
        <div className="flex flex-col justify-center  ">
          <CompactCard />
          <CompactCard />
          <CompactCard />
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

export default CompactView;
