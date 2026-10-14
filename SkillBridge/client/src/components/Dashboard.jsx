function Dashboard({ role, completedCount, onLearning, onProgress, onPractice }) {
  return (
    <section>
      <div className="page-heading">
        <span className="eyebrow">YOUR PREPARATION SPACE</span>
        <h1>Welcome to your dashboard</h1>
        <p>Small, consistent steps can take you closer to your career goal.</p>
      </div>

      <div className="dashboard-banner">
        <div>
          <span className="banner-label">YOUR TARGET ROLE</span>
          <h2>{role}</h2>
          <p>Pick up where you left off and keep moving forward.</p>
        </div>
        <div className="banner-stat">
          <span className="stat-number">{completedCount}</span>
          <span className="stat-caption">topics completed</span>
        </div>
      </div>

      <div className="section-title-row">
        <div>
          <h2>What would you like to do?</h2>
          <p>Choose an area to continue your preparation.</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <article className="feature-card feature-learning">
          <div className="feature-icon">📚</div>
          <span className="feature-kicker">01 · LEARN</span>
          <h3>Learn skills</h3>
          <p>Explore key topics for your selected role and mark each topic complete as you learn.</p>
          <button className="button button-primary" onClick={onLearning}>Start learning <span>→</span></button>
        </article>
        <article className="feature-card feature-practice">
          <div className="feature-icon">💻</div>
          <span className="feature-kicker">02 · PRACTICE</span>
          <h3>Practice questions</h3>
          <p>Test your knowledge with role-based multiple-choice questions and instant feedback.</p>
          <button className="button button-primary" onClick={onPractice}>Practice questions <span>→</span></button>
        </article>
        <article className="feature-card feature-progress">
          <div className="feature-icon">📈</div>
          <span className="feature-kicker">03 · PROGRESS</span>
          <h3>Track progress</h3>
          <p>See how many learning topics you have completed and what you can work on next.</p>
          <button className="button button-outline" onClick={onProgress}>View progress <span>→</span></button>
        </article>
      </div>
    </section>
  );
}

export default Dashboard;
