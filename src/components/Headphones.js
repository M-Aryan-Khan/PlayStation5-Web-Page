import React from "react";
import "./styles.css";
import headphones from "../resources/headphones.png";

export default function Headphones() {
  return (
    <div className="HeadphonesD-flex mt-5">
      <div className="Ps5GamesSpecsBox">
        <h3 className="HeadphonesH2">Breathtaking Immersion</h3>
        <p className="HeadphonesP">
          Discover a deeper gaming experience with support for haptic feedback,
          adaptive triggers and 3D Audio technology
        </p>
      </div>
      <div className="HeadphonesImageContainer">
        <img
          src={headphones}
          alt="headphones"
          className="HeadphonesImage mt-3"
        />
      </div>
      <div className="Ps5GamesSpecsBox mt-5">
        <h3 className="HeadphonesH2">Tempest 3D Audiotech</h3>
        <p className="HeadphonesP2">
          Immerse yourself in soundscapes where it feels as if the sound comes
          from every direction. Through your headphones or TV speakers your
          surroundings truly come alive with Tempest 3D Audio Tech in supported
          games.
        </p>
      </div>
      <div className="LearnMoreButtonContainer">
        <a
          href="https://blog.playstation.com/2020/10/06/experience-ps5s-tempest-3d-audiotech-with-compatible-headsets-at-launch-tv-virtual-surround-sound-coming-after-launch/"
          target="_blank"
          rel="noopener noreferrer"
          type="button"
          className="SpecsLearnMorebtn mt-3 mb-5"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
