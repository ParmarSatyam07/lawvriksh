// src/components/AddCardModal.jsx
import React, { useState } from "react";
import { useCardContext } from "../context/CardContext";
import "./AddCardModal.css";

const AddCardModal = ({ onClose, sectionKey }) => {
  const { addCard } = useCardContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    addCard(sectionKey, {
      title,
      description,
      image: "lv-img6.png", // Default image
    });

    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Card</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Card Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Card Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <div className="modal-buttons">
            <button type="submit" className="submit-btn">Add Cards</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
