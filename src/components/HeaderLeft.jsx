import React from "react";
import {
  BiBriefcase,
  BiCode,
  BiHome,
  BiMailSend,
  BiRightArrow,
  BiRightArrowAlt,
} from "react-icons/bi";

const HeaderLeft = () => {
  return (
    <div className="md:flex-[1]">
      <div className="min-h-screen top-0 hidden md:sticky md:flex items-center justify-center bg-teal-600 text-white">
        <ul className="flex flex-col gap-10">
          {["home", "experience", "projects", "contact"].map((item) => (
            <li
              key={item}
              className="flex items-center justify-start cursor-pointer font-medium transition-all duration-200 group sm:text-lg md:text-xl xl:text-2xl"
            >
              <BiRightArrowAlt className="text-3xl -translate-x-5 opacity-0 transform transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />

              <a
                href={`#${item}`}
                className="transition duration-200 group-hover:translate-x-3"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="fixed top-0 left-0 right-0 z-10 flex justify-evenly bg-teal-600 p-5 text-white md:hidden">
        <a href="#home" className="flex flex-col items-center justify-center">
          <BiHome className="text-2xl" />
          <span className="text-sm">Home</span>
        </a>
        <a
          href="#experience"
          className="flex flex-col items-center justify-center"
        >
          <BiBriefcase className="text-2xl" />
          <span className="text-sm">Experience</span>
        </a>
        <a
          href="#projects"
          className="flex flex-col items-center justify-center"
        >
          <BiCode className="text-2xl" />
          <span className="text-sm">Projects</span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center justify-center"
        >
          <BiMailSend className="text-2xl" />
          <span className="text-sm">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default HeaderLeft;
