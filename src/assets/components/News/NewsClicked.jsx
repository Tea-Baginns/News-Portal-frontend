import React, { useContext, useState } from "react";
import Trending from "../../images/Home/Trending.png";
import Sidebar from "../utils/Sidebar";
import { RxSpeakerLoud } from "react-icons/rx";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useSpeechSynthesis } from "react-speech-kit";
import { data } from "../utils/data";
import { GiPauseButton } from "react-icons/gi";
import ImageCard from "../utils/ImageCard";
import { ThemeProvider } from "../utils/Navbar";
const NewsClicked = () => {
  const lang = useContext(ThemeProvider);
  const { speak, cancel, voices } = useSpeechSynthesis();
  const [listening, setListening] = useState(false);
  const handleClick = () => {
    if (!listening) {
      setListening(true);
      if (lang === "English") {
        speak({ text: data["nepali"].text, voice: voices[10] });
      } else {
        speak({ text: data["eng"].text, voice: voices[2] });
      }
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
      <div className="px-8 py-10 mt-8   mx-auto ">
        <div className="pb-5 rounded-md bg-white dark-mode">
          <ImageCard to="#" />
          <div className="flex items-center  space-x-2">
            {!listening ? (
              <div className="ml-4 flex   items-center">
                <RxSpeakerLoud
                  className="relative left-9 text-gray  dark-text "
                  size={18}
                />
                <button
                  className="px-10 py-2 rounded-md bg-lgray text-gray dark-btn "
                  onClick={handleClick}
                >
                  Listen
                </button>
              </div>
            ) : (
              <div className="ml-4 flex  rounded items-center">
                <GiPauseButton
                  className="relative left-9 text-gray  dark-text "
                  size={18}
                />
                <button
                  className="px-10 py-2 rounded-md bg-lgray text-gray dark-btn"
                  onClick={pause}
                >
                  Pause
                </button>
              </div>
            )}
            <div className="ml-4 flex rounded  items-center">
              <AiOutlineShareAlt
                className="relative left-9 text-gray dark-text "
                size={18}
              />
              <button className="px-10 py-2 rounded-md bg-lgray text-gray dark-btn">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="text-sm mt-5 px-3 dark-text">
          <h1 className="text-3xl font-semibold mb-3 ">
            {lang !== "Nepali" ? data["nepali"].title : data["eng"].title}
          </h1>
          <h1 className="text-lg ">
            {lang !== "Nepali" ? data["nepali"].text : data["eng"].text}
          </h1>
        </div>
        {/* comments */}
        <div className="mt-5">
          <h1 className="text-lg font-semibold mb-3 dark-text">Comments</h1>
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
          <h1 className="text-lg mt-3 font-semibold dark-text">
            {" "}
            {lang !== "English" ? "Trending" : "ट्रेन्डिङ"}
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
