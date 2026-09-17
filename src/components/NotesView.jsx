import { notesBank } from '../data/notesBank';

export default function NotesView({ onBack, onStartQuiz }) {
  return (
    <div className="comic-panel" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <h2 className="comic-title" style={{ fontSize: '2.5rem' }}>Nota Ringkas Bab 1</h2>
      
      <div className="mb-4">
        {notesBank.map((note, idx) => (
          <div key={idx} className="result-item" style={{ borderLeft: '10px solid var(--comic-blue)' }}>
            <h3 style={{ fontFamily: "'Bangers', cursive", fontSize: '1.5rem', color: 'var(--comic-blue)', marginBottom: '10px', letterSpacing: '1px' }}>
              {note.title}
            </h3>
            <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.5', fontWeight: 'bold' }}>
              {note.content}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button className="comic-button secondary" onClick={onBack}>
          Kembali
        </button>
        <button className="comic-button primary" onClick={onStartQuiz}>
          Mula Kuiz!
        </button>
      </div>
    </div>
  );
}
