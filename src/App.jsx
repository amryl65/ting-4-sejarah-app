import { useState } from 'react';
import LandingPage from './components/LandingPage';
import QuizView from './components/QuizView';
import ResultsView from './components/ResultsView';
import NotesView from './components/NotesView';
import { getRandomQuestions } from './data/questionBank';
import './App.css';

function App() {
  const [appState, setAppState] = useState('landing'); // 'landing', 'quiz', 'results', 'notes'
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState([]);

  const startQuiz = () => {
    const selectedQuestions = getRandomQuestions(5);
    setQuestions(selectedQuestions);
    setCurrentIndex(0);
    setResults([]);
    setAppState('quiz');
  };

  const showNotes = () => {
    setAppState('notes');
  };

  const goHome = () => {
    setAppState('landing');
  };

  const handleAnswer = (answer) => {
    const currentQ = questions[currentIndex];
    const isCorrect = answer === currentQ.correctAnswer;
    
    setResults(prev => [...prev, {
      question: currentQ,
      userAnswer: answer,
      isCorrect
    }]);
    
    goToNext();
  };

  const handleTimeout = () => {
    const currentQ = questions[currentIndex];
    setResults(prev => [...prev, {
      question: currentQ,
      userAnswer: null, // Timeout
      isCorrect: false
    }]);

    goToNext();
  };

  const goToNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setAppState('results');
    }
  };

  return (
    <>
      {appState === 'landing' && <LandingPage onStart={startQuiz} onNotes={showNotes} />}
      {appState === 'notes' && <NotesView onBack={goHome} onStartQuiz={startQuiz} />}
      {appState === 'quiz' && (
        <QuizView 
          question={questions[currentIndex]} 
          currentIndex={currentIndex}
          total={questions.length}
          onAnswer={handleAnswer}
          onTimeout={handleTimeout}
        />
      )}
      {appState === 'results' && <ResultsView results={results} onRestart={startQuiz} onHome={goHome} />}
    </>
  );
}

export default App;
