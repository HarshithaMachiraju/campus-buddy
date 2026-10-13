import React, { useState } from 'react';
import { PlusCircle, AlertCircle, BookmarkPlus, CalendarIcon, Flag } from 'lucide-react';

const COMMON_SUBJECTS = [
  'Data Structures',
  'Operating Systems',
  'DBMS',
  'Computer Networks',
  'Mathematics',
  'Web Development',
  'Machine Learning',
  'Physics',
  'English / Soft Skills'
];

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Task title is required.';
    } else if (title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters.';
    }

    if (!subject.trim()) {
      newErrors.subject = 'Please enter or select a subject.';
    }

    if (!dueDate) {
      newErrors.dueDate = 'Due date is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    onAddTask({
      title: title.trim(),
      subject: subject.trim(),
      dueDate,
      priority
    });

    // Reset Form
    setTitle('');
    setSubject('');
    setDueDate('');
    setPriority('Medium');
    setErrors({});
  };

  return (
    <aside className="form-card" aria-labelledby="add-task-heading">
      <div className="form-header">
        <div className="form-header-icon" aria-hidden="true">
          <BookmarkPlus size={20} />
        </div>
        <h2 id="add-task-heading">Add New Task</h2>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Title Field */}
        <div className="form-group">
          <label htmlFor="task-title" className="form-label">
            Task Title <span className="required">*</span>
          </label>
          <input
            id="task-title"
            type="text"
            className={`form-input ${errors.title ? 'error' : ''}`}
            placeholder="e.g., Complete Assignment 3"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title) setErrors((prev) => ({ ...prev, title: '' }));
            }}
          />
          {errors.title && (
            <div className="error-message" role="alert">
              <AlertCircle size={14} />
              <span>{errors.title}</span>
            </div>
          )}
        </div>

        {/* Subject Field */}
        <div className="form-group">
          <label htmlFor="task-subject" className="form-label">
            Subject / Course <span className="required">*</span>
          </label>
          <input
            id="task-subject"
            type="text"
            list="subject-suggestions"
            className={`form-input ${errors.subject ? 'error' : ''}`}
            placeholder="e.g., Data Structures or Physics"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              if (errors.subject) setErrors((prev) => ({ ...prev, subject: '' }));
            }}
          />
          <datalist id="subject-suggestions">
            {COMMON_SUBJECTS.map((sub) => (
              <option key={sub} value={sub} />
            ))}
          </datalist>
          {errors.subject && (
            <div className="error-message" role="alert">
              <AlertCircle size={14} />
              <span>{errors.subject}</span>
            </div>
          )}
        </div>

        {/* Due Date Field */}
        <div className="form-group">
          <label htmlFor="task-date" className="form-label">
            Due Date <span className="required">*</span>
          </label>
          <input
            id="task-date"
            type="date"
            className={`form-input ${errors.dueDate ? 'error' : ''}`}
            value={dueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
              if (errors.dueDate) setErrors((prev) => ({ ...prev, dueDate: '' }));
            }}
          />
          {errors.dueDate && (
            <div className="error-message" role="alert">
              <AlertCircle size={14} />
              <span>{errors.dueDate}</span>
            </div>
          )}
        </div>

        {/* Priority Selector */}
        <div className="form-group">
          <label className="form-label">
            Priority Level <span className="required">*</span>
          </label>
          <div className="priority-pill-group" role="radiogroup" aria-label="Priority level">
            {['Low', 'Medium', 'High'].map((p) => (
              <div key={p} className="priority-option">
                <input
                  type="radio"
                  id={`priority-${p}`}
                  name="priority"
                  value={p}
                  checked={priority === p}
                  onChange={(e) => setPriority(e.target.value)}
                />
                <label htmlFor={`priority-${p}`} className="priority-label">
                  <Flag size={12} />
                  <span>{p}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" id="btn-add-task" className="btn-submit">
          <PlusCircle size={18} />
          <span>Add Task to Schedule</span>
        </button>
      </form>
    </aside>
  );
}
