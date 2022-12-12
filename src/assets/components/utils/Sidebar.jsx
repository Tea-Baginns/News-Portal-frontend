import React from "react";
import flag from "../../images/sidebar/nepal_flag.svg";
import earth from "../../images/sidebar/earth.svg";
import SportsNews from "./SportsNews";
const Sidebar = ({ children }) => {
  return (
    <div className="flex  justify-between    ">
      <div className="flex-col fixed left-0 px-8 py-6 ">
        {/* today section */}
        <section className="mb-2">
          <h1 className="text-lg font-semibold dark:text-white transition delay-100 ease-in-out">
            Today
          </h1>
          <div className=" mt-2 bg-white w-52 rounded-md flex flex-col">
            <div className="flex items-center px-5 mb-3 mt-3 justify-center space-x-3">
              <img src={flag} className="" />
              <h1 className="text-sm">Mangsir 21, 2079</h1>
            </div>
            <div className="flex items-center px-5 mb-3 justify-center space-x-3">
              <img src={earth} className="" />
              <h1 className="text-sm">December 9, 2022</h1>
            </div>
          </div>
        </section>
        {/* filter section */}
        <section className="mt-3">
          <h1 className="text-lg font-semibold dark:text-white transition delay-100 ease-in-out">
            Filter
          </h1>
          <div className=" py-2 bg-white w-52 rounded-md text-sm mt-2 flex flex-col">
            <h1 className="px-5 py-2 text-gray">Followed</h1>
            <h1 className="px-5 py-2 text-gray">Trending</h1>
            <h1 className="px-5 py-2 text-gray">Politics</h1>
            <h1 className="px-5 py-2 text-gray">Nation</h1>
            <h1 className="px-5 py-2 text-gray">Sports</h1>
            <h1 className="px-5 py-2 text-gray">Technology</h1>
            <h1 className="px-5 py-2 text-gray">Health</h1>
            <h1 className="px-5 py-2 text-gray">Security</h1>
            <h1 className="px-5 py-2 text-gray">Business</h1>
            <h1 className="px-5 py-2 text-gray">Finance</h1>
            <h1 className="px-5 py-2 text-gray">Media</h1>
            <h1 className="px-5 py-2 text-gray">Experts</h1>
          </div>
        </section>
      </div>
      <div className="flex flex-[0.8] w-full ">{children}</div>
      <div className="flex flex-[0.2] w-full  ">
        <SportsNews />
      </div>
    </div>
  );
};

export default Sidebar;
