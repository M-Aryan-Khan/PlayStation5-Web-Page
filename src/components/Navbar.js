import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './styles.css';
import logo from '../resources/Logo.png';
import user from '../resources/user.png';
import userWhite from '../resources/userWhite.png';
import search from '../resources/search.png';
import searchWhite from '../resources/searchWhite.png';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();

  const links = [
    { name: "PlayStation®5", to: "/" },
    { name: "Accessories", to: "/accessories" },
    { name: "Games", to: "/games" },
    { name: "Services", to: "/services" },
  ];

  const isGamesPage = location.pathname === '/games';

  return (
    <nav className={`navbar fixed-top navbar-expand-lg ${isGamesPage ? 'navbar-transparent' : 'bg-body-tertiary'} ${isGamesPage ? 'navbar-little-black' : ''} navbar-glass`}>
      <div className="container-fluid">
        <Link className="navbar-brand mx-5" to="/">
          <img src={logo} alt="Logo" className="logo img-responsive" />
        </Link>
        <button
          className={`navbar-toggler ${isGamesPage ? 'navbar-toggler-white' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
            {links.map((link, index) => (
              <li key={index} className={`nav-item mx-3 ${activeLink === index ? 'active' : ''}`}>
                <Link
                  className={`nav-link ${activeLink === index ? 'active-link' : 'inactive-link'} ${isGamesPage ? 'text-white' : ''}`}
                  aria-current={activeLink === index ? 'page' : undefined}
                  to={link.to}
                  onClick={() => setActiveLink(index)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <form className="NavD-flex" role="search">
            <input
              className="form-control SearchBar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn" type="submit">
              <img src={isGamesPage ? searchWhite : search} alt="search" className="search img-responsive" />
            </button>
            <img src={isGamesPage ? userWhite : user} alt="user" className="user img-responsive" />
          </form>
        </div>
      </div>
    </nav>
  );
}
