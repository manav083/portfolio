import React from "react";
import profilePhoto from "../assets/profilephoto.jpg";

const Header = () => {
  return (
    <div className="w-full px-7 py-5 shadow-xl text-[15px] fixed font-bold bg-white">
      <div className="flex justify-between">
        <div className="flex gap-7 items-center">
          <img
            src={profilePhoto}
            className="rounded-full w-[50px] border-[2px] border-[royalblue]"
          />
          <span>MANAV JAIN</span>
        </div>
        <div className="flex gap-10 justify-center items-center">
          <a href="#home">
            <span className="cursor-pointer">HOME</span>
          </a>
          <a href="#about">
            <span className="cursor-pointer">ABOUT</span>
          </a>
          <a href="#experience">
            <span className="cursor-pointer">EXPERIENCE</span>
          </a>
          <span className="cursor-pointer">CONTACT</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
