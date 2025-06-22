import React from "react";

function StatsContainer({ items }) {
  const completedCount = items.filter(item => item.completed).length;
  const totalCount = items.length;

  return (
    <div className="stats-container">
      <div className="stat-card">
        <h3>Total de hábitos</h3>
        <p className="stat-value">{totalCount}</p>
      </div>
      <div className="stat-card">
        <h3>Hábitos evitados</h3>
        <p className="stat-value">{completedCount}</p>
      </div>
    </div>
  );
}

export default StatsContainer;