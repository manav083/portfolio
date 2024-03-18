import React, { useEffect, useState } from "react";
import profilePhoto from "../assets/profilephoto.jpg";

const Header = () => {
  const [theme, setTheme] = useState("dark");


  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  
  return (
    <div className="w-full px-7 py-5 shadow-2xl text-[15px] fixed font-bold bg-white dark:bg-gray-900">
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
          <a href="#contact">
            <span className="cursor-pointer">CONTACT</span>
          </a>
          <span className="cursor-pointer">
            {theme === "light" ? (
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency/30/moon-symbol.png"
                alt="moon-symbol"
                onClick={() => setTheme("dark")}
              />
            ) : (
              <img
                width="36"
                height="36"
                src="https://img.icons8.com/external-flat-glyph-papa-vector/36/external-Light-Mode-ui-flat-glyph-papa-vector.png"
                alt="external-Light-Mode-ui-flat-glyph-papa-vector"
                onClick={() => setTheme("light")}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
