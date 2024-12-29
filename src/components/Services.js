import React from "react";

export default function Services() {
  return (
    <div className="ServicesContainer">
      <h2>Sign up for PS5 NEWS</h2>
      <p>
        Sign up below to be among first one to receive updates as we announce
        them.
      </p>
      <div className="SignUpForm">
        <div className="Heading d-flex flex-column justify-content-center align-items-center">
          <h6>Email Address</h6>
          <input type="email" />
        </div>
        <div className="Heading d-flex flex-column justify-content-center align-items-center">
          <h6>Confirm Email Address</h6>
          <input type="email" />
        </div>
        <div className="Heading DOB d-flex flex-column justify-content-center align-items-center">
          <h6>Date Of Birth</h6>
          <input type="date" />
        </div>
        <div className="d-flex PP flex-column justify-content-center align-items-center">
          <p>
            By clicking below you agree to receive personalised info and offers
            by email relating to PlayStation®
          </p>
          <a
            href="https://www.playstation.com/en-us/privacy-security-safety/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
        <div>
          <a
            href="/"
            rel="noopener noreferrer"
            type="button"
            className="SpecsLearnMorebtn"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
