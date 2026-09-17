import { notesBank } from '../data/notesBank';

export default function LandingPage({ onStart, onNotes }) {
  const chapters = Object.keys(notesBank).map(key => ({
    id: parseInt(key),
    title: notesBank[key].title
  }));

  return (
    <div className="comic-panel text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="comic-title" style={{ fontSize: '3rem', marginBottom: '10px' }}>Sejarah Tingkatan 4</h1>
      <p className="question-text mb-4">
        Pilih bab di bawah untuk membaca nota atau memulakan kuiz!
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px',
        textAlign: 'left'
      }}>
        {chapters.map(chapter => (
          <div key={chapter.id} className="result-item" style={{ 
            border: '4px solid var(--comic-black)', 
            borderRadius: '12px', 
            padding: '15px',
            backgroundColor: 'white',
            boxShadow: '4px 4px 0px var(--comic-black)'
          }}>
            <h3 style={{ fontFamily: "'Bangers', cursive", fontSize: '1.8rem', color: 'var(--comic-blue)', marginBottom: '15px' }}>
              {chapter.title}
            </h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="comic-button secondary" 
                style={{ flex: 1, padding: '10px', fontSize: '1.2rem' }}
                onClick={() => onNotes(chapter.id)}
              >
                Baca Nota
              </button>
              <button 
                className="comic-button primary" 
                style={{ flex: 1, padding: '10px', fontSize: '1.2rem' }}
                onClick={() => onStart(chapter.id)}
              >
                Mula Kuiz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
