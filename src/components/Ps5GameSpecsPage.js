import React from "react";
import "./styles.css";

export default function Ps5GameSpecsPage() {
  return (
    <div className="Ps5GameSpecsPage mt-5">
      <div className="Ps5GameSpecsOverlay"></div>
      <div className="Ps5GameSpecsContainer container mt-3">
        <div className="Ps5GamesSpecsBoxCenter">
          <h1 className="Ps5GameSpecsh1 ">Stunning games</h1>
          <p className="Ps5GameSpecsp">
            Marvel at incredible graphics and experience new PS5™ features.
          </p>
        </div>
        <div className="d-flex ToBeCol">
          <div className="Ps5GamesSpecsBox">
            <h2 className="Ps5GameSpecsh2">Ray tracing</h2>
            <p className="Ps5GameSpecsp">
              Immerse yourself in worlds with a new level of realism as rays of
              light are individually simulated, creating true-to-life shadows
              and reflections in supported PS5™ games.
            </p>
            <p className="Ps5GameSpecspMobile">
              New level of realism as rays of
              light are individually simulated, creating true-to-life shadows
              and reflections.
            </p>
          </div>
          <div className="Ps5GamesSpecsBox">
            <h2 className="Ps5GameSpecsh2">4K-TV gaming</h2>
            <p className="Ps5GameSpecsp">
              Play your favorite PS5™ games on your stunning 4K TV.
            </p>
            <p className="Ps5GameSpecspMobile">
              Play your favorite PS5™ games on your stunning 4K TV.
            </p>
          </div>
        </div>
        <div className="d-flex ToBeCol">
          <div className="Ps5GamesSpecsBox">
            <h2 className="Ps5GameSpecsh2">HDR technology</h2>
            <p className="Ps5GameSpecsp">
              With an HDR TV, supported PS5™ games display an unbelievably
              vibrant and lifelike range of colors.
            </p>
            <p className="Ps5GameSpecspMobile">
              Displays an unbelievably
              vibrant and lifelike range of colors.
            </p>
          </div>
          <div className="Ps5GamesSpecsBox">
            <h2 className="Ps5GameSpecsh2">8K output</h2>
            <p className="Ps5GameSpecsp">
              PS5™ consoles support 8K Output, so you can play games on your
              4320p resolution display.
            </p>
            <p className="Ps5GameSpecspMobile">
              Now supports 8K Output, Play games on your
              4320p resolution display.
            </p>
          </div>
        </div>
        <div className="Ps5GamesSpecsBoxCenter">
          <h2 className="Ps5GameSpecsh2">Upto 120fps with 120Hz O/P</h2>
          <p className="Ps5GameSpecsp ToHide">
            Enjoy smooth and fluid high frame rate gameplay at up to 120fps for
            compatible games, with support for 120Hz output on 4K displays.
          </p>
          <p className="Ps5GameSpecspMobile">
          Enjoy smooth and fluid high frame rate at 120fps, with 120Hz output on 4K displays.
            </p>
        </div>
      </div>
    </div>
  );
}
