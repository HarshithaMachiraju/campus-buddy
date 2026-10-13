import React from 'react';
import { GraduationCap, Calendar, Sparkles } from 'lucide-react';

export default function Navbar({ onQuickFocusForm }) {
  // Format current date for college students
  const todayFormatted = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  }).format(new Date());

  return (
    <header className="navbar" role="banner">
      <div className="brand-wrapper">
        <div className="brand-icon" aria-hidden="true">
          <GraduationCap size={28} />
        </div>
        <div className="brand-info">
          <h1>Campus Buddy</h1>
          <p className="brand-tagline">Smart College Task & Deadline Planner</p>
        </div>
      </div>

      <div className="header-meta">
        <div className="date-pill" title="Today's Date">
          <Calendar size={15} />
          <span>{todayFormatted}</span>
        </div>
      </div>
    </header>
  );
}
