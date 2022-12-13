import { Link } from "react-router-dom";
import NewsCard from "../../images/Home/NewsCard.svg";
const ImageCard = ({ link }) => {
  return (
    <Link to={link} className="w-full mb-5">
      <img
        className="w-full bg-white dark-mode rounded-md p-3"
        src={NewsCard}
        alt="news"
      />
    </Link>
  );
};
export default ImageCard;
