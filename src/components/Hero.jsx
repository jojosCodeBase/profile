import React from "react";
import { styles } from "../styles";
import { profile } from "../assets";
import DownloadIcon from "@mui/icons-material/Download";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { text } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto background-hero">
      <div
        className={`${styles.paddingX} absolute inset-0 lg:top-[200px] sm:top-[60px] top-[10px] max-w-7xl mx-auto justify-evenly flex flex-col sm:flex-row`}
      >
        <div className="w-full">
          <div className="flex flex-col font-bold mt-12 text-babyPowder">
            <span className="text-sage text-4xl sm:text-5xl ">Hello</span>
            <span className="my-2 text-4xl sm:text-5xl flex gap-3">
              I'm{" "}
              <div className="text-sage w-auto text-4xl sm:text-5xl bg-[#3449667a] rounded-full p-1 backdrop-blur-sm">
                CoderJoJo
              </div>
            </span>

            {/* Profile image for tablet and iPad views */}
            <div className="profileBack2 my-1 lg:hidden flex justify-center items-center">
              <img
                src={profile}
                alt=""
                className="object-cover w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full "
              />
            </div>

            <span className="sm:text-xl w-full lg:text-sm text-xs sm:w-[500px] text-babyPowder text-justify leading-6 -mt-5 sm:mt-2 mb-2">
              
            </span>

            <div className="mt-2 text-sm sm:text-lg flex space-x-3">
              <a href="mailto:example@example.com">
                <button className="p-2 border-indigoDye border-[2px] flex items-center justify-evenly text-babyPowder hover:bg-indigoDye transition-all ease-in-out rounded-xl w-[150px] sm:w-[200px]">
                  Email <ContactMailIcon />
                </button>
              </a>

              <a href={text} download>
                <button className="p-2 bg-indigoDye border-[2px] flex items-center justify-evenly hover:bg-transparent text-babyPowder border-indigoDye transition-all ease-in-out rounded-xl w-[150px] sm:w-[200px]">
                  Download CV <DownloadIcon />
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Default profile image for larger screens */}
        <div className="profileBack hidden lg:flex mb-10 justify-center items-center">
          <img
            src={profile}
            alt=""
            className="object-cover w-[300px] h-[300px] rounded-full "
          />
          {/* Change the photo to your original photo via exporting the photo */}
          {/* and import the photo as the example photo */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
