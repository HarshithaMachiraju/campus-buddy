import React from 'react';
import TaskCard from './TaskCard';
import EmptyState from './EmptyState';

export default function TaskList({
  tasks,
  currentFilter,
  searchQuery,
  onToggleComplete,
  onDeleteTask
}) {
  if (tasks.length === 0) {
    return (
      <EmptyState
        currentFilter={currentFilter}
        hasSearch={Boolean(searchQuery.trim())}
      />
    );
  }

  return (
    <div className="tasks-list" id="task-list-container">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}
