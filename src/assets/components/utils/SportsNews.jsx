import React from "react";
import SideCard from "../../images/sidebar/SportsCard.svg";
import Forex from "../../images/sidebar/forex.svg";
import FakeThumb from "./FakeThumb";
const SportsNews = () => {
  return (
    <div className="px-8 py-6 w-full  ">
      <div className="flex  justify-between items-center ">
        <h1 className="text-lg font-semibold dark-text">Sports News</h1>

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
        <h1 className="text-lg font-semibold dark-text">Forex</h1>

        <h1 className="text-sm text-gray font-semibold">See All</h1>
      </div>
      <div className="bg-white dark-mode  w-full py-5 rounded-md">
        <img src={Forex} alt="" />
      </div>
      <div className=" mt-5">
        <div className="flex  justify-between items-center ">
          <h1 className="text-lg font-semibold dark-text">Politics</h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <FakeThumb />
        <FakeThumb />
        <FakeThumb />
        <FakeThumb />
      </div>
      {/* International */}
      <div className="flex  justify-between items-center my-3 ">
        <h1 className="text-lg font-semibold dark-text ">International</h1>

        <h1 className="text-sm text-gray font-semibold">See All</h1>
      </div>
      <div className="bg-white dark-mode  w-full py-5 rounded-md">
        <img src={Forex} alt="" />
      </div>
      <div className=" mt-5">
        <div className="flex  justify-between items-center ">
          <h1 className="text-lg font-semibold dark-text">Politics</h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <FakeThumb />
        <FakeThumb />
        <FakeThumb />
        <FakeThumb />
      </div>
      {/* Technology */}
      <div className="flex  justify-between items-center my-3 ">
        <h1 className="text-lg font-semibold dark-text ">Technology</h1>

        <h1 className="text-sm text-gray font-semibold">See All</h1>
      </div>
      <div className="bg-white dark-mode  w-full py-5 rounded-md">
        <img src={Forex} alt="" />
      </div>
      <div className=" mt-5">
        <div className="flex  justify-between items-center ">
          <h1 className="text-lg font-semibold dark-text">Politics</h1>

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
