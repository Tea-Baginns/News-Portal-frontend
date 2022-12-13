import React from "react";
import flag from "../../images/sidebar/nepal_flag.svg";
import earth from "../../images/sidebar/earth.svg";
import SportsNews from "./SportsNews";
import { useContext } from "react";
import { ThemeProvider } from "./Navbar";
import { data } from "../utils/data";

const Sidebar = ({ children }) => {
  const lang = useContext(ThemeProvider);
  return (
    <div className="flex  justify-between    ">
      <div className="flex-col sticky top-24  h-full px-8 py-6 ">
        {/* today section */}
        <section className="mb-2">
          <h1 className="text-lg font-semibold dark-text">
            {lang !== "English" ? "Today" : "आज"}
          </h1>
          <div className=" mt-2 bg-white w-52 dark-mode rounded-md flex  flex-col">
            <div className="flex items-center px-5 mb-3 mt-3  justify-center space-x-3">
              <img src={flag} className="" />
              <h1 className="text-sm">
                {" "}
                {lang !== "English" ? "Mangsir 21, 2079" : "मङ्सिर २१, २०७९"}
              </h1>
            </div>
            <div className="flex items-center px-5 mb-3 justify-center space-x-3">
              <img src={earth} className="" />
              <h1 className="text-sm">December 9, 2022</h1>
            </div>
          </div>
        </section>
        {/* filter section */}
        <section className="mt-3">
          <h1 className="text-lg font-semibold dark-text">
            {lang !== "English" ? "Filter" : "फिल्टर"}
          </h1>
          <div className=" py-2 bg-white w-52 text-gray dark-mode rounded-md text-sm mt-2 flex flex-col">
            {lang !== "English"
              ? data["eng"].filters.map((value, state) => (
                  <h1 className="px-5 py-2 " key={state}>
                    {value}
                  </h1>
                ))
              : data["nepali"].filters.map((value, state) => (
                  <h1 className="px-5 py-2 " key={state}>
                    {value}
                  </h1>
                ))}
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
