import React from "react";

function Tabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: "all", label: "Todos" },
    { id: "active", label: "Pendientes" },
    { id: "completed", label: "Evitados" }
  ];

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;