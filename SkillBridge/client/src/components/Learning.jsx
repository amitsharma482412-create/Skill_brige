import jobRoles from "../data/jobRoles";

function Learning({ role, completedTopics, onStartTopic, onBack }) {
  const topics = jobRoles[role] || [];
  const completedCount = topics.filter((topic) => completedTopics.includes(topic.name)).length;
  const percent = topics.length ? Math.round((completedCount / topics.length) * 100) : 0;

  return (
    <section>
      <button className="back-button" onClick={onBack}>← Dashboard</button>
      <div className="page-heading">
        <span className="eyebrow">LEARNING PATH</span>
        <h1>Learn at your own pace</h1>
        <p>Follow these topics to build your {role} skills.</p>
      </div>
      <div className="progress-summary">
        <div className="summary-top">
          <div><strong>Your learning path</strong><span>{completedCount} of {topics.length} topics complete</span></div>
          <strong>{percent}%</strong>
        </div>
        <div className="progress-track"><div className="progress-fill" style={{ width: `${percent}%` }} /></div>
      </div>
      <div className="topic-list">
        {topics.map((topic, index) => {
          const isCompleted = completedTopics.includes(topic.name);
          return (
            <article className={`topic-card ${isCompleted ? "topic-done" : ""}`} key={topic.name}>
              <div className="topic-number">{isCompleted ? "✓" : String(index + 1).padStart(2, "0")}</div>
              <div className="topic-copy">
                <div className="topic-title-line">
                  <h3>{topic.name}</h3>
                  {isCompleted && <span className="completed-label">Completed</span>}
                </div>
                <p>{topic.description}</p>
              </div>
              <button className="button button-outline topic-button" onClick={() => onStartTopic(topic.name)}>
                {isCompleted ? "Review topic" : "Open topic"} <span>→</span>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Learning;
