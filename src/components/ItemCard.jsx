import React, { useState } from "react";

function ItemCard({ item, onDelete, onToggleComplete, onEdit, isEditing, setEditingId }) {
  const [editValue, setEditValue] = useState(item.text);

  const handleEdit = () => {
    if (editValue.trim()) {
      onEdit(item.id, editValue.trim());
    } else {
      setEditingId(null);
      setEditValue(item.text);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
    if (e.key === 'Escape') {
      setEditingId(null);
      setEditValue(item.text);
    }
  };

  return (
    <div className={`item-card ${item.completed ? 'avoided' : ''}`}>
      <div className="item-content">
        <span 
          className={`checkbox ${item.completed ? 'checked' : ''}`}
          onClick={() => onToggleComplete(item.id)}
        >
          {item.completed && <i className="fas fa-check"></i>}
        </span>
        
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={handleKeyPress}
            className="edit-input"
            autoFocus
          />
        ) : (
          <span className="item-text">{item.text}</span>
        )}
      </div>
      
      <div className="item-actions">
        <button 
          className="action-btn edit-btn"
          onClick={() => setEditingId(item.id)}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button 
          className="action-btn delete-btn"
          onClick={() => onDelete(item.id)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default ItemCard;