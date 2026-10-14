import jobRoles from "../data/jobRoles";

function Progress({ role, completedTopics, onBack, onLearning }) {
  const topics = jobRoles[role] || [];
  const completedCount = topics.filter((topic) => completedTopics.includes(topic.name)).length;
  const remaining = topics.length - completedCount;
  const percent = topics.length ? Math.round((completedCount / topics.length) * 100) : 0;

  return (
    <section>
      <button className="back-button" onClick={onBack}>← Dashboard</button>
      <div className="page-heading">
        <span className="eyebrow">YOUR ACHIEVEMENTS</span>
        <h1>Progress overview</h1>
        <p>Every topic you finish is a step towards your {role} goal.</p>
      </div>
      <div className="progress-hero">
        <div className="progress-hero-copy">
          <span className="banner-label">OVERALL LEARNING PROGRESS</span>
          <h2>{percent}% <span>complete</span></h2>
          <p>{completedCount === topics.length ? "Amazing! You completed every topic in this learning path." : `You have completed ${completedCount} of ${topics.length} topics. Keep going!`}</p>
          <div className="progress-track progress-track-light"><div className="progress-fill" style={{ width: `${percent}%` }} /></div>
        </div>
        <div className="progress-ring"><strong>{completedCount}<small> / {topics.length}</small></strong><span>topics done</span></div>
      </div>
      <div className="stats-grid">
        <div className="stat-card"><span className="stat-icon">✓</span><strong>{completedCount}</strong><span>Completed topics</span></div>
        <div className="stat-card"><span className="stat-icon">📘</span><strong>{remaining}</strong><span>Topics remaining</span></div>
        <div className="stat-card"><span className="stat-icon">🎯</span><strong>{percent}%</strong><span>Overall completion</span></div>
      </div>
      <div className="progress-list-panel">
        <div className="section-title-row"><div><h2>Your learning checklist</h2><p>Completed topics are saved in this browser.</p></div></div>
        {topics.map((topic, index) => {
          const done = completedTopics.includes(topic.name);
          return <div className="progress-topic-row" key={topic.name}><span className={`status-dot ${done ? "status-done" : ""}`}>{done ? "✓" : index + 1}</span><span>{topic.name}</span><span className={done ? "completed-label" : "pending-label"}>{done ? "Completed" : "Not started"}</span></div>;
        })}
        {remaining > 0 && <button className="button button-primary progress-cta" onClick={onLearning}>Continue learning →</button>}
      </div>
    </section>
  );
}

export default Progress;
