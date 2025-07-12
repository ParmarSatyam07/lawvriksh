// src/components/CardSection.jsx
import React, { useState } from "react";
import { useCardContext } from "../context/CardContext";
import Card from "./Card";
import AddCardModal from "./AddCardModal";
import "./CardSection.css";

const tabs = ["Recent", "Trending", "About"];

const CardSection = () => {
  const { cards, activeTab, setActiveTab } = useCardContext();
  const [showModal, setShowModal] = useState(false);
  const [currentSection, setCurrentSection] = useState("Corporate Law");

  const filteredCards = cards[activeTab] || [];

  return (
    <>
      <div className="card-section">
        {/* ✅ Tabs */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${tab === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ✅ Corporate Law Section */}
        <div className="section-header">
          <h2 className="section-title">Corporate Law</h2>
          <button
            className="add-card-btn"
            onClick={() => {
              setCurrentSection("Corporate Law");
              setShowModal(true);
            }}
          >
            Add New Card
          </button>
        </div>

        <div className="card-carousel">
          {filteredCards.length === 0 ? (
            <p>No cards in this tab.</p>
          ) : (
            filteredCards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))
          )}
        </div>
      </div>

      {/* ✅ Constitutional Law Section */}
      <div className="card-section">
        <div className="section-header">
          <h2 className="section-title">Constitutional Law</h2>
          <button
            className="add-card-btn"
            onClick={() => {
              setCurrentSection("Constitutional Law");
              setShowModal(true);
            }}
          >
            Add New Card
          </button>
        </div>

        <div className="card-carousel">
          {filteredCards.length === 0 ? (
            <p>No cards in this tab.</p>
          ) : (
            filteredCards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))
          )}
        </div>
      </div>

      {/* ✅ Modal with Fixed sectionKey */}
      {showModal && (
        <AddCardModal
          onClose={() => setShowModal(false)}
          sectionKey={activeTab} 
        />
      )}
    </>
  );
};

export default CardSection;
