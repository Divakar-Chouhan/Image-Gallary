import React, { useEffect } from "react";
import "./switch.css";
import { ImageContext } from "../../App";
import { useContext } from "react";

const Switch = (darkmode, setDarkMode) => {
  

  return (
    <>
      <label className="w-[48px] h-[24px]  relative ml-2 ">
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          onChange={(e) => {
            darkmode.setDarkMode(e.target.checked);
          }}
        />

        <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-[12px] w-[48px] h-[24px] bg-[#858484] border-[#A7A7A7]" />
      </label>
    </>
  );
};

export default Switch;
