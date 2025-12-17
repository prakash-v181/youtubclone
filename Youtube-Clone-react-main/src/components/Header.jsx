import React, { useContext, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ytLogo from "../assets/images/yt-logo.png";
import ytLogoMobile from "../assets/images/yt-logo-mobile.png";
import { SlInfo, SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { MdKeyboardVoice } from "react-icons/md";
import { Context } from "../context/contextApi";
import Loader from "./shared/Loader";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };
  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
};

  const { pathname } = useLocation();
  const pageName = pathname.split("/").filter(Boolean)?.[0];
  return (
    <div className="sticky top-0 flex flex-row justify-between items-center h-14 md:px-5 px-4 z-10 bg-[#121212]">
      {loading && <Loader />}
      <div className="flex items-center h-5">
        {pageName !== "video" && (
          <div className="md:hidden flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]" onClick={mobileMenuToggle}>
            {mobileMenu ? (
              <CgClose
                className="text-white text-xl"
               
              />
            ) : (
              <SlMenu
                className="text-white text-xl"
               
              />
            )}
          </div>
        )}
        <Link to="/" className="flex items-center h-5">
          <img
            className="hidden md:block h-full"
            src={ytLogo}
            alt="yotube logo"
          />
          <img
            className="md:hidden h-full"
            src={ytLogoMobile}
            alt="youtube logo"
          />
        </Link>
      </div>
      <div className="flex flex-row">
        <div className="group flex items-center">
          <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
            <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
              <IoIosSearch className="text-white text-xl" />
            </div>
            <input
              type="text"
              className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              placeholder="Search"
              value={searchQuery}
            />
          </div>
          <button
            className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <IoIosSearch className="text-white text-xl" />
          </button>
        </div>
        <div className="hidden md:flex items-center justify-center h-10 ml-2 w-10 rounded-full bg-[#212121] hover:bg-[#303030]/[0.6]">
                <MdKeyboardVoice className="text-white text-xl cursor-pointer"/>
            
         </div>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          {/* source from random image  : https://xsgames.co/randomusers/ */}
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            alt="random image"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
