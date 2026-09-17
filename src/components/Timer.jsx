import { useState, useEffect } from 'react';

export default function Timer({ duration, onTimeUp, currentQuestionIndex }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  // Reset timer when question changes
  useEffect(() => {
    setTimeLeft(duration);
  }, [currentQuestionIndex, duration]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onTimeUp]);

  const percentage = (timeLeft / duration) * 100;
  
  let barColor = "var(--comic-green)";
  if (percentage <= 50 && percentage > 20) {
    barColor = "var(--comic-yellow)";
  } else if (percentage <= 20) {
    barColor = "var(--comic-red)";
  }

  return (
    <div className="timer-container">
      <div 
        className="timer-fill" 
        style={{ 
          width: `${percentage}%`,
          backgroundColor: barColor
        }}
      ></div>
    </div>
  );
}
