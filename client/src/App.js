import './App.scss';
import { useState, useRef, useEffect } from 'react';
import upWhoosh from './audio/upWhoosh.mp3';
import colorTv from './imgs/colorTv.gif';
import staticTv from './imgs/staticTv.gif';
import downClick from './audio/downClick.mp3';
import questions from './util/questions.js';
function App() {
  const [question, setQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  let mouseUpSound = new Audio(upWhoosh);
  let mouseDownSound = new Audio(downClick);
  mouseDownSound.volume = 0.15;

  const handlePrevious = () => {
    mouseUpSound.play();
    setShowAnswer(false);
    setQuestion((q) => (q - 1 > -1 ? q - 1 : questions.length - 1));
  };

  const handleNext = () => {
    mouseUpSound.play();
    setShowAnswer(false);
    setQuestion((q) => (q + 1 < questions.length ? q + 1 : 0));
  };

  const handleAnswer = () => {
    mouseUpSound.play();
    setShowAnswer(!showAnswer);
  };

  const handleStart = () => setSpeaking(true);
  const handleEnd = () => setSpeaking(false);

  return (
    <div className='App'>
      <div className='btns'>
        <button
          onMouseDown={() => mouseDownSound.play()}
          onClick={handlePrevious}
        >
          <i className='fas fa-2x fa-chevron-left'></i>
        </button>
        <button
          className='answer-toggle'
          onMouseDown={() => mouseDownSound.play()}
          onClick={handleAnswer}
        >
          show {showAnswer ? 'question' : 'answer'}
        </button>
        <button onClick={handleNext} onMouseDown={() => mouseDownSound.play()}>
          <i className='fas fa-2x fa-chevron-right'></i>
        </button>
      </div>

      <img className='fred' alt='fred' src={speaking ? staticTv : colorTv} />
      <div>
        <Speech
          voice='Fred'
          text={showAnswer ? questions[question].a : questions[question].q}
          textAsButton={true}
          onstart={handleStart}
          onend={handleEnd}
        ></Speech>
      </div>
    </div>
  );
}

// Samantha, Fred, Victoria, Daniel, Alex
// Google US English

const Speech = ({ text, voice, onend, onstart }) => {
  var synth = window.speechSynthesis;
  var utterThis = useRef();
  useEffect(() => {
    synth.cancel();
    utterThis.current = new SpeechSynthesisUtterance(text);
    utterThis.current.onstart = onstart;
    utterThis.current.onend = onend;
    synth.speak(utterThis.current);
  }, [text]);
  return <div className='speech'>{text}</div>;
};

export default App;