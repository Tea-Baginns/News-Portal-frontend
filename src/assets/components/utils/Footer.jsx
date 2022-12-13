import React, { useContext } from "react";
import logo_eng from "../../images/utils/ratopati_eng.svg";
import logo_nep from "../../images/utils/ratopati_nep.svg";
import { ThemeProvider } from "./Navbar";

const Footer = () => {
  const lang = useContext(ThemeProvider);

  return (
    <div className="">
      <div
        className={`flex py-20 text-center  flex-col h-96 dark-btn  bg-lgray items-center justify-center mx-auto`}
      >
        <h1 className="text-3xl font-bold font-title w-1/2">
          {lang !== "English"
            ? `GET SUBSCRIPTION FOR A COMPLETELY AD-FREE EXPERIENCE AND MORE FEATURES`
            : "पूर्ण रूपमा विज्ञापन-मुक्त अनुभव र थप सुविधाहरूको लागि सदस्यता प्राप्त गर्नुहोस्"}
        </h1>
        <div className="flex my-5 items-center justify-between">
          <button className="text-white bg-red px-8 py-3 mt-2 text-sm rounded-md">
            Subscribe
          </button>
        </div>
      </div>
      <div className="py-12 space-x-36 flex   dark-mode  justify-center bg-white ">
        <img
          src={lang !== "English" ? logo_eng : logo_nep}
          alt=""
          className="w-40"
        />
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
      </div>
    </div>
  );
};

export default Footer;
