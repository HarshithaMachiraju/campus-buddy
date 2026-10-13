import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StatsSummary from './components/StatsSummary';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import { loadTasksFromStorage, saveTasksToStorage } from './utils/storage';

export default function App() {
  const [tasks, setTasks] = useState(() => loadTasksFromStorage());
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Save to localStorage whenever tasks change
  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  // Handler: Add Task
  const handleAddTask = (newTaskData) => {
    const newTask = {
      id: `task-${Date.now()}`,
      ...newTaskData,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  // Handler: Toggle Task Status
  const handleToggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handler: Delete Task
  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Calculate task counts
  const counts = {
    total: tasks.length,
    pending: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length
  };

  // Filter tasks based on current tab & search
  const filteredTasks = tasks.filter((task) => {
    // 1. Tab filter
    if (filter === 'pending' && task.completed) return false;
    if (filter === 'completed' && !task.completed) return false;

    // 2. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = task.title.toLowerCase().includes(q);
      const matchSubject = task.subject.toLowerCase().includes(q);
      return matchTitle || matchSubject;
    }

    return true;
  });

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Dashboard Content */}
      <main id="main-content">
        {/* Metric Summary Cards */}
        <StatsSummary tasks={tasks} />

        {/* Form on Left, Tasks on Right */}
        <div className="dashboard-grid">
          {/* Add Task Form */}
          <TaskForm onAddTask={handleAddTask} />

          {/* Tasks Column */}
          <section className="tasks-section" aria-label="Task Management Section">
            {/* Filter Tabs & Search Bar */}
            <TaskFilter
              currentFilter={filter}
              onFilterChange={setFilter}
              counts={counts}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            {/* Render Task Cards or Empty State */}
            <TaskList
              tasks={filteredTasks}
              currentFilter={filter}
              searchQuery={searchQuery}
              onToggleComplete={handleToggleComplete}
              onDeleteTask={handleDeleteTask}
            />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer" role="contentinfo">
        <p>
          🎓 Campus Buddy &bull; Made for College Students &bull; All data stays safely in your browser
        </p>
      </footer>
    </div>
  );
}
