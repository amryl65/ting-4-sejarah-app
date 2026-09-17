export default function LandingPage({ onStart, onNotes }) {
  return (
    <div className="comic-panel text-center">
      <h1 className="comic-title">Sejarah Tingkatan 4<br/>Bab 1</h1>
      <h2 className="mb-4" style={{ fontFamily: "'Bangers', cursive", fontSize: '2.5rem', color: 'var(--comic-blue)' }}>
        Warisan Negara Bangsa
      </h2>
      <p className="question-text mb-4">
        Uji pengetahuan anda! Kuiz ini mengandungi 5 soalan rawak tentang latar belakang negara bangsa, Kesultanan Melayu Melaka dan peranan rakyat.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button className="comic-button secondary" onClick={onNotes}>
          Baca Nota
        </button>
        <button className="comic-button primary" onClick={onStart}>
          Mula Kuiz!
        </button>
      </div>
    </div>
  );
}
