import './App.scss';
import { useState, useRef, useEffect } from 'react';
import upWhoosh from './audio/upWhoosh.mp3';
import colorTv from './imgs/colorTv.gif';
import staticTv from './imgs/staticTv.gif';
import downClick from './audio/downClick.mp3';
import questionStore from './util/questionStore.js';

function App() {
  const [question, setQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [topic, setTopic] = useState('javascript');

  let questions = questionStore[topic];

  let mouseUpSound = new Audio(upWhoosh);
  let mouseDownSound = new Audio(downClick);
  mouseDownSound.volume = 0.15;

  const handlePrevious = () => {
    makeMouseUpSound();
    setShowAnswer(false);
    setQuestion((q) => (q - 1 > -1 ? q - 1 : questions.length - 1));
  };

  const handleNext = () => {
    makeMouseUpSound();
    setShowAnswer(false);
    setQuestion((q) => (q + 1 < questions.length ? q + 1 : 0));
  };

  const handleAnswer = () => {
    makeMouseUpSound();
    setShowAnswer(!showAnswer);
  };

  const makeMouseUpSound = () => {
    mouseDownSound.pause();
    mouseUpSound.pause();
    mouseUpSound.play();
  };

  const handleStart = () => setSpeaking(true);
  const handleEnd = () => setSpeaking(false);

  const handleMouseDown = () => {
    mouseDownSound.pause();
    mouseUpSound.pause();
    mouseDownSound.play();
  };

  const handleTopic = ({ target: { id } }) => {
    setTopic(id);
  };

  return (
    <div className='App'>
      <div className='btns'>
        <button onMouseDown={handleMouseDown} onClick={handlePrevious}>
          <i className='fas fa-2x fa-chevron-left'></i>
        </button>
        <button
          className='answer-toggle'
          onMouseDown={handleMouseDown}
          onClick={handleAnswer}
        >
          show {showAnswer ? 'question' : 'answer'}
        </button>
        <button onClick={handleNext} onMouseDown={handleMouseDown}>
          <i className='fas fa-2x fa-chevron-right'></i>
        </button>
      </div>

      <div className='topic-selector'>
        {Object.keys(questionStore).map((key) => (
          <button id={key} key={key} onClick={handleTopic}>
            {key}
          </button>
        ))}
      </div>

      <img className='fred' alt='fred' src={speaking ? staticTv : colorTv} />
      <div>
        <Speech
          voice='Fred'
          text={showAnswer ? questions[question].a : questions[question].q}
          textAsButton={true}
          onstart={handleStart}
          onend={handleEnd}
          showAnswer={showAnswer}
        ></Speech>
      </div>
    </div>
  );
}

// Samantha, Fred, Victoria, Daniel, Alex
// Google US English

const Speech = ({ text, voice, onend, onstart, showAnswer }) => {
  var synth = window.speechSynthesis;
  var utterThis = useRef();
  useEffect(() => {
    synth.cancel();
    utterThis.current = new SpeechSynthesisUtterance(`... ... ${text}`);
    utterThis.current.onstart = onstart;
    utterThis.current.onend = onend;
    synth.speak(utterThis.current);
  }, [text]);
  return (
    <div
      className='speech'
      style={{ filter: showAnswer ? 'invert(100%)' : 'invert(0%)' }}
    >
      {text}
    </div>
  );
};

export default App;
