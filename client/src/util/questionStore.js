const questionStore = {
  javascript: [
    {
      q: 'What do call, apply, and bind do?',
      a:
        'Allow you to invoke the method of an object but using a different object (or array of objects in the case of apply) as the "this"',
    },
  ],
  react: [
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
        'It uses the virtual DOM instead of the real DOM. It can use server-side rendering. It follows uni-directional data flow or data binding.',
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
    {
      q: 'What is JSX?',
      a:
        'JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance. TLDR: lets you write HTML in a JS file',
    },
    {
      q: 'Explain the virtual DOM',
      a:
        'It is a JavaScript object, a lightweight copy of the real DOM, a tree-like structure of nodes, and react updates the virtual DOM and checks the diff from real DOM, only updates parts that are different, better than re-painting the whole DOM',
    },
    {
      q: 'How is React different from Angular',
      a:
        "Angular works directly on the real DOM, React has virtual DOM. React has one way binding, angular two way. Angular is MVC, React just 'V' (arguably). React is objectively better according to everyone.",
    },
    {
      q: 'What do we mean by "In React, everything is a component"?',
      a:
        'In React, we divide the UI into components which render other components in a parent/child tree structure. The JS, HTML, and CSS for each chunk of the page is grouped together. They can be reused easily and react can update each component without repainting the others to increase performance.',
    },
    {
      q: 'Explain the purpose of render() in React.',
      a:
        'This is the function that react components use to rendered their JSX as html in the DOM. A component needs to be rendered for it to be seen or interacted with by the user.',
    },
    {
      q: 'What are props?',
      a:
        "Props in react is short for 'properties', these are the properties that a component inherits from its parent component. This is one way, it only goes from parent to child.",
    },
    {
      q: 'What is state?',
      a:
        'State in react is an object with properties that determines the current form/condition of the component. State is either held at the level of the component, or abstracted into a store using redux or context and then made available across all levels of the parent/child structure.',
    },
  ],
};
export default questionStore;
