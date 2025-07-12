import React, { createContext, useContext, useState, useEffect } from "react";

const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState(() => {
    const stored = localStorage.getItem("activities");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const addActivity = (newActivity) => {
    const updated = [...activities, newActivity].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setActivities(updated);
  };

  return (
    <ActivityContext.Provider value={{ activities, addActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivities = () => useContext(ActivityContext);
