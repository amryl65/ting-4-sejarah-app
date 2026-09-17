import Timer from './Timer';

export default function QuizView({ question, currentIndex, total, onAnswer, onTimeout }) {
  return (
    <div className="comic-panel">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontWeight: 'bold' }}>
        <span>Topik: {question.topic}</span>
        <span>Soalan {currentIndex + 1} / {total}</span>
      </div>
      
      <Timer duration={30} onTimeUp={onTimeout} currentQuestionIndex={currentIndex} />

      <h3 className="question-text">{question.questionText}</h3>

      <div className="options-grid">
        {question.options.map((option, idx) => (
          <button 
            key={idx} 
            className="option-btn"
            onClick={() => onAnswer(option)}
          >
            {String.fromCharCode(65 + idx)}. {option}
          </button>
        ))}
      </div>
    </div>
  );
}
