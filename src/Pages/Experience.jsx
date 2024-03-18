import React from "react";

const Experience = () => {
  return (
    <div
      className="pt-[100px] flex items-center justify-center flex-col dark:bg-[#111]"
      id="experience"
    >
      <div className="text-[30px] mb-[20px] font-semibold">
        <span className="border-b-[4px] pb-[10px] border-[royalblue]">Work Experience</span>
      </div>
      <div className="w-6/12">
        <div className="p-[10px]">
          <div className="flex flex-wrap justify-between items-center pb-3">
            <div>
              <h2 className="font-bold">Locad Pte Ltd</h2>
              <h2 className="italic text-gray-600">Frontend Developer</h2>
            </div>
            <div>
              <h2 className="font-semibold">Dec 2022-Present</h2>
              <h2 className="italic text-gray-600">New Delhi, India</h2>
            </div>
          </div>
          <li>
            Collaborated with a team of 3 individuals to spearhead the
            development of a web application aimed at tracking live auditing and
            delivering analytics for the Lok Sabha Election ‐ 2024 across over
            2.5 Million locations.
          </li>
          <li>
            Developed a Progressive Web Application (PWA) entirely from scratch
            to facilitate real‐time notifications for any changes across an
            extensive network of over 2.5 Million locations. This ensured
            seamless delivery of updates and monitoring for the second phase of
            the project.{" "}
          </li>
          <li>
            Developed numerous new features by thoroughly comprehending client
            requirements, resulting in a significant improvement in auditing ac‐
            curacy by 80% across more than 4 Million sites. These enhancements
            have positively impacted over 150,000 users.
          </li>
        </div>
        <div className="p-[10px]">
          <div className="flex flex-wrap justify-between items-center pb-3">
            <div>
              <h2 className="font-bold">Habilelabs Pvt Ltd </h2>
              <h2 className="italic text-gray-600">Associate Software Enginner</h2>
            </div>
            <div>
              <h2 className="font-semibold">Feb 2022-Dec 2022</h2>
              <h2 className="italic text-gray-600">Jaipur, India</h2>
            </div>
          </div>
          <li>
            Spearheaded the frontend development of 3 separate web application
            projects from inception.
          </li>
          <li>
            Crafted frontend components from scratch, ensuring optimal user
            experience and design aesthetics.
          </li>
          <li>
            Implemented new features tailored to meet client requirements and
            specifications, enhancing overall project functionality and
            usability.
          </li>
        </div>
        <div className="p-[10px]">
          <div className="flex flex-wrap justify-between items-center pb-3">
            <div>
              <h2 className="font-bold">Infosys Ltd</h2>
              <h2 className="italic text-gray-600">System Enginner & Trainee</h2>
            </div>
            <div>
              <h2 className="font-semibold">Feb 2019-May 2019</h2>
              <h2 className="italic text-gray-600">Pune, India</h2>
            </div>
          </div>
          <li>
            Collaborated with a team of 20 individuals on a high‐profile project
            for a prestigious Australian bank.
          </li>
          <li>
            Developed new features aligned with client requirements and
            specifications.
          </li>
          <li>
            Recognized as a High Performer, Ranked in the top 5% of 15,000
            trainees, showcasing my dedication and exceptional abilities.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Experience;
