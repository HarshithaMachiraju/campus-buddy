import React from 'react';
import { Search } from 'lucide-react';

export default function TaskFilter({
  currentFilter,
  onFilterChange,
  counts,
  searchQuery,
  onSearchChange
}) {
  const tabs = [
    { key: 'all', label: 'All Tasks', count: counts.total },
    { key: 'pending', label: 'Pending', count: counts.pending },
    { key: 'completed', label: 'Completed', count: counts.completed }
  ];

  return (
    <div className="tasks-control-bar" role="region" aria-label="Task Filter & Search">
      {/* Filter Tabs */}
      <div className="filter-tabs" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            id={`filter-tab-${tab.key}`}
            role="tab"
            aria-selected={currentFilter === tab.key}
            className={`filter-tab-btn ${currentFilter === tab.key ? 'active' : ''}`}
            onClick={() => onFilterChange(tab.key)}
          >
            <span>{tab.label}</span>
            <span className="tab-badge">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="search-and-sort">
        <div className="search-input-wrap">
          <Search size={15} className="search-icon" aria-hidden="true" />
          <input
            id="task-search-input"
            type="text"
            className="search-input"
            placeholder="Search by title or subject..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search tasks"
          />
        </div>
      </div>
    </div>
  );
}
