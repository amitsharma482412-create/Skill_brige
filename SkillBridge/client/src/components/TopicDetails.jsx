import jobRoles from "../data/jobRoles";

function TopicDetails({ role, topic, isCompleted, onComplete, onBack }) {
  const item = (jobRoles[role] || []).find((entry) => entry.name === topic);

  return (
    <section>
      <button className="back-button" onClick={onBack}>← Back to learning path</button>
      <div className="page-heading">
        <span className="eyebrow">TOPIC DETAILS · {role.toUpperCase()}</span>
        <h1>{topic}</h1>
        <p>{item?.description || "Explore this topic and practise what you learn."}</p>
      </div>
      <div className="lesson-panel">
        <div className="lesson-icon">✦</div>
        <h2>Your learning checklist</h2>
        <p>Use this simple checklist as you study. You can add your own notes in your editor or notebook.</p>
        <ul className="lesson-checklist">
          <li><span>01</span><div><strong>Understand the basics</strong><p>Read a beginner explanation and note important terms.</p></div></li>
          <li><span>02</span><div><strong>Try a small example</strong><p>Write or practise a short example related to {topic}.</p></div></li>
          <li><span>03</span><div><strong>Revise and explain</strong><p>Explain the main idea in your own words without looking at notes.</p></div></li>
        </ul>
        <button className={`button ${isCompleted ? "button-success" : "button-primary"} button-wide`} onClick={onComplete} disabled={isCompleted}>
          {isCompleted ? "✓ Topic completed" : "Mark topic as complete"}
        </button>
        {isCompleted && <p className="success-note">Your progress has been saved in this browser.</p>}
      </div>
    </section>
  );
}

export default TopicDetails;
