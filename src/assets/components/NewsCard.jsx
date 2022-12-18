import NewsThumb from "../images/NewsThumb.svg";
import Author from "../images/Author.svg";
import { FiEye } from "react-icons/fi";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { TfiComment } from "react-icons/tfi";
import { HiOutlineShare } from "react-icons/hi";
import { Link } from "react-router-dom";

const Wrapper = ({ children, link }) => {
  return link ? <Link to={link}>{children}</Link> : children;
};

const NewsCard = ({
  title,
  image,
  categories,
  date,
  author,
  seenby,
  comments,
  shares,
  votes,
  link,
  id,
  setNews,
  status,
}) => {
  categories = categories || ["Sports"];
  image = image || NewsThumb;
  date = date || "December 9, 2022";
  author = author || "Rabindra Poudel";
  seenby = seenby || 2345;
  comments = comments || 12;
  shares = shares || 10;
  votes = votes || 20;

  const upvote = () => {
    setNews((news) => {
      return news.map((n) => {
        if (n.id === id) {
          if (status === "") {
            return {
              ...n,
              votes: n.votes + 1,
              status: "up",
            };
          } else if (status === "up") {
            return {
              ...n,
              votes: n.votes - 1,
              status: "",
            };
          } else {
            return {
              ...n,
              votes: n.votes + 2,
              status: "up",
            };
          }
        }

        return n;
      });
    });
  };

  const downvote = () => {
    setNews((news) => {
      return news.map((n) => {
        if (n.id === id) {
          if (status === "") {
            return {
              ...n,
              votes: n.votes - 1,
              status: "down",
            };
          } else if (status === "down") {
            return {
              ...n,
              votes: n.votes + 1,
              status: "",
            };
          } else {
            return {
              ...n,
              votes: n.votes - 2,
              status: "down",
            };
          }
        }

        return n;
      });
    });
  };

  return (
    <div className="w-full p-4">
      <div className="relative">
        <Wrapper link={link}>
          <img src={image} className="w-full" alt={title} />
        </Wrapper>
        <div className="absolute top-4 left-4 font-light flex gap-2">
          {categories.map((c, state) => {
            return (
              <span
                key={state}
                className="bg-black text-lgray px-4 py-2 rounded-lg font"
              >
                {c}
              </span>
            );
          })}
        </div>
      </div>
      <span className="text-sm text-gray ml-6">December 9, 2022</span>
      <div className="flex">
        <div className="flex flex-col mr-4 py-4 items-center gap-2">
          <button onClick={upvote}>
            <BiUpvote
              fontSize={24}
              style={{ color: status === "up" ? "red" : "" }}
            />
          </button>
          <span>{votes}</span>
          <button onClick={downvote}>
            <BiDownvote
              fontSize={24}
              style={{ color: status === "down" ? "red" : "" }}
            />
          </button>
        </div>
        <div>
          <Wrapper link={link}>
            <h2 className="text-black text-3xl font-[Quattrocento] font-bold py-4 dark:text-white">
              {title}
            </h2>
          </Wrapper>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm font">
              <img src={Author} alt="" />
              <div className="flex">
                <span className="px-4">{author}</span>
                <a className="text-red" href="#">
                  Follow
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center">
                <FiEye fontSize={18} />
                <span>{seenby}</span>
              </div>
              <div className="flex gap-2 items-center">
                <TfiComment fontSize={18} />
                <span>{comments}</span>
              </div>
              <div className="flex gap-2 items-center">
                <HiOutlineShare fontSize={18} />
                <span>{shares}</span>
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
