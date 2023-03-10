import { React, useContext } from "react";
import "./image.css";
import { BiLike } from "react-icons/bi";
import { ImageContext } from "../../App.js";

const Image = ({ data, darkmode, setImageModal }) => {
  //   console.log(data.user);
  // console.log(data);
  // console.log(imageModal);

  return (
    <div
      className={`px-2 py-4 masonry-grid_item font-[ 'Poppins', sans-serif] text-[#4F4F4F] `}
    >
      <div
        className="flex flex-col  cursor-pointer"
        onClick={() => {
          setImageModal(true);
        }}
      >
        <img
          src={data.urls.small}
          alt={data.alt_description}
          className=" rounded-t-[8px]"
        />
        <div
          className={`flex border-[1px] border-[#E5E5E5] rounded-b-[8px] items-center ${
            darkmode ? "bg-[#141414] border-none" : ""
          }`}
        >
          <div className="w-[60%] flex py-[10px] px-2 items-center">
            <img
              src={data.user.profile_image.medium}
              alt=""
              className="rounded-full w-[40px] h-[40px]"
            />
            <div className="flex flex-col justify-center mx-2 w-[100%]">
              <h1
                className={`font-bold text-[16px] leading-[19px] mx-1 ${
                  darkmode ? "text-[#E5E5E5]" : ""
                }`}
              >
                {data.user.name}
              </h1>
              <span className="font-semibold italic text-[#A7A7A7] font-[ 'Poppins', sans-serif] text-[12px] leading-[17px] mx-1">
                @{data.user.username}{" "}
              </span>
            </div>
          </div>
          <div className="flex justify-end w-[40%] px-2 items-center">
            <BiLike
              className={`${darkmode ? "text-[#E5E5E5]" : "text-[#4F4F4F]"}`}
            />
            <span
              className={`mr-4 font-[ 'Poppins', sans-serif] font-bold ${
                darkmode ? "text-[#E5E5E5]" : "text-[#4F4F4F]"
              } text-[14px] leading-[17px] mx-[2px]`}
            >
              {data.user.total_likes < 1000
                ? data.user.total_likes
                : (data.user.total_likes / 1000).toFixed(2)}
              {data.user.total_likes < 1000 ? "" : "k"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
