import { useEffect, useState } from "react";
import JobRoleSelector from "./components/JobRoleSelector";
import Dashboard from "./components/Dashboard";
import Learning from "./components/Learning";
import TopicDetails from "./components/TopicDetails";
import PracticeQuestions from "./components/PracticeQuestions";
import Progress from "./components/Progress";

const STORAGE_KEY = "skillbridge-progress-v1";

function readSavedProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function App() {
  const [selectedRole, setSelectedRole] = useState("");
  const [page, setPage] = useState("select");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [completedByRole, setCompletedByRole] = useState(readSavedProgress);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedByRole));
  }, [completedByRole]);

  const completedTopics = completedByRole[selectedRole] || [];

  function handleStartPreparation(role) {
    setSelectedRole(role);
    setPage("dashboard");
  }

  function handleCompleteTopic(topic) {
    setCompletedByRole((previous) => {
      const roleTopics = previous[selectedRole] || [];
      if (roleTopics.includes(topic)) return previous;
      return { ...previous, [selectedRole]: [...roleTopics, topic] };
    });
  }

  function resetRole() {
    setSelectedRole("");
    setSelectedTopic("");
    setPage("select");
  }

  if (page === "select") {
    return <JobRoleSelector onStartPreparation={handleStartPreparation} />;
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => setPage("dashboard")} aria-label="Go to dashboard">
          <span className="brand-mark">S</span>
          <span>SkillBridge</span>
        </button>
        <div className="topbar-right">
          <span className="role-pill">{selectedRole}</span>
          <button className="button button-ghost button-small" onClick={resetRole}>
            Change role
          </button>
        </div>
      </header>

      <main className="main-content">
        {page === "dashboard" && (
          <Dashboard
            role={selectedRole}
            completedCount={completedTopics.length}
            onLearning={() => setPage("learning")}
            onProgress={() => setPage("progress")}
            onPractice={() => setPage("practice")}
          />
        )}

        {page === "learning" && (
          <Learning
            role={selectedRole}
            completedTopics={completedTopics}
            onStartTopic={(topic) => {
              setSelectedTopic(topic);
              setPage("topic");
            }}
            onBack={() => setPage("dashboard")}
          />
        )}

        {page === "topic" && (
          <TopicDetails
            role={selectedRole}
            topic={selectedTopic}
            isCompleted={completedTopics.includes(selectedTopic)}
            onComplete={() => handleCompleteTopic(selectedTopic)}
            onBack={() => setPage("learning")}
          />
        )}

        {page === "practice" && (
          <PracticeQuestions
            key={selectedRole}
            role={selectedRole}
            onBack={() => setPage("dashboard")}
          />
        )}

        {page === "progress" && (
          <Progress
            role={selectedRole}
            completedTopics={completedTopics}
            onBack={() => setPage("dashboard")}
            onLearning={() => setPage("learning")}
          />
        )}
      </main>

      <footer className="footer">Keep learning. Keep building. Keep growing.</footer>
    </div>
  );
}

export default App;
