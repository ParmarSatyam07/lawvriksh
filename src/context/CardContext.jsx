import React, { createContext, useContext, useState, useEffect } from "react";


const CardContext = createContext();


export const CardProvider = ({ children }) => {
  const initialState = {
    Recent: [
      {
        title: "Introduction to IPR Laws",
        description: "Understanding the role of AI in software development",
        image: "lv-img6.png", // ✅ Stored as string for mapping
      },
      {
        title: "Commercial Disputes Act",
        description: "Understanding recent amendments to commercial dispute resolution.",
        image: "lv-img6.png",
      },
    ],
    Trending: [],
    About: [],
  };

  const [cards, setCards] = useState(() => {
    const localData = localStorage.getItem("lawvriksh-cards");
    return localData ? JSON.parse(localData) : initialState;
  });

  const [activeTab, setActiveTab] = useState("Recent");

  // ✅ Save to localStorage whenever cards update
  useEffect(() => {
    localStorage.setItem("lawvriksh-cards", JSON.stringify(cards));
  }, [cards]);

  // ✅ Add card to specific tab
  const addCard = (tab, newCard) => {
    setCards((prev) => ({
      ...prev,
      [tab]: [newCard, ...(prev[tab] || [])], // ✅ fallback to empty array
    }));
  };

  const value = { cards, addCard, activeTab, setActiveTab };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};


export const useCardContext = function useCardContext() {
  return useContext(CardContext);
};
