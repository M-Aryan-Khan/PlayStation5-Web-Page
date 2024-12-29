import React from "react";
import PS5_kit from "../resources/PS5_CompleteKit.png";

export default function PS5SpecsPage() {
  return (
    <div className="PS5_SpecContainer container d-flex flex-column" id="target-section">
      <span className="text-primary mt-3 align-self-start PS5_SpecOverview">
        Overview
      </span>
      <img
        src={PS5_kit}
        alt="PS5_kit"
        className="PS5_SpecKitImage align-self-center"
      />
      <h3 className="PS5_SpecH3 mt-4 align-self-center">Lightning Speed</h3>
      <span className="PS5_SpecSpan mt-2 align-self-center">
        Harness the power of a custom CPU, GPU, and SSD with Integrated I/0 that
        rewrite the rules of what a PlayStation console can do.
      </span>
      <h3 className="PS5_SpecH3 mt-4 align-self-center">Ultra-High Speed SSD</h3>
      <span className="PS5_SpecSpan mt-2 align-self-center">
        Maximize your play sessions with near instant load times for installed
        PS5™ games.
      </span>
      <h3 className="PS5_SpecH3 mt-4 align-self-center">Integrated I/0</h3>
      <span className="PS5_SpecSpan mt-2 align-self-center">
        The custom integration of the PS5™ console's systems lets creators pull
        data from the SSD so quickly that they can design games in ways never
        before possible.
      </span>
    </div>
  );
}
