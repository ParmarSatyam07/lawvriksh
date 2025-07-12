import React, { useState } from "react";
import "./AddActivityForm.css";
const AddActivityForm = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd({ title, date, link });
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <form className="modal" onSubmit={handleSubmit}>
        <h2>Add Activity</h2>
        <input
          type="text"
          placeholder="Activity Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="url"
          placeholder="Optional Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <div className="modal-buttons">
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddActivityForm;
