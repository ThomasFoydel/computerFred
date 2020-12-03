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
  {
    q: 'What are the limitations of React?',
    a:
      "React is just a library, not a full-blown framework. As such when building something with React you will have to include other libraries to handle other parts of an application, such as application state. React is mainly written using JSX & ES6, transpiled using Babel and build & packaged using Webpack & npm. Those tools are requirements to be effective when using React, however their inner workings & processes are not easy to learn and require significant time to understand. On the other hand if you skip learning those things, your build might fail with error messages that have no meaning to you and you will be stuck with code that doesn't work and you have no power to correct by yourself.",
  },
];
export default questions;
