import React from "react";
import PS5_Logo from "../resources/PS5_Logo.png";
import "./styles.css";

export default function LeftHardware({ title, description, url }) {
  return (
    <div className="mt-0 HardwareleftOfLeftContainerFrontPage mb-2">
      <img src={PS5_Logo} alt="PS5_Logo" className="HardwarePS5_Logo" />
      <ul className=" ms-0 firstUl">
        <li className="ps-3">
          <p className="text-black HardwareOverview">Overview</p>
        </li>
      </ul>
      <div className="container bg-white HardwarelineContainer border-primary ps-5">
        <span className="text-primary mt-3 HardwareAccessories">
          Accessories
        </span>
        <h1 className="mt-3 Hardwareh2LeftContainer">{title}</h1>
        <p className="HardwarePLeftContainer">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          type="button"
          className="btn btn-outline-primary"
        >
          Know More
        </a>
      </div>
      <ul className="mt-4 ms-0 secondUl">
        <li className="ps-3 mt-1">
          <p className="text-black HardwareGames">Games</p>
        </li>
      </ul>
    </div>
  );
}
