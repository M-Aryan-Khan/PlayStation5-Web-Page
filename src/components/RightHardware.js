import React from "react";
import controller from '../resources/ControllerStand.png';
import charger from '../resources/Charging.png';
import headphones from '../resources/headphones.png';
import remote from '../resources/Remote.png';
import HdCamera from '../resources/hdCamera.png';
import "./styles.css";

export default function RightHardware({ currentIndex, setCurrentIndex }) {
  const images = [
    { src: controller, className: "slide-controller" },
    { src: charger, className: "slide-charger" },
    { src: headphones, className: "slide-headphones" },
    { src: remote, className: "slide-remote" },
    { src: HdCamera, className: "slide-camera" }
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="HardwareContainer mt-0 p-5">
      <div className="Hardwareslider">
        {images.map((image, index) => (
          <img
            key={index}
            className={`Hardwareslides ${
              index === currentIndex ? "active" : ""
            } ${image.className}`}
            src={image.src}
            alt={`PS5_${index}`}
          />
        ))}
      </div>
      <div className="container rightHardwareContainer">
        <button className="nav-arrow left" onClick={goToPrevSlide}>
          &lt;
        </button>
        <div className="nav-dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`nav-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button className="nav-arrow right" onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
}
