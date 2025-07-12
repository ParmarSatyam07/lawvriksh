import React from "react";
import "./ActivityItem.css";

const ActivityItem = ({ title, date, link }) => {
  const safeLink = link?.startsWith("http") ? link : `https://${link}`;

  return (
   <div className="activity-main">
     <div className="activity-item">
      <div className="activity-top">
        <div className="activity-date-block">
          <div className="activity-date">{date}</div>
          <div className="activity-line"></div>
        </div>
        <div className="activity-content">
          <div className="activity-title">{title}</div>
          {link && (
            <a
              href={safeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="activity-link"
            >
              {safeLink}
            </a>
          )}
        </div>
      </div>
    </div>
   </div>
  );
};

export default ActivityItem;
