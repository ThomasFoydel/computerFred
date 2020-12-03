import './App.scss';
// import Speech from "react-speech";
import { useState, useRef, useEffect } from 'react';

import colorTv from './imgs/colorTv.gif';
import staticTv from './imgs/staticTv.gif';

function App() {
  const [question, setQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const handlePrevious = () => {
    setShowAnswer(false);
    setQuestion((q) => (q - 1 > -1 ? q - 1 : questions.length - 1));
  };

  const handleNext = () => {
    setShowAnswer(false);
    setQuestion((q) => (q + 1 < questions.length ? q + 1 : 0));
  };

  const handleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleStart = () => setSpeaking(true);
  const handleEnd = () => setSpeaking(false);

  return (
    <div className='App'>
      <div className='btns'>
        <button onClick={handlePrevious}>
          <i className='fas fa-chevron-left'></i>
        </button>
        <button className='answer-toggle' onClick={handleAnswer}>
          show {showAnswer ? 'question' : 'answer'}
        </button>
        <button onClick={handleNext}>
          <i className='fas fa-chevron-right'></i>
        </button>
      </div>

      <img src={speaking ? staticTv : colorTv} />
      <div>
        <Speech
          voice='Fred'
          text={showAnswer ? questions[question].a : questions[question].q}
          textAsButton={true}
          onstart={handleStart}
          onend={handleEnd}
          // pitch=".5"
          // rate="1"
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
    // var voices = synth.getVoices();
    synth.cancel();
    utterThis.current = new SpeechSynthesisUtterance(text);
    utterThis.current.onstart = onstart;
    utterThis.current.onend = onend;
    synth.speak(utterThis.current);
  }, [text]);
  return <div className='speech'>{text}</div>;
};

const questions = [
  {
    q: 'Differentiate between Real DOM and Virtual DOM',
    a: `Real: updates slow, can directly update HTML, creates new DOM element updates, DOM manipulation is expensive, too much memory waste.
  Virtual: updates faster, can't directly update HTML, update the JSX if element updates, DOM manipulation is easy, no memory waste.`,
  },

  {
    q: 'What is react?',
    a: `React is a front-end JavaScript library developed by Facebook. It follows the component based approach which helps in building reusable UI components`,
  },

  {
    q: 'What are the features of React?',
    a:
      'It uses the virtual DOM instead of the real DOM. It uses server-side rendering. It follows uni-directional data flow or data binding.',
  },
  {
    q: 'List some of the major advantages of React',
    a:
      "It increases the application's performance. It can be conveniently used on the client as well as server side. Because of JSX, code's readability increases. React is easy to integrate with other frameworks like Meteor, Angular, etc. Using React, writing UI test cases become extremely easy.",
  },
];
export default App;
