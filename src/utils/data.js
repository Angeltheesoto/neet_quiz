const data = {
  quizes: {
    react: {
      "React Fundamentals": {
        questions: [
          {
            question: "What are React components?",
            options: [
              "Functions that return JSX elements",
              "Objects that define API endpoints",
              "CSS files used for styling in React",
              " Built-in JavaScript data types",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of props in React?",
            options: [
              "To manage internal component state",
              "To store configuration settings for Webpack",
              " To pass data from a parent component to a child component",
              "To define the structure of a Redux store",
            ],
            correctAnswer: "2",
          },
          {
            question: "In React, what is the key attribute used for in lists?",
            options: [
              "To specify a unique identifier for a component",
              "To create a reference to the DOM element",
              "To apply a special styling to the list items",
              "To enable communication between sibling components",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is React Router used for?",
            options: [
              "To manage state in React applications",
              "To create custom hooks for data fetching",
              "To handle HTTP requests and responses",
              "To implement client-side routing in a single-page application",
            ],
            correctAnswer: "3",
          },
          {
            question: "What is the purpose of the useEffect hook in React?",
            options: [
              "To perform side effects in a React component",
              "To enable conditional rendering of components",
              "To create reusable custom hooks",
              "To apply inline styles to JSX elements",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the significance of the shouldComponentUpdate lifecycle method in React class components?",
            options: [
              "It is used to update the component's state.",
              "It is used to handle errors during rendering.",
              "It determines whether the component should re-render or not.",
              "It is used to define the initial state of the component.",
            ],
            correctAnswer: "2",
          },
          {
            question: "What are React refs used for?",
            options: [
              "To style React components",
              "To access the DOM nodes directly in React",
              "To create internal state in functional components",
              "To define route parameters in React Router",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is the purpose of the Context API in React?",
            options: [
              "To manage global state that can be accessed by all components",
              "To create context menus for user interactions",
              "To handle AJAX requests and responses",
              "To generate random data for testing components",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the difference between controlled components and uncontrolled components in React?",
            options: [
              "Controlled components are written in functional style, while uncontrolled components are written using class components.",
              'Controlled components use the "useState" hook, while uncontrolled components use the "useEffect" hook.',
              "Controlled components rely on internal state managed by React, while uncontrolled components rely on the DOM for state management.",
              "Controlled components are more performant than uncontrolled components.",
            ],
            correctAnswer: "2",
          },
          {
            question: "What are React hooks?",
            options: [
              "Functions that enable communication between different components",
              "Objects that manage routing in a React application",
              "A way to add HTML comments in JSX code",
              "Functions that add stateful logic to functional components",
            ],
            correctAnswer: "3",
          },
          // {
          //   question: "",
          //   options: ["", "", "", ""],
          //   correctAnswer: "",
          // },
        ],
      },
      "15 react questions": {
        questions: [
          {
            question: "What is var?",
            options: [
              "A blank blank ...",
              "The blank blank ...",
              "What a blank blank ...",
              "Blank the blank ...",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is const",
            options: [
              "A blank blank ...",
              "The blank blank ...",
              "What a blank blank ...",
              "Blank the blank ...",
            ],
            correctAnswer: "2",
          },
        ],
      },
      "20 react questions": {},
      "25 react questions": {},
      "30 react questions": {},
      "35 react questions": {},
      "40 react questions": {},
      "45 react questions": {},
    },
    nodejs: {
      "10 nodejs questions": {
        questions: [
          {
            question: "What is ...",
            options: [
              "A blank blank ...",
              "The blank blank ...",
              "What a blank blank ...",
              "Blank the blank ...",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is ...",
            options: [
              "A blank blank ...",
              "The blank blank ...",
              "What a blank blank ...",
              "Blank the blank ...",
            ],
            correctAnswer: "3",
          },
        ],
      },
      "15 nodejs questions": {
        questions: [
          {
            question: "What is ...",
            options: [
              "A blank blank ...",
              "The blank blank ...",
              "What a blank blank ...",
              "Blank the blank ...",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is ...",
            options: [
              "A blank blank ...",
              "The blank blank ...",
              "What a blank blank ...",
              "Blank the blank ...",
            ],
            correctAnswer: "2",
          },
        ],
      },
    },
    django: {
      "10 django questions": {
        questions: [],
      },
      "15 django questions": {
        questions: [],
      },
    },
    vue: {
      "10 vue questions": {
        questions: [],
      },
      "15 vue questions": {
        questions: [],
      },
    },
    angular: {
      "10 angular questions": {
        questions: [],
      },
      "15 angular questions": {
        questions: [],
      },
    },
    other: {
      "10 django questions": {
        questions: [],
      },
      "15 django questions": {
        questions: [],
      },
    },
    something: {
      "10 vue questions": {
        questions: [],
      },
      "15 vue questions": {
        questions: [],
      },
    },
    else: {
      "10 angular questions": {
        questions: [],
      },
      "15 angular questions": {
        questions: [],
      },
    },
  },
};

export default data;
