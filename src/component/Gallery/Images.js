import { React, useContext, useEffect, useState } from "react";
import { ImageContext } from "../../App.js";
import Image from "./Image.js";
import "./Images.css";
const Images = ({ darkmode }) => {
  const { response, isLoading } = useContext(ImageContext);
  const [imageModal, setImageModal] = useState(false);

  useEffect(() => {
    console.log(imageModal);
  }, [imageModal]);
  console.log(response);
  return (
    <div className="gallery w-[80%] m-auto py-6 masonry-grid">
      {response.map((data, key) => (
        <Image
          key={key}
          data={data}
          darkmode={darkmode}
          setImageModal={setImageModal}
        />
      ))}
      {imageModal ? (
        <div className="absolute">
          <img src={response.link} alt="" />
          <button
            onClick={() => {
              setImageModal(false);
            }}
          >
            click
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Images;
