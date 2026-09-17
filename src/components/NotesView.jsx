import { notesBank } from '../data/notesBank';

export default function NotesView({ onBack, onStartQuiz }) {
  return (
    <div className="comic-panel" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <h2 className="comic-title" style={{ fontSize: '2.5rem' }}>Nota Ringkas Bab 1</h2>
      
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/d-mjCb7H5ME" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={{ border: '4px solid var(--comic-black)', borderRadius: '8px', boxShadow: '4px 4px 0px var(--comic-black)' }}
        ></iframe>
      </div>

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
