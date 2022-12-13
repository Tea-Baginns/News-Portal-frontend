import React from "react";
import profile_img from "../../images/Profile/profile.png";
import saved_posts from "../../images/Profile/posts.svg";
import { AiFillEdit } from "react-icons/ai";
const Profile = () => {
  return (
    <div className="flex justify-center space-x-8 px-16 py-8 ">
      <div className="">
        <div className="flex  place-items-end space-x-5">
          <img src={profile_img} className="w-40" />
          <div className="flex flex-col  dark-text ">
            <h1 className="text-xl font-semibold ">Debesh Shankhi</h1>
            <h1 className="text-md ">Reader</h1>
            <h1 className="text-sm text-gray">Joined December 11,2022</h1>
          </div>
        </div>
        <div className="flex flex-col bg-white mt-5 rounded-md dark:text-white dark:bg-black transition delay-100 ease-in-out">
          <div className="flex justify-between w-5/6 mx-auto p-3">
            <h1 className="font-semibold text-lg">Details</h1>
            <div className="flex w-full justify-center space-x-2 items-center">
              <h2 className="text-red text-md">Edit</h2>
              <AiFillEdit color="red" />
            </div>
          </div>
          <div className="flex justify-between w-5/6 mx-auto p-3">
            <h1 className="text-gray">Email</h1>
            <h2 className=" text-md w-1/2">debeshshankhi@example.com</h2>
          </div>
          <div className="flex justify-between w-5/6 mx-auto p-3">
            <h1 className="text-gray">Phone</h1>
            <h2 className=" text-md w-1/2">9812345678</h2>
          </div>
          <div className="flex justify-between w-5/6 mx-auto p-3">
            <h1 className="text-gray">Date of Birth</h1>
            <h2 className=" text-md w-1/2">2022-11-11</h2>
          </div>
          <div className="flex justify-between w-5/6 mx-auto p-3">
            <h1 className="text-gray">Home Address</h1>
            <h2 className=" text-md w-1/2">Home Address</h2>
          </div>
        </div>
        <div className="px-5 my-5 py-3  bg-white rounded-md dark-mode ">
          <div className="flex justify-between w-5/6 mx-auto p-3">
            <h1 className="font-semibold text-lg">Interested Topics</h1>
            <h2 className="text-red text-md">Add +</h2>
          </div>
          <div className="flex justify-center space-x-4 py-2  items-center">
            <button className="px-6 py-2 rounded-md bg-lgray  text-gray dark-btn">
              Finance
            </button>
            <button className="px-6 py-2 rounded-md bg-lgray text-gray dark-btn">
              Technology
            </button>
            <button className="px-6 py-2 rounded-md bg-lgray text-gray dark-btn">
              Sports
            </button>
            <button className="px-6 py-2 rounded-md bg-lgray text-gray dark-btn">
              Esports
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2">
        <div className="flex  justify-between items-center px-2">
          <h1 className="text-lg mt-3 font-semibold  dark-text">
            Activity Log
          </h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <div className="px-8 my-5 py-5 bg-white text-gray rounded-md dark:text-white dark:bg-black transition delay-100 ease-in-out">
          <h1 className="font-semibold text-sm">Dec 11, 2022</h1>
          <div className="flex flex-col mt-2">
            <h1>You commented on “Amazing News wowowowow amazing”</h1>
            <h1>You commented on “Amazing News wowowowow amazing”</h1>
            <h1>You commented on “Amazing News wowowowow amazing”</h1>
            <h1>You commented on “Amazing News wowowowow amazing”</h1>
            <h1>You commented on “Amazing News wowowowow amazing”</h1>
          </div>
          <h1 className="font-semibold text-sm mt-3">Dec 9, 2022</h1>
          <div className="flex flex-col mt-2">
            <h1>
              You liked on “Amazing News wowowowow amazing and Amazing wowowo”
            </h1>
            <h1>
              You liked on “Amazing News wowowowow amazing and Amazing wowowo”
            </h1>
            <h1>
              You liked on “Amazing News wowowowow amazing and Amazing wowowo”
            </h1>
            <h1>
              You liked on “Amazing News wowowowow amazing and Amazing wowowo”
            </h1>
            <h1>
              You liked on “Amazing News wowowowow amazing and Amazing wowowo”
            </h1>
          </div>
        </div>
        <div className="flex  justify-between items-center px-2">
          <h1 className="text-lg mt-3 font-semibold dark-text">Saved Posts</h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <div className="px-4 my-5 w-full flex flex-col py-5 space-y-6 bg-white dark-mode rounded-md text-gray">
          <img src={saved_posts} alt="" />
          <img src={saved_posts} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
