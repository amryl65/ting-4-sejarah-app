export default function ResultsView({ results, onRestart, onHome }) {
  const total = results.length;
  const correctCount = results.filter(r => r.isCorrect).length;
  const percentage = (correctCount / total) * 100;

  let grade = 'G';
  if (percentage >= 90) grade = 'A+';
  else if (percentage >= 80) grade = 'A';
  else if (percentage >= 70) grade = 'A-';
  else if (percentage >= 65) grade = 'B+';
  else if (percentage >= 60) grade = 'B';
  else if (percentage >= 55) grade = 'C+';
  else if (percentage >= 50) grade = 'C';
  else if (percentage >= 45) grade = 'D';
  else if (percentage >= 40) grade = 'E';

  return (
    <div className="comic-panel">
      <h2 className="comic-title" style={{ fontSize: '2.5rem' }}>Keputusan Kuiz!</h2>
      <div className="text-center mb-4">
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Markah Anda: {percentage}% ({correctCount}/{total})</div>
        <div className="grade-display">{grade}</div>
      </div>

      <div className="mb-4">
        {results.map((item, idx) => (
          <div key={idx} className={`result-item ${item.isCorrect ? 'correct' : 'incorrect'}`}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Soalan {idx + 1}: {item.question.questionText}</div>
            <div style={{ fontSize: '0.95rem' }}>
              <strong>Jawapan Anda: </strong> 
              <span style={{ color: item.isCorrect ? 'var(--comic-green)' : 'var(--comic-red)' }}>
                {item.userAnswer || 'Tiada Jawapan (Masa Tamat)'}
              </span>
            </div>
            {!item.isCorrect && (
              <div style={{ fontSize: '0.95rem', color: 'var(--comic-green)' }}>
                <strong>Jawapan Sebenar: </strong> {item.question.correctAnswer}
              </div>
            )}
            <div className="explanation-box">
              <strong>Penerangan:</strong> {item.question.explanation}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button className="comic-button secondary" onClick={onHome}>
          Menu Utama
        </button>
        <button className="comic-button primary" onClick={onRestart}>
          Cuba Lagi!
        </button>
      </div>
    </div>
  );
}
