import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navlinks } from "../constants";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { coderjojoLogo } from "../assets";
import { colors } from "@mui/material";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full  flex items-center py-5 top-0 z-20 fixed  bg-gradient-to-r from-[#0D18219f] to-[#34496677] backdrop-blur-sm shadow-lg`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={coderjojoLogo} alt="" className="w-[150px] object-cover" />
        </Link>
        <ul className="list-none sm:flex hidden flex-row gap-10">
          {navlinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-babyPowder"
                } hover:text-sage text-[18px] cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>

        {/* hamburger menu */}
        <div className="flex sm:hidden flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-babyPowder"
          >
            {toggle ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 absolute  bg-[#0d1821f4] backdrop-blur-sm shadow-lg top-14 right-1 mx-0 my-2 min-w-[140px] z-10 rounded-md`}
        >
          <ul className="list-none flex flex-col gap-10 ">
            {navlinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-babyPowder"
                  } hover:text-sage text-[18px] cursor-pointer`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
