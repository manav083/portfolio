import React from "react";

const About = () => {
  return (
    <div
      className="h-screen pt-[70px] flex items-center justify-center flex-col"
      id="about"
    >
      <div className="text-[30px] font-semibold">
        <span>About Me</span>
      </div>
      <div className="px-[20px] py-[10px] mx-[20px] w-[80vw] flex flex-col items-center justify-center">
        <span className="text-[20px]">
          I'm a Frontend Focused Web Developer building and managing the
          Front-end of Websites and Web Applications that leads to the success
          of the overall product. Check out some of my work in the Projects
          section.
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me
        </span>
        {/* <div className="mt-[40px] bg-[royalblue] rounded-[6px] text-white px-[15px] py-[10px] font-bold cursor-pointer w-max">
          <span>Contact</span>
        </div> */}
      </div>
      <div className="flex flex-col flex-wrap gap-[30px] items-center justify-center px-[20px] mx-[10px]">
        <span className="font-bold text-[30px]">Skills</span>
        <div className="flex flex-wrap gap-[100px] justify-center">
          <img
            className="rounded-md"
            width={150}
            // height={150}
            src="/html.png"
          />
          <img className="rounded-md" width={150} src="/css.png" />
          <img className="rounded-md" width={150} src="/js.png" />
          <img className="rounded-md" width={150} src="/react.svg" />
          <img className="rounded-md" width={150} src="/redux.svg" />
        </div>
        <div className="flex flex-wrap gap-[100px] justify-center">
          <img className="rounded-md" width={150} src="/bootstrap.png" />
          <img className="rounded-md" width={150} src="/tailwind.webp" />
          <img className="rounded-md" width={150} src="/aws.png" />
          <img className="rounded-md" width={150} src="/nodejs.svg" />
          <img className="rounded-md" width={150} src="/firebase.png" />
        </div>
      </div>
    </div>
  );
};

export default About;
