import { React, useContext } from "react";
import Header from "../../component/header/Header.js";
import { useState, useEffect } from "react";
import Dashboard from "../../component/dashboard/Dashboard.js";
import Images from "../../component/Gallery/Images.js";
import { ImageContext } from "../../App.js";

const Home = () => {
  const [darkmode, setDarkMode] = useState(false);
  // const { darkmode, setDarkMode } = useContext(ImageContext);
  // console.log(darkmode);

  return (
    <div
      className={`${
        darkmode ? "bg-[#232323]" : "bg-white"
      } transition-all duration-300 relative`}
    >
      <Header darkmode={darkmode} setDarkMode={setDarkMode}></Header>
      <Dashboard />
      <Images darkmode={darkmode} />
    </div>
  );
};

export default Home;
