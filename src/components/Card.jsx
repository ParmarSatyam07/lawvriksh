import React from 'react';
import './Card.css';

import lv6 from '../assets/lv-img6.png';
import lv7 from '../assets/lv-img7.png';

const imageMap = {
  "lv-img6.png": lv6,
  "lv-img7.png": lv7,
};

const Card = ({ title, description, image }) => {
  const imageSrc = imageMap[image] || "https://via.placeholder.com/400x200?text=No+Image";

  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-meta">
          <span className="card-time">09:00 AM</span>
          <span className="card-dot">•</span>
          <span className="card-read">12 min read</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
