import React from "react";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col" id="home">
      <div className="text-[55px] font-semibold">
        <span>HEY, I'M MANAV JAIN</span>
      </div>
      <span className="text-center text-[25px] mt-[20px]">
        A Result-Oriented Web Developer building and managing Websites and Web <br />
        Applications that leads to the success of the overall product
      </span>
      <div className="mt-[40px] bg-[royalblue] rounded-[6px] text-white px-[15px] py-[10px] font-bold cursor-pointer">
        <span>Work Experience</span>
      </div>
    </div>
  );
};

export default Home;
