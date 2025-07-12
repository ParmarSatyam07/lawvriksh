// src/components/HeroSection.jsx
import React from "react";
import "./Hero.css";
import { BsThreeDots } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { FiLinkedin, FiTwitter } from "react-icons/fi";

import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import navGradient from "../assets/nav-gradient.jpg";
import Sidebar from "./Sidebar";
import CardSection from "./CardSection"; 
import ActivityTimeline from "../components/ActivityTimeline"; 


const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <div className="hero-left-top">
          <div className="left-top-title">
            <h1>Robert Fox’s Page</h1>
            <div className="three-dots">
              <BsThreeDots />
            </div>
          </div>
          <p className="hero-para">
            An author is a creator of written works, such as books, articles, or
            stories, who uses words to inform, entertain, or inspire readers.
            They often draw from imagination.
          </p>

          {/*  Added social buttons block */}
          <div className="social-btn-outer">
            <div className="social-buttons">
              <button
                className="social-btn"
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
                <LuFacebook style={{ color: "#1E1E1E", fontSize: "50px" }} />
              </button>

              <button
                className="social-btn"
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
                <FiTwitter style={{ color: "black", fontSize: "23px" }} />
              </button>

              <button
                className="social-btn"
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
                <FiLinkedin style={{ color: "black", fontSize: "23px" }} />
              </button>

              <button
                className="social-btn"
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
                <HiOutlineMail style={{ color: "black", fontSize: "23px" }} />
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Added CardSection here */}
        <div className="hero-left-bottom">
          {/* <CardSection sectionTitle="Corporate Law" sectionKey="corporate" /> */}
         <CardSection sectionTitle="Constitutional Law" sectionKey="constitutional" />

        

        </div>
      </div>

     <div className="hero-right">
       <Sidebar />
      <div className="hero-right-bottom">
         <ActivityTimeline />
      </div>
 
 
</div>

    </div>
  );
};

export default Hero;
