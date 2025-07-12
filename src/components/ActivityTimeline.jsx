import React, { useState } from "react";
import { useActivities } from "../context/ActivityContext";
import ActivityItem from "./ActivityItem";
import AddActivityForm from "./AddActivityForm";
import navGradient from "../assets/nav-gradient.jpg";

import "./ActivityTimeline.css"; 

const ActivityTimeline = () => {
  const { activities, addActivity } = useActivities();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h1>Recent Activities</h1>

        <button
          onClick={() => setShowForm(true)}
          style={{
            padding: "2px 22px",
            fontSize: "16px",
            fontWeight: "600",

            borderRadius: "50px",
            color: "transparent",
            backgroundImage: `url(${navGradient})`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = "1";
          }}
        >
          Add
        </button>
      </div>

      {/* ✅ Activity List */}
   <div className="timeline-items">
  {[...activities].reverse().map((item, index) => (
    <ActivityItem
      key={index}
      title={item.title}
      date={item.date}
      link={item.link}
    />
  ))}
</div>


      {/* ✅ Add Form */}
      {showForm && (
        <AddActivityForm
          onAdd={addActivity}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default ActivityTimeline;
