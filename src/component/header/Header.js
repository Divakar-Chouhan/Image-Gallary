import React, { useEffect } from "react";
import logo from "../../assets/header/logo.svg";
import "./header.css";
import { BiSearch } from "react-icons/bi";
import Switch from "./Switch.js";
import { useState } from "react";
import logoDark from "../../assets/header/logoDark.svg";
import { useContext } from "react";
import { ImageContext } from "../../App.js";

const Header = ({ darkmode, setDarkMode }) => {
  const [searchItem, setSearchItem] = useState("");
  const { fetchData } = useContext(ImageContext);

  // console.log(
  //   fetchData(
  //     `search/photos?page=1&query=Bike&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  //   )
  // );
  // useEffect(() => {
  // console.log(searchItem);
  // }, [searchItem]);
  // const changeMode = () => {
  //   setDarkMode("true");
  // };

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter" && searchItem.trim() !== "") {
      fetchData(
        `search/photos?page=1&query=${searchItem}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
    }
  };
  return (
    <div className={`w-[80%] m-auto py-8 `}>
      <div className="flex w-[100%]  items-center ">
        <div className="w-[60%] flex">
          {darkmode ? (
            <img
              src={logoDark}
              alt="Image gallery"
              className="w-[170px] mr-2"
              color="white"
            />
          ) : (
            <img
              src={logo}
              alt="Image gallery"
              className="w-[170px] mr-2"
              color="white"
            />
          )}
          <div className="mx-6 w-[100%]">
            <div
              className={`flex border-[1px] 
                  ${
                    darkmode
                      ? "bg-[#4F4F4F] border-[#858484]"
                      : "bg-[#FAFAFA] border-[#ECECEC]"
                  }
                  input_shadow rounded-[6px] w-[100%] py-2 px-4 max-w-[491px]  items-center`}
            >
              <BiSearch color="#C4C4C4" className="h-[23px] w-auto mr-2" />
              <input
                type="search"
                placeholder="Search Images here"
                value={searchItem}
                className={` ${
                  darkmode ? "bg-[#4F4F4F] text-[#8D8D8D]" : "bg-[#FAFAFA] "
                } font-[ 'Poppins', sans-serif] font-normal leading-[15px] border-none w-[100%] outline-none relative`}
                onChange={handleChange}
                onKeyDown={handleEnterSearch}
              />
            </div>
          </div>
        </div>
        <div className="w-[40%] flex justify-between">
          <ul className="flex font-[ 'Poppins', sans-serif] items-center">
            <li
              className={`
              ${darkmode ? "text-white" : "text-[#333333]"}
              font-bold text-[16px] leading-[19px]  mr-6 cursor-pointer `}
            >
              Explore
            </li>
            <li
              className={`
              ${darkmode ? "text-white" : "text-[#333333]"}
              font-bold text-[16px] leading-[19px]  mr-6 cursor-pointer`}
            >
              Collection
            </li>
            <li
              className={`
              ${darkmode ? "text-white" : "text-[#333333]"}
              font-bold text-[16px] leading-[19px]  mr-6 cursor-pointer`}
            >
              Community
            </li>
          </ul>

          <div className="flex items-center">
            <p
              className={`${
                darkmode ? "text-white" : "text-[#333333]"
              } font-bold text-[16px] leading-[19px]`}
            >
              {!darkmode ? "Light Mode" : "Dark Mode"}
            </p>
            <Switch darkmode={darkmode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
