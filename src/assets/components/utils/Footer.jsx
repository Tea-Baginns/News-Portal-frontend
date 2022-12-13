import React from "react";
import logo_eng from "../../images/utils/ratopati_eng.svg";

const Footer = () => {
  return (
    <div className="py-12 space-x-36 flex   justify-center bg-white dark:bg-black dark-text">
      <div className="">
        <h1 className="mb-3">
          Editor-in-Chief: Jiwendra Simkhada <br />
          Chairman: Bijaya Sharma
        </h1>
        <h1 className="">
          KUPONDOLE HEIGHT, LALITPUR <br />
          01-5010630, 01-5010671 <br />
          ratopati@gmail.com info@ratopati.com <br />{" "}
          marketing.ratopati@gmail.com <br />
          article.ratopati@gmail.com
          <br /> artha.ratopati@gmail.com
        </h1>
      </div>
      <img src={logo_eng} alt="" className="w-40" />
    </div>
  );
};

export default Footer;
