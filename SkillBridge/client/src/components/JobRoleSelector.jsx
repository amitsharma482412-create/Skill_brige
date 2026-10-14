import { useState } from "react";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Analyst",
  "AI/ML Engineer",
  "Java Developer"
];

function JobRoleSelector({ onStartPreparation }) {
  const [role, setRole] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (role) onStartPreparation(role);
  }

  return (
    <div className="welcome-screen">
      <div className="welcome-glow glow-one" />
      <div className="welcome-glow glow-two" />
      <div className="welcome-card">
        <div className="brand brand-large">
          <span className="brand-mark">S</span>
          <span>SkillBridge</span>
        </div>
        <span className="eyebrow">YOUR CAREER, YOUR NEXT STEP</span>
        <h1>Build skills.<br /><span>Bridge your future.</span></h1>
        <p className="welcome-copy">
          A simple, guided space to learn job-ready skills, practise interview questions,
          and track your preparation progress.
        </p>
        <form onSubmit={handleSubmit} className="role-form">
          <label htmlFor="job-role">Which role are you preparing for?</label>
          <select id="job-role" value={role} onChange={(event) => setRole(event.target.value)} required>
            <option value="">Choose your target role</option>
            {roles.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <button className="button button-primary button-wide" type="submit">
            Start preparing <span aria-hidden="true">→</span>
          </button>
        </form>
        <div className="welcome-foot">
          <span>✓ Learn step by step</span>
          <span>✓ Practice questions</span>
          <span>✓ Track progress</span>
        </div>
      </div>
    </div>
  );
}

export default JobRoleSelector;
