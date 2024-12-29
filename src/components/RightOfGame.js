import React, { useState } from "react";
import "./styles.css";
import PS5_black from "../resources/ps5_black.png";
import PS5_white from "../resources/ps5_white.png";
import PS5_spiderman from "../resources/ps5_spiderman.png";

export default function RightOfGame() {
  const images = [PS5_white, PS5_black, PS5_spiderman];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="RightFrontPageContainer mt-0 p-5">
      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            className={`slides ${index === currentIndex ? "active" : ""}`}
            src={image}
            alt={`PS5_${index}`}
          />
        ))}
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            className={`thumbnail ${index === currentIndex ? "selected" : ""}`}
            src={image}
            alt={`thumbnail_${index}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
