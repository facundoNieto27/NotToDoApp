import React, { useState } from "react";

function AddItemSection({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="add-item-section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="¿Qué NO debo hacer?"
          className="item-input"
        />
        <button type="submit" className="add-btn">
          <i className="fas fa-plus"></i> Añadir
        </button>
      </form>
    </div>
  );
}

export default AddItemSection;