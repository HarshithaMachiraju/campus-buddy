import React from 'react';
import { ClipboardList, CheckCircle2, SearchX, Sparkles } from 'lucide-react';

export default function EmptyState({ currentFilter, hasSearch, onResetFilter }) {
  if (hasSearch) {
    return (
      <div className="empty-state-card animate-fade-in" id="empty-state-search">
        <div className="empty-illustration">
          <SearchX size={34} />
        </div>
        <h3>No matching tasks found</h3>
        <p>Try searching for a different keyword or subject course.</p>
      </div>
    );
  }

  if (currentFilter === 'completed') {
    return (
      <div className="empty-state-card animate-fade-in" id="empty-state-completed">
        <div className="empty-illustration">
          <ClipboardList size={34} />
        </div>
        <h3>No completed tasks yet</h3>
        <p>Tick off items from your pending list as you finish your college assignments!</p>
      </div>
    );
  }

  if (currentFilter === 'pending') {
    return (
      <div className="empty-state-card animate-fade-in" id="empty-state-pending">
        <div className="empty-illustration">
          <Sparkles size={34} />
        </div>
        <h3>All caught up! 🎉</h3>
        <p>You have zero pending tasks on your plate. Enjoy your free time or relax!</p>
      </div>
    );
  }

  return (
    <div className="empty-state-card animate-fade-in" id="empty-state-all">
      <div className="empty-illustration">
        <ClipboardList size={34} />
      </div>
      <h3>Your task schedule is empty</h3>
      <p>Use the form on the left to add your first assignment, lab submission, or study goal!</p>
    </div>
  );
}
