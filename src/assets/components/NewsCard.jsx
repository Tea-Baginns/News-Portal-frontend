import NewsThumb from "../images/NewsThumb.svg";
import Author from "../images/Author.svg";
import { FiEye } from "react-icons/fi";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { TfiComment } from "react-icons/tfi";
import { HiOutlineShare } from "react-icons/hi";

const NewsCard = () => {
  return (
    <div className="w-full p-4">
      <div className="relative">
        <img src={NewsThumb} className="w-full" alt="" />
        <div className="absolute top-4 left-4 font-light">
          <span className="bg-black text-lgray px-4 py-2 rounded-lg font">
            Sports
          </span>
        </div>
      </div>
      <span className="text-sm text-gray ml-6">December 9, 2022</span>
      <div className="flex">
        <div className="flex flex-col mr-4 py-4 items-center gap-2">
          <button>
            <BiUpvote fontSize={24} />
          </button>
          <span>67</span>
          <button>
            <BiDownvote fontSize={24} />
          </button>
        </div>
        <div>
          <h2 className="text-black text-3xl font-[Quattrocento] font-bold py-4 dark:text-white">
            Recampthon organized by Leapfrog boasts 13 amazing teams
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm font">
              <img src={Author} alt="" />
              <span className="px-4">Rabindra Poudel</span>
              <a className="text-red" href="#">
                Follow
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center">
                <FiEye fontSize={18} />
                <span>2400</span>
              </div>
              <div className="flex gap-2 items-center">
                <TfiComment fontSize={18} />
                <span>20</span>
              </div>
              <div className="flex gap-2 items-center">
                <HiOutlineShare fontSize={18} />
                <span>12</span>
              </div>
              <button className="mr-2 bg-lgray px-2 py-1 rounded dark:text-black">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
