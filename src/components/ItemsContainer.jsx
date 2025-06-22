import React from "react";
import ItemCard from "./ItemCard";

function ItemsContainer({ items, onDelete, onToggleComplete, onEdit, editingId, setEditingId }) {
  return (
    <div className="items-container">
      {items.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
          isEditing={editingId === item.id}
          setEditingId={setEditingId}
        />
      ))}
    </div>
  );
}

export default ItemsContainer;