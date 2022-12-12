import React, { useState } from "react";
import NewsCard from "../../images/Home/NewsCard.svg";
import Trending from "../../images/Home/Trending.png";
import Sidebar from "../utils/Sidebar";
import { RxSpeakerLoud } from "react-icons/rx";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useSpeechSynthesis } from "react-speech-kit";
import { text } from "../utils/data";
import { GiPauseButton } from "react-icons/gi";
const NewsClicked = () => {
  const { speak, cancel, voices } = useSpeechSynthesis();
  const [listening, setListening] = useState(false);
  //   const msg = new SpeechSynthesisUtterance();
  //   msg.text = "Hello World";
  const handleClick = () => {
    console.log(voices);
    if (!listening) {
      setListening(true);

      speak({ text, voice: voices[2] });
    }
  };
  const pause = () => {
    if (listening) {
      setListening(false);
      cancel();
    }
  };

  return (
    <Sidebar>
      <div className="px-8 py-14  w-3/4 mx-auto mr-0 ">
        <div className="pb-5 rounded-md bg-white">
          <img className="py-2 w-full" src={NewsCard} alt="news" />
          <div className="flex items-center space-x-2">
            {!listening ? (
              <div className="ml-4 flex   items-center">
                <RxSpeakerLoud
                  className="relative left-9 text-gray  dark:text-white transition delay-100 ease-in-out "
                  size={18}
                />
                <button
                  className="px-10 py-2 rounded-md bg-lgray text-gray dark:text-white dark:bg-brown transition delay-100 ease-in-out "
                  onClick={handleClick}
                >
                  Listen
                </button>
              </div>
            ) : (
              <div className="ml-4 flex  rounded items-center">
                <GiPauseButton
                  className="relative left-9 text-gray  dark:text-white transition delay-100 ease-in-out "
                  size={18}
                />
                <button
                  className="px-10 py-2 rounded-md bg-lgray text-gray dark:text-white dark:bg-brown transition delay-100 ease-in-out"
                  onClick={pause}
                >
                  Pause
                </button>
              </div>
            )}
            <div className="ml-4 flex rounded  items-center">
              <AiOutlineShareAlt
                className="relative left-9 text-gray dark:text-white transition delay-100 ease-in-out "
                size={18}
              />
              <button className="px-10 py-2  bg-lgray text-gray dark:text-white dark:bg-brown transition delay-100 ease-in-out">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="text-sm mt-5 px-3 dark:text-white transition delay-100 ease-in-out">
          <p>{text}</p>
        </div>
        {/* comments */}
        <div className="mt-5">
          <h1 className="text-lg font-semibold mb-3 dark:text-white transition delay-100 ease-in-out">
            Comments
          </h1>
          <div>
            <textarea
              className="p-2 w-full h-32"
              placeholder="Write your comment..."
            />
            <button className="px-8  rounded-md py-2 bg-red text-white">
              Post
            </button>
          </div>
        </div>
        <div className="flex  justify-between items-center px-2">
          <h1 className="text-lg mt-3 font-semibold dark:text-white transition delay-100 ease-in-out">
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

export default NewsClicked;
