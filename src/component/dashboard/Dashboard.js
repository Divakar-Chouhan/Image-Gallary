import React from "react";
import background from "../../assets/dashboard/background.svg";
import { BiSearch } from "react-icons/bi";
import { useContext } from "react";
import { ImageContext } from "../../App.js";
import { useState } from "react";

const Dashboard = () => {
  const [searchItem, setSearchItem] = useState("");
  const { fetchData } = useContext(ImageContext);

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
    <div className="w-[100%] relative min-h-[384px] min-w-[100vw]">
      <img
        src={background}
        alt="background"
        className="absolute w-[100%] h-[100%] object-cover "
      />
      <div className="w-[100%] absolute z-10 ">
        <div className="flex flex-col py-24 w-[80%] m-auto  font-[ 'Poppins', sans-serif] max-h-[384px] justify-center items-center">
          <h1 className="font-bold text-[32px] leading-[39px] tracking-tight text-white my-2">
            Download High Quality Images by creators
          </h1>
          <p className="font-medium my-2 text-[14px] leading-[17px] text-[#C4C4C4]">
            Over 2.4 million+ stock Images by our talented community
          </p>
          <div className="w-[60vw] max-w-[808px] flex rounded-[8px] bg-white py-[12px] px-4">
            <BiSearch color="#C4C4C4" className="h-[23px] w-auto mr-2" />
            <input
              type="search"
              className="w-[100%] outline-none"
              placeholder="Search high resolution Images, categories, wallpapers"
              onChange={handleChange}
              onKeyDown={handleEnterSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
