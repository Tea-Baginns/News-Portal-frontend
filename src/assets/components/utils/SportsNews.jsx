import React from "react";
import SideCard from "../../images/sidebar/SportsCard.png";
import Forex from "../../images/sidebar/forex.svg";
import Ran1 from "../../images/sidebar/Rectangle 15.png";
const SportsNews = () => {
  return (
    <div className="px-8 py-6 w-full  ">
      <div className="flex  justify-between items-center ">
        <h1 className="text-lg font-semibold dark:text-white transition delay-100 ease-in-out">
          Sports News
        </h1>

        <h1 className="text-sm text-gray font-semibold">See All</h1>
      </div>
      <div className="w-80 space-y-3 py-5">
        <img src={SideCard} alt="" />
        <img src={SideCard} alt="" />
      </div>
      {/* Forex */}
      <div className="flex  justify-between items-center mb-3 ">
        <h1 className="text-lg font-semibold dark:text-white transition delay-100 ease-in-out">
          Forex
        </h1>

        <h1 className="text-sm text-gray font-semibold">See All</h1>
      </div>
      <div className="bg-white px-2">
        <img src={Forex} alt="" />
      </div>
      <div className=" mt-5">
        <div className="flex  justify-between items-center ">
          <h1 className="text-lg font-semibold dark:text-white transition delay-100 ease-in-out">
            Politics
          </h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <div className="flex mt-4 items-center">
          <img src={Ran1} className="w-20 mr-5" alt="" />
          <h1>Lorem Ipsum</h1>
        </div>
        <div className="flex mt-4 items-center">
          <img src={Ran1} className="w-20 mr-5" alt="" />
          <h1>Lorem Ipsum</h1>
        </div>
        <div className="flex mt-4 items-center">
          <img src={Ran1} className="w-20 mr-5" alt="" />
          <h1>Lorem Ipsum</h1>
        </div>
        <div className="flex mt-4 items-center">
          <img src={Ran1} className="w-20 mr-5" alt="" />
          <h1>Lorem Ipsum</h1>
        </div>
      </div>
      {/* International */}
      <div className="flex  justify-between items-center my-3 ">
        <h1 className="text-lg font-semibold dark:text-white transition delay-100 ease-in-out ">
          International
        </h1>

        <h1 className="text-sm text-gray font-semibold">See All</h1>
      </div>
      <div className="bg-white px-2">
        <img src={Forex} alt="" />
      </div>
      <div className=" mt-5">
        <div className="flex  justify-between items-center ">
          <h1 className="text-lg font-semibold dark:text-white transition delay-100 ease-in-out">
            Politics
          </h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <div className="flex mt-4 items-center">
          <img src={Ran1} className="w-20 mr-5" alt="" />
          <h1>Lorem Ipsum</h1>
        </div>
        <div className="flex mt-4 items-center">
          <img src={Ran1} className="w-20 mr-5" alt="" />
          <h1>Lorem Ipsum</h1>
        </div>
        <div className="flex mt-4 items-center">
          <img src={Ran1} className="w-20 mr-5" alt="" />
          <h1>Lorem Ipsum</h1>
        </div>
        <div className="flex mt-4 items-center">
          <img src={Ran1} className="w-20 mr-5" alt="" />
          <h1>Lorem Ipsum</h1>
        </div>
      </div>
      {/* Technology */}
      <div className="flex  justify-between items-center my-3 ">
        <h1 className="text-lg font-semibold dark:text-white transition delay-100 ease-in-out ">
          Technology
        </h1>

        <h1 className="text-sm text-gray font-semibold">See All</h1>
      </div>
      <div className="bg-white px-2">
        <img src={Forex} alt="" />
      </div>
      <div className=" mt-5">
        <div className="flex  justify-between items-center ">
          <h1 className="text-lg font-semibold dark:text-white transition delay-100 ease-in-out">
            Politics
          </h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <div className="flex mt-4 items-center">
          <img src={Ran1} className="w-20 mr-5" alt="" />
          <h1>Lorem Ipsum</h1>
        </div>
        <div className="flex mt-4 items-center">
          <img src={Ran1} className="w-20 mr-5" alt="" />
          <h1>Lorem Ipsum</h1>
        </div>
        <div className="flex mt-4 items-center">
          <img src={Ran1} className="w-20 mr-5" alt="" />
          <h1>Lorem Ipsum</h1>
        </div>
        <div className="flex mt-4 items-center">
          <img src={Ran1} className="w-20 mr-5" alt="" />
          <h1>Lorem Ipsum</h1>
        </div>
      </div>
    </div>
  );
};

export default SportsNews;
