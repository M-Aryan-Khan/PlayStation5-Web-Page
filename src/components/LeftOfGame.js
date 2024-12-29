import React from "react";
import PS5_Logo from "../resources/PS5_LogoWhite.png";
import "./styles.css";

export default function LeftOfGame({ title, description, onPlayTrailer }) {
  return (
    <>
      <div className="GameleftOfLeftContainerFrontPage mb-2">
        <img src={PS5_Logo} alt="PS5_Logo" className="GamePS5_Logo" />
        <ul className="ms-0 GameToHide">
          <li className="ps-3 text-danger">
            <p className="text-white GameOverview">Overview</p>
          </li>
        </ul>
        <ul className="mt-4 ms-0 GameToHide">
          <li className="ps-3 mt-1 text-danger">
            <p className="text-white GameGames">Accessories</p>
          </li>
        </ul>
        <div className="container GamelineContainer border-danger ps-5">
          <span className="text-danger mt-3 GameAccessories">Games</span>
          <h1 className="mt-3 Gameh2LeftContainer">{title}</h1>
          <p>{description}</p>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={onPlayTrailer}
          >
            Play Trailer
          </button>
        </div>
      </div>
    </>
  );
}
