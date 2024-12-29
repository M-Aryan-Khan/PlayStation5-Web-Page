import React from "react";
import PS5_Logo from "../resources/PS5_Logo.png";
import "./styles.css";

export default function LeftOfFrontPage() {
  const handleLearnMoreClick = () => {
    document.getElementById("target-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mt-0 leftOfLeftContainerFrontPage">
      <img src={PS5_Logo} alt="PS5_Logo" className="PS5_Logo" />
      <div className="container bg-white lineContainer border-primary ps-5">
        <span className="text-primary mt-3 FrontPageOverview">Overview</span>
        <h1 className="mt-3 h2LeftContainer">Play Has No Limits</h1>
        <p>
          Experience lightning-fast loading with an ultra-high-speed SSD, deeper
          immersion with support for haptic feedback, adaptive triggers and 3D
          Audio, and an all-new generation of incredible PlayStation® games.
        </p>
        <button type="button" className="btn btn-outline-primary" onClick={handleLearnMoreClick}>
          Learn More
        </button>
      </div>
      <ul className="mt-4 ms-0 AccGameContainer">
        <li className="ps-3">
          <p className="text-black FrontPageAccessories">Accessories</p>
        </li>
        <li className="ps-3 mt-1">
          <p className="text-black FrontPageGames">Games</p>
        </li>
      </ul>
    </div>
  );
}
