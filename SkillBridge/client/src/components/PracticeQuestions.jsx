import { useState } from "react";
import questions from "../data/questions";

function PracticeQuestions({ role, onBack }) {
  const quiz = questions[role] || [];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  function checkAnswer() {
    if (!selected || answered) return;
    if (selected === quiz[current].answer) setScore((previous) => previous + 1);
    setAnswered(true);
  }

  function nextQuestion() {
    if (current === quiz.length - 1) {
      setFinished(true);
      return;
    }
    setCurrent((previous) => previous + 1);
    setSelected("");
    setAnswered(false);
  }

  function restartQuiz() {
    setCurrent(0);
    setSelected("");
    setScore(0);
    setAnswered(false);
    setFinished(false);
  }

  if (!quiz.length) {
    return <section><button className="back-button" onClick={onBack}>← Dashboard</button><h1>No questions available yet</h1></section>;
  }

  if (finished) {
    const percent = Math.round((score / quiz.length) * 100);
    return (
      <section>
        <div className="quiz-result">
          <div className="result-icon">{percent >= 70 ? "🎉" : "💪"}</div>
          <span className="eyebrow">PRACTICE SESSION COMPLETE</span>
          <h1>{percent >= 70 ? "Great work!" : "Keep practising!"}</h1>
          <p>You finished the {role} practice quiz.</p>
          <div className="score-circle"><strong>{score}/{quiz.length}</strong><span>correct answers</span></div>
          <div className="result-track"><div className="progress-fill" style={{ width: `${percent}%` }} /></div>
          <p className="result-percent">{percent}% score</p>
          <div className="result-actions">
            <button className="button button-primary" onClick={restartQuiz}>Try again</button>
            <button className="button button-outline" onClick={onBack}>Back to dashboard</button>
          </div>
        </div>
      </section>
    );
  }

  const question = quiz[current];

  return (
    <section>
      <button className="back-button" onClick={onBack}>← Dashboard</button>
      <div className="page-heading">
        <span className="eyebrow">TEST YOUR KNOWLEDGE</span>
        <h1>Practice questions</h1>
        <p>A quick quiz for your {role} preparation.</p>
      </div>
      <div className="quiz-panel">
        <div className="quiz-meta"><span>QUESTION {current + 1} OF {quiz.length}</span><span>{Math.round(((current + 1) / quiz.length) * 100)}% completed</span></div>
        <div className="progress-track"><div className="progress-fill" style={{ width: `${((current + 1) / quiz.length) * 100}%` }} /></div>
        <h2 className="question-text">{question.question}</h2>
        <div className="quiz-options">
          {question.options.map((option, index) => {
            let stateClass = selected === option ? "option-selected" : "";
            if (answered && option === question.answer) stateClass = "option-correct";
            else if (answered && selected === option) stateClass = "option-wrong";
            return (
              <button
                type="button"
                key={option}
                className={`quiz-option ${stateClass}`}
                onClick={() => !answered && setSelected(option)}
                disabled={answered}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span>{option}</span>
                {answered && option === question.answer && <span className="option-mark">✓</span>}
              </button>
            );
          })}
        </div>
        {answered && (
          <div className={`answer-feedback ${selected === question.answer ? "feedback-correct" : "feedback-wrong"}`}>
            <strong>{selected === question.answer ? "Correct answer!" : "Not quite."}</strong>
            <span>{selected === question.answer ? "Nice work. Keep it up." : `Correct answer: ${question.answer}`}</span>
          </div>
        )}
        <div className="quiz-footer">
          <span>{answered ? `Current score: ${score} / ${current + 1}` : "Choose one answer to continue."}</span>
          {!answered ? (
            <button className="button button-primary" onClick={checkAnswer} disabled={!selected}>Check answer →</button>
          ) : (
            <button className="button button-primary" onClick={nextQuestion}>{current === quiz.length - 1 ? "See result →" : "Next question →"}</button>
          )}
        </div>
      </div>
    </section>
  );
}

export default PracticeQuestions;
