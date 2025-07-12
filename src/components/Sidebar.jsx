import React from "react";
import "./Sidebar.css";
import profileImg from "../assets/lv-img3.png"; 
import { GiCheckMark } from "react-icons/gi"; 
import navGradient from "../assets/nav-gradient.jpg"; 

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      {/* ✅ Profile + Verified Badge */}
      <div className="profile-wrapper">
        <img src={profileImg} alt="Profile" className="profile-image" />
        <div
          className="verified-badge"
          style={{
            backgroundImage: `url(${navGradient})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <GiCheckMark style={{ color: "#544629", fontSize: "20px" }} />
        </div>
      </div>

      <h2 className="sidebar-name">Robert Fox</h2>
      <p className="sidebar-followers">12.2K followers</p>

      <p className="sidebar-bio">
        His Bio | Author | Writer | Poet | Entrepreneur | Developer
      </p>

      {/* ✅ Gradient Follow Button */}
      <button
        className="follow-btn"
        style={{
          backgroundImage: `url(${navGradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Follow
      </button>
    </div>
  );
};

export default Sidebar;
