import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.js";
import useAxios from "./hooks/useAxios.js";
import { createContext } from "react";
import useState from "react";

export const ImageContext = createContext();
function App() {
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=random&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=18`
  );
  // console.log(response);
  const value = {
    response,
    isLoading,
    error,
    fetchData,

  };
  return (
    <div className="w-[100vw]">
      <ImageContext.Provider value={value}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
      </ImageContext.Provider>
    </div>
  );
}

export default App;
