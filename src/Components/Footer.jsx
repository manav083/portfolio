import React from "react";

const Footer = () => {
  return (
    <div className="bg-black dark:bg-gray-900 text-white px-[40px] pt-[40px] absolute left-0 right-0">
      <div className="mb-[15px]">
        <h2 className="text-[25px] font-bold ml-[10px]">Manav Jain</h2>
        <h4 className="flex items-center gap-[10px]">
          <a href="tel: 9654218700">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/fluency/30/iphone14-pro--v1.png"
              alt="iphone14-pro--v1"
            />{" "}
          </a>
          +91 9654218700
        </h4>
        <h4 className="flex items-center gap-[10px]">
          <a href="mailto: manavjain083@gmail.com">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/papercut/30/new-post.png"
              alt="new-post"
            />{" "}
          </a>
          manavjain083@gmail.com
        </h4>
      </div>
      <div className="p-[20px] border-t-[1px] border-white text-center">
        Made with ❤️ by Manav Jain
      </div>
    </div>
  );
};

export default Footer;
