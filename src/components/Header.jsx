import React from "react";
import "./Header.css";
import { FiSearch, FiBell } from "react-icons/fi";
import logoimg from "../assets/lv-img.png";
import proimg from "../assets/lv-img2.png";

import navGradient from "../assets/nav-gradient.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logoimg} alt="logoimg" />
      </div>

      <nav className="nav-links">
        <a
          href="#"
          className="gradient-text"
          style={{ backgroundImage: `url(${navGradient})` }}
        >
          Home
        </a>
        <a
          href="#"
          className="gradient-text"
          style={{ backgroundImage: `url(${navGradient})` }}
        >
          About Us
        </a>
        <a
          href="#"
          className="gradient-text"
          style={{ backgroundImage: `url(${navGradient})` }}
        >
          Contact Us
        </a>
      </nav>

      <div className="header-right">
        <div
          style={{
            backgroundImage: `url(${navGradient})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
            padding: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "46px",
            height: "46px",
          }}
        >
          <FiSearch color="#3E3E3E" size={22} />
        </div>

        <div
          style={{
            backgroundImage: `url(${navGradient})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
            padding: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "46px",
            height: "46px",
          }}
        >
          <FiBell color="#3E3E3E" size={18} />
        </div>

        <img src={proimg} alt="User" className="avatar" />
      </div>
    </header>
  );
};

export default Header;
