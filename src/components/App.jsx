import React, { useState } from "react";
import Header from "./Header";
import AddItemSection from "./AddItemSection.jsx";
import Tabs from "./Tabs";
import ItemsContainer from "./ItemsContainer";
import StatsContainer from "./StatsContainer";

function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Revisar el celular al despertarme", completed: true },
    { id: 2, text: "Posponer el ejercicio para mañana", completed: false },
    { id: 3, text: "Comer comida chatarra cuando esté estresado", completed: false }
  ]);
  
  const [activeTab, setActiveTab] = useState("all");
  const [editingId, setEditingId] = useState(null);

  const addItem = (text) => {
    const newItem = {
      id: Date.now(), // Usamos timestamp como ID único
      text: text,
      completed: false
    };
    setItems(prevItems => [...prevItems, newItem]);
  };

  const deleteItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const editItem = (id, newText) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, text: newText } : item
      )
    );
    setEditingId(null);
  };

  // Filtrar items según la pestaña activa
  const getFilteredItems = () => {
    switch(activeTab) {
      case "active":
        return items.filter(item => !item.completed);
      case "completed":
        return items.filter(item => item.completed);
      default:
        return items;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <AddItemSection onAdd={addItem} />
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <ItemsContainer 
          items={getFilteredItems()}
          onDelete={deleteItem}
          onToggleComplete={toggleComplete}
          onEdit={editItem}
          editingId={editingId}
          setEditingId={setEditingId}
        />
        <StatsContainer items={items} />
      </div>
    </div>
  );
}

export default App;