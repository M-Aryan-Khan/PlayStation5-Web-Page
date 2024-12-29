import React from "react";
import controller from "../resources/controller.png";

export default function Controller() {
  return (
    <div className="ConntrollersD-flex mt-5">
      <div className="Ps5GamesSpecsBox">
        <h3 className="HeadphonesH2">Heighten Your Senses™</h3>
        <p className="HeadphonesP">
          The DualSense™ wireless controller for PS5 offers immersive haptic
          feedback, dynamic adaptive triggers and a built-in microphone, all
          integrated into an iconic design.
        </p>
      </div>
      <div className="ContollersImageContainer">
        <img src={controller} alt="controllers" className="ControllersImage" />
      </div>
      <div className="ControllersFlex mt-3">
        <div className="Ps5ContollersSpecsBox">
          <h3 className="HeadphonesH2">Haptic feedback</h3>
          <p className="HeadphonesP2Flex">
            Experience haptic feedback via the DualSense wireless controller in
            select PS5 titles and feel the effects and impact of your in-game
            actions through dynamic sensory feedback.
          </p>
        </div>
        <div className="Ps5ContollersSpecsBox">
          <h3 className="HeadphonesH2">Adaptive triggers</h3>
          <p className="HeadphonesP2Flex">
            Get to grips with immersive adaptive triggers, featuring dynamic
            resistance levels which simulate the physical impact of in-game
            activities in select PS5 games.
          </p>
        </div>
      </div>
      <div className="LearnMoreButtonContainer">
        <a
          href="https://www.playstation.com/en-us/accessories/dualsense-wireless-controller/"
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
