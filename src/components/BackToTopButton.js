import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import "./styles.css";

function BackToTopButton() {
  const location = useLocation();
  const isGamesPage = location.pathname === "/games";
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setBackToTopButton(true);
      else setBackToTopButton(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTopButton && (
        <div className={`BackTop ${isGamesPage ? 'BackTopRed' : ''}`} onClick={scrollUp}>
          <FaArrowUp className="top-btn icon" />
        </div>
      )}
    </>
  );
}

export default BackToTopButton;
