import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { MdAccountCircle } from "react-icons/md";
import { Context } from "../context/contextApi";
const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);
  const navigate = useNavigate();
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  return (
    <div
      className={`md:block w-[240px] overflow-y-auto py-4 bg-[#121212] absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-[0px]" : ""
      }`}
    >
      <div className="flex flex-col px-5">
        {categories.map((category) => {
          return (
            <React.Fragment key={category.name}>
              <LeftNavMenuItem
                text={category.type === "home" ? "Home" : category.name}
                icon={category.icon}
                action={() => {
                  clickHandler(category.name, category.type);
                  navigate("/");
                }}
                className={
                  selectCategories === category.name ? "bg-red-700" : ""
                }
              />
              {category.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div  onClick={()=>{navigate('/about')}}
          className={`text-white/[0.5] text-[12px] cursor-pointer h-10 mt-[-15px]  flex  items-center px-3  rounded-lg hover:bg-white/[0.15] gap-2 `}
        >
          <span className="text-xl">
            {" "}
            <MdAccountCircle />
          </span>
          Author Basil Pulikuth
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
