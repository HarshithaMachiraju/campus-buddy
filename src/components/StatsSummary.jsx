import React from 'react';
import { BookOpen, Clock, CheckCircle2, TrendingUp } from 'lucide-react';

export default function StatsSummary({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <section className="stats-grid" aria-label="Task Statistics Summary">
      {/* Total Tasks Card */}
      <div className="stat-card total" id="stat-total-tasks">
        <div className="stat-header">
          <span className="stat-title">Total Tasks</span>
          <div className="stat-icon-wrap" aria-hidden="true">
            <BookOpen size={20} />
          </div>
        </div>
        <div className="stat-value">{total}</div>
        <div className="stat-subtext">All scheduled items</div>
      </div>

      {/* Pending Tasks Card */}
      <div className="stat-card pending" id="stat-pending-tasks">
        <div className="stat-header">
          <span className="stat-title">Pending Tasks</span>
          <div className="stat-icon-wrap" aria-hidden="true">
            <Clock size={20} />
          </div>
        </div>
        <div className="stat-value">{pending}</div>
        <div className="stat-subtext">Awaiting completion</div>
      </div>

      {/* Completed Tasks Card */}
      <div className="stat-card completed" id="stat-completed-tasks">
        <div className="stat-header">
          <span className="stat-title">Completed Tasks</span>
          <div className="stat-icon-wrap" aria-hidden="true">
            <CheckCircle2 size={20} />
          </div>
        </div>
        <div className="stat-value">{completed}</div>
        <div className="stat-subtext">Finished assignments</div>
      </div>

      {/* Productivity Progress Card */}
      <div className="stat-card progress-card" id="stat-progress-rate">
        <div className="stat-header">
          <span className="stat-title">Completion Rate</span>
          <div className="stat-icon-wrap" aria-hidden="true">
            <TrendingUp size={20} />
          </div>
        </div>
        <div className="stat-value">{percentage}%</div>
        <div className="progress-bar-bg" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </section>
  );
}
