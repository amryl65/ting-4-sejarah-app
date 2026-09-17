import Timer from './Timer';
import { notesBank } from '../data/notesBank';

export default function QuizView({ chapterId, question, currentIndex, total, onAnswer, onTimeout }) {
  const chapterData = notesBank[chapterId];
  return (
    <div className="comic-panel">
      <h2 className="comic-title" style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{chapterData?.title}</h2>
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
