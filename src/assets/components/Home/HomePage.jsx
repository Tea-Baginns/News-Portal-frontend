import React, { useState } from "react";
import { useContext } from "react";

import Trending from "../../images/Home/Trending.png";
import ImageCard from "../utils/ImageCard";
import { ThemeProvider } from "../utils/Navbar";
import { data } from "../utils/data";
import Sidebar from "../utils/Sidebar";
import NewsCard from "../NewsCard";
import { Link } from "react-router-dom";

import staticDB from "../../../utils/db";

const HomePage = () => {
  const lang = useContext(ThemeProvider);
  const [news, setNews] = useState(staticDB);

  return (
    <Sidebar>
      <div className="px-8 py-10  mx-auto  ">
        <div className="flex  justify-between items-center px-2">
          <h1 className="text-lg font-semibold dark-text">
            {lang !== "English" ? "Red Headlines" : "रातो तातो खबर"}
          </h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <div className="bg-white dark:bg-black text-black dark:text-white">
          <NewsCard
            title={lang !== "English" ? news[0].title_en : news[0].title_np}
            setNews={setNews}
            image={news[0].image}
            id={news[0].id}
            votes={news[0].votes}
            link="/news"
            author={news[0].author}
            status={news[0].status}
          />
        </div>
        {/* Trending */}
        <div className="flex  justify-between items-center px-2">
          <h1 className="text-lg mt-3 dark-text font-semibold">
            {" "}
            {lang !== "English" ? "Trending" : "ट्रेन्डिङ"}
          </h1>

          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <img className="py-5 w-1/2 " src={Trending} alt="news" />
          <img className="py-5 w-1/2 " src={Trending} alt="news" />
        </div>
        <div className="flex justify-around py-5 items-center">
          <a href="http://www.civilbank.com.np/" target="_blank">
            <img
              alt=""
              className="animated fadeIn mx-auto"
              data-src="https://ratopatis.prixacdn.net/media/civil_bank_nov_to_jan.gif"
              src="https://ratopatis.prixacdn.net/media/civil_bank_nov_to_jan.gif"
            />
          </a>
          <a href="https://www.facebook.com/yeticarpetnepal" target="_blank">
            <img
              alt=""
              className="animated fadeIn"
              data-src="https://ratopatis.prixacdn.net/media/Yeti-Carpet-1_1.gif"
              src="https://ratopatis.prixacdn.net/media/Yeti-Carpet-1_1.gif"
            />
          </a>
        </div>
        {/* You Might Be Interested In */}
        <h1 className="text-lg font-semibold dark-text">
          {lang !== "English"
            ? "You Might Be Interested In"
            : "तपाईंलाई रुचि हुन सक्छ"}{" "}
        </h1>
        <div className="flex flex-col justify-center gap-10">
          {news.slice(1).map((n) => {
            return (
              <div
                key={n.id}
                className="bg-white dark:bg-black text-black dark:text-white"
              >
                <NewsCard
                  setNews={setNews}
                  title={lang !== "English" ? n.title_en : n.title_np}
                  image={n.image}
                  author={n.author}
                  votes={n.votes}
                  link="/news"
                  status={n.status}
                  id={n.id}
                />
              </div>
            );
          })}
          <Link to="/news">
            <div className="bg-white dark:bg-black text-black dark:text-white">
              <NewsCard
                title={
                  lang !== "English"
                    ? "Revampthon organized by Leapfrog boasts 13 amazing teams"
                    : "Leapfrog द्वारा आयोजित Recampton मा 13 अद्भुत टोलीहरू गर्व गर्दछ"
                }
              />
            </div>
          </Link>
          <Link to="/news">
            <div className="bg-white dark:bg-black text-black dark:text-white">
              <NewsCard
                title={
                  lang !== "English"
                    ? "Revampthon organized by Leapfrog boasts 13 amazing teams"
                    : "Leapfrog द्वारा आयोजित Recampton मा 13 अद्भुत टोलीहरू गर्व गर्दछ"
                }
              />
            </div>
          </Link>
          <Link to="/news">
            <div className="bg-white dark:bg-black text-black dark:text-white">
              <NewsCard
                title={
                  lang !== "English"
                    ? "Revampthon organized by Leapfrog boasts 13 amazing teams"
                    : "Leapfrog द्वारा आयोजित Recampton मा 13 अद्भुत टोलीहरू गर्व गर्दछ"
                }
              />
            </div>
          </Link>
          <Link to="/news">
            <div className="bg-white dark:bg-black text-black dark:text-white">
              <NewsCard
                title={
                  lang !== "English"
                    ? "Revampthon organized by Leapfrog boasts 13 amazing teams"
                    : "Leapfrog द्वारा आयोजित Recampton मा 13 अद्भुत टोलीहरू गर्व गर्दछ"
                }
              />
            </div>
          </Link>
        </div>
        <div className="flex  justify-between items-center">
          <h1 className="text-lg font-semibold dark-text">
            {" "}
            {lang !== "English" ? "Ratopati Video" : "रातोपाटी भिडियो"}{" "}
          </h1>
          <h1 className="text-sm text-gray font-semibold">See All</h1>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <img className="py-5 w-1/2 " src={Trending} alt="news" />
          <img className="py-5 w-1/2 " src={Trending} alt="news" />
        </div>
      </div>
    </Sidebar>
  );
};

export default HomePage;
