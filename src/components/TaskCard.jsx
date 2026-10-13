import React, { useState } from 'react';
import {
  Check,
  Trash2,
  Calendar,
  AlertTriangle,
  Flag,
  BookOpen
} from 'lucide-react';

export default function TaskCard({ task, onToggleComplete, onDeleteTask }) {
  const [showConfirm, setShowConfirm] = useState(false);

  // Format Due Date and status
  const getDueStatus = (dateStr) => {
    if (!dateStr) return { text: 'No due date', status: 'normal' };

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const taskDate = new Date(dateStr + 'T00:00:00');

    const diffTime = taskDate.getTime() - today.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric'
    }).format(taskDate);

    if (diffDays < 0) {
      return { text: `Overdue (${formattedDate})`, status: 'overdue' };
    } else if (diffDays === 0) {
      return { text: 'Due Today', status: 'today' };
    } else if (diffDays === 1) {
      return { text: 'Due Tomorrow', status: 'normal' };
    } else {
      return { text: `Due: ${formattedDate}`, status: 'normal' };
    }
  };

  const dueInfo = getDueStatus(task.dueDate);

  return (
    <article
      className={`task-card priority-${task.priority} ${task.completed ? 'completed' : ''} animate-fade-in`}
      id={`task-card-${task.id}`}
      aria-label={`Task: ${task.title}`}
    >
      <div className="task-main-col">
        {/* Toggle Checkbox Button */}
        <div className="checkbox-container">
          <button
            type="button"
            className={`custom-checkbox-btn ${task.completed ? 'checked' : ''}`}
            onClick={() => onToggleComplete(task.id)}
            title={task.completed ? 'Mark as pending' : 'Mark as completed'}
            aria-label={task.completed ? 'Mark task as pending' : 'Mark task as completed'}
          >
            {task.completed && <Check size={14} strokeWidth={3} />}
          </button>
        </div>

        {/* Task Info */}
        <div className="task-details">
          <div className="task-tags-row">
            {/* Subject Tag */}
            <span className="subject-badge">
              <BookOpen size={11} />
              <span>{task.subject}</span>
            </span>

            {/* Priority Badge */}
            <span className={`priority-badge ${task.priority}`}>
              <Flag size={11} />
              <span>{task.priority} Priority</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="task-title">{task.title}</h3>

          {/* Footer Metadata */}
          <div className="task-footer-meta">
            <span className={`due-date-badge ${dueInfo.status}`}>
              <Calendar size={13} />
              <span>{dueInfo.text}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons Column */}
      <div className="task-actions-col">
        {showConfirm ? (
          <div className="delete-confirm-box" role="alert">
            <span>Delete?</span>
            <button
              type="button"
              className="btn-confirm-delete"
              onClick={() => onDeleteTask(task.id)}
              aria-label="Confirm delete task"
            >
              Yes
            </button>
            <button
              type="button"
              className="btn-cancel-delete"
              onClick={() => setShowConfirm(false)}
              aria-label="Cancel delete task"
            >
              No
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="btn-delete-task"
            onClick={() => setShowConfirm(true)}
            title="Delete task"
            aria-label={`Delete task ${task.title}`}
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>
    </article>
  );
}
