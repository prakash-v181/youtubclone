import React, { useState } from "react";

const keywords = [
  "All",
  "Html",
  "Css",
  "Scss",
  "Bootstrap",
  "Git",
  "Javascript",
  "TailwindCss",
  "React",
  "React Hooks",
  "Github",
  "nodejs",
  "GraphQL",
  "Mongodb",
  "Express",
  "React Form",
];

const CategoryBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (keyword) => {
    setActiveElement(keyword);
  };
  return (
    <div className="flex gap-3 text-white overflow-x-auto mt-5 select-none categorybartop ">
      {keywords.map((keyword) => {
        return (
          <span
            onClick={() => handleClick(keyword)}
            className={`text-[12px] font-semibold inline-flex whitespace-nowrap rounded-lg px-3 py-1 cursor-pointer transition-all mb-3 ${
              activeElement === keyword
                ? `bg-white/[0.9] text-[#121212]  hover:bg-white/[1]`
                : " bg-white/[0.15] text-white  hover:bg-white/[0.3]"
            }`}
          >
            {keyword}
          </span>
        );
      })}
    </div>
  );
};

export default CategoryBar;
