const data = {
  quizes: {
    javascript: {
      "10 beginner javascript questions": {
        questions: [
          {
            question: "What is JavaScript?",
            options: [
              "A markup language for creating web pages",
              "A back-end programming language",
              "A front-end scripting language for adding interactivity to web pages",
              "A database management system",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the correct way to declare a JavaScript variable?",
            options: [
              "variable = 10;",
              "var 10 = variable;",
              "var variable = 10;",
              "10 = var variable;",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Which of the following is not a valid JavaScript data type?",
            options: ["String", "Boolean", "Undefined", "Number or Float"],
            correctAnswer: "3",
          },
          {
            question:
              "What will the following code output? console.log(2 + '2');",
            options: ["4", "22", "TypeError", "NaN"],
            correctAnswer: "1",
          },
          {
            question: "How do you add a single-line comment in JavaScript?",
            options: [
              "// This is a comment",
              "<!-- This is a comment -->",
              "/* This is a comment */",
              "# This is a comment",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the output of the following code? console.log(typeof null);",
            options: ["null", "undefined", "object", "string"],
            correctAnswer: "2",
          },
          {
            question:
              "What is the purpose of the 'if' statement in JavaScript?",
            options: [
              "To perform a loop",
              "To define a function",
              "To execute code based on a condition",
              "To declare a variable",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Which method is used to add elements to the end of an array?",
            options: ["push()", "pop()", "shift()", "unshift()"],
            correctAnswer: "0",
          },
          {
            question: "What does the 'return' statement do in a function?",
            options: [
              "It ends the execution of the function and returns a value",
              "It declares a variable within the function",
              "It assigns a value to a variable",
              "It logs a message to the console",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the purpose of the 'addEventListener' method in JavaScript?",
            options: [
              "To perform mathematical calculations",
              "To create a new HTML element",
              "To register event handlers for DOM elements",
              "To define a new JavaScript function",
            ],
            correctAnswer: "2",
          },
        ],
      },
      "15 beginner javascript questions": {
        questions: [
          {
            question:
              "What will the following code output? console.log(2 + '2');",
            options: ["4", "22", "TypeError", "NaN"],
            correctAnswer: "1",
          },
          {
            question:
              "What is the correct way to declare a JavaScript variable?",
            options: [
              "variable = 10;",
              "var 10 = variable;",
              "var variable = 10;",
              "10 = var variable;",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is JavaScript?",
            options: [
              "A markup language for creating web pages",
              "A back-end programming language",
              "A front-end scripting language for adding interactivity to web pages",
              "A database management system",
            ],
            correctAnswer: "2",
          },
          {
            question: "How do you add a single-line comment in JavaScript?",
            options: [
              "// This is a comment",
              "<!-- This is a comment -->",
              "/* This is a comment */",
              "# This is a comment",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the purpose of the 'return' statement in a function?",
            options: [
              "It ends the execution of the function and returns a value",
              "It declares a variable within the function",
              "It assigns a value to a variable",
              "It logs a message to the console",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the output of the following code? console.log(typeof null);",
            options: ["null", "undefined", "object", "string"],
            correctAnswer: "2",
          },
          {
            question: "What does the 'if' statement do in JavaScript?",
            options: [
              "To perform a loop",
              "To define a function",
              "To execute code based on a condition",
              "To declare a variable",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the significance of the 'addEventListener' method in JavaScript?",
            options: [
              "To perform mathematical calculations",
              "To create a new HTML element",
              "To register event handlers for DOM elements",
              "To define a new JavaScript function",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Which method is used to add elements to the end of an array?",
            options: ["push()", "pop()", "shift()", "unshift()"],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of props in React?",
            options: [
              "To manage internal component state",
              "To store configuration settings for Webpack",
              "To pass data from a parent component to a child component",
              "To define the structure of a Redux store",
            ],
            correctAnswer: "2",
          },
          {
            question: "What are React functional components?",
            options: [
              "Components that are defined using the 'function' keyword",
              "Components that have better performance than class components",
              "Components that are used for styling in React",
              "Components that only render HTML elements",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the purpose of the 'key' prop when rendering a list of elements in React?",
            options: [
              "It provides a unique identifier for each element in the list",
              "It allows React to apply CSS styles to each list item",
              "It specifies the order in which the list items should be displayed",
              "It defines the data structure for the list",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the main purpose of React's Virtual DOM?",
            options: [
              "To directly manipulate the browser's DOM for performance optimization",
              "To provide a virtual representation of the server-side data",
              "To improve the accessibility of React applications",
              "To efficiently update and render components in the actual DOM",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What is the output of the following code? console.log(10 + '10');",
            options: ["20", "1010", "TypeError", "NaN"],
            correctAnswer: "1",
          },
          {
            question: "What is the purpose of the 'useEffect' hook in React?",
            options: [
              "To perform side effects in a React component",
              "To enable conditional rendering of components",
              "To create reusable custom hooks",
              "To apply inline styles to JSX elements",
            ],
            correctAnswer: "0",
          },
        ],
      },
      "20 beginner javascript questions": {
        questions: [
          {
            question:
              "What is the output of the following code? console.log(2 + 2 * 3);",
            options: ["8", "10", "6", "SyntaxError"],
            correctAnswer: "8",
          },

          {
            question:
              "What is the purpose of the 'else' keyword in an 'if...else' statement?",
            options: [
              "To indicate the end of the 'if' block",
              "To handle errors in the 'if' block",
              "To specify the condition for the 'if' block",
              "To provide an alternative block of code when the 'if' condition is false",
            ],
            correctAnswer: "3",
          },

          {
            question:
              "Which operator is used to concatenate strings in JavaScript?",
            options: ["+", "-", "*", "/"],
            correctAnswer: "0",
          },

          {
            question:
              "What does the 'typeof' operator return when applied to an array?",
            options: ["'array'", "'object'", "'array'", "'undefined'"],
            correctAnswer: "'object'",
          },

          {
            question:
              "What is the correct syntax to define a function in JavaScript?",
            options: [
              "function = myFunction()",
              "function myFunction()",
              "myFunction() = function",
              "myFunction() function",
            ],
            correctAnswer: "1",
          },

          {
            question:
              "What is the purpose of the 'querySelectorAll' method in JavaScript?",
            options: [
              "To add event listeners to DOM elements",
              "To fetch data from an API",
              "To select and return a single DOM element",
              "To select and return multiple DOM elements",
            ],
            correctAnswer: "3",
          },

          {
            question:
              "What is the difference between '==' and '===' in JavaScript?",
            options: [
              "'==' performs a type conversion, while '===' does not",
              "'==' checks only for value equality, while '===' checks for both value and type equality",
              "'==' is used for strict comparison, while '===' is used for loose comparison",
              "'==' and '===' are interchangeable and have the same functionality",
            ],
            correctAnswer:
              "'==' checks only for value equality, while '===' checks for both value and type equality",
          },

          {
            question: "What does the 'Array.prototype.push()' method return?",
            options: [
              "The new length of the array",
              "The last element of the array",
              "The first element of the array",
              "A boolean indicating if the operation was successful",
            ],
            correctAnswer: "0",
          },

          {
            question:
              "What is the purpose of the 'this' keyword in JavaScript?",
            options: [
              "To create a new instance of an object",
              "To refer to the current object or context within a function or method",
              "To declare a new variable within a function",
              "To assign a value to an object property",
            ],
            correctAnswer: "1",
          },

          {
            question:
              "What is the output of the following code? console.log(typeof 42);",
            options: ["'number'", "'string'", "'boolean'", "'object'"],
            correctAnswer: "'number'",
          },

          {
            question:
              "Which method is used to remove the last element from an array in JavaScript?",
            options: ["pop()", "shift()", "splice()", "slice()"],
            correctAnswer: "0",
          },

          {
            question:
              "What is the purpose of the 'innerHTML' property in JavaScript?",
            options: [
              "To change the background color of a webpage",
              "To store data in the local storage of a browser",
              "To access the contents of an HTML element as a string",
              "To create a new HTML element",
            ],
            correctAnswer: "2",
          },

          {
            question:
              "What is the difference between 'let', 'const', and 'var' in JavaScript?",
            options: [
              "'let' and 'const' are block-scoped, while 'var' is function-scoped",
              "'const' can be reassigned, while 'let' and 'var' cannot be reassigned",
              "'var' is block-scoped, while 'let' and 'const' are function-scoped",
              "'let' is used for global variable declarations, while 'const' and 'var' are used for local variable declarations",
            ],
            correctAnswer:
              "'let' and 'const' are block-scoped, while 'var' is function-scoped",
          },

          {
            question:
              "What is the purpose of the 'Math.random()' method in JavaScript?",
            options: [
              "To generate a random number between 0 and 1",
              "To round a number to the nearest integer",
              "To calculate the square root of a number",
              "To generate a random number between a specified range",
            ],
            correctAnswer: "0",
          },

          {
            question:
              "What does the 'length' property return for an empty array in JavaScript?",
            options: ["0", "null", "undefined", "1"],
            correctAnswer: "0",
          },

          {
            question:
              "What is the output of the following code? console.log('Hello ' + 'World');",
            options: ["'Hello'", "'World'", "'HelloWorld'", "SyntaxError"],
            correctAnswer: "'Hello World'",
          },

          {
            question:
              "Which method is used to convert a string to lowercase in JavaScript?",
            options: [
              "toUpperCase()",
              "toLowerCase()",
              "lowercase()",
              "convertToLower()",
            ],
            correctAnswer: "1",
          },

          {
            question:
              "What is the purpose of the 'forEach' method in JavaScript?",
            options: [
              "To sort an array in ascending order",
              "To execute a provided function once for each element in an array",
              "To remove elements from an array",
              "To find the index of a specific element in an array",
            ],
            correctAnswer: "1",
          },

          {
            question:
              "What is the correct way to access the last element of an array named 'myArray' in JavaScript?",
            options: [
              "myArray[-1]",
              "myArray[last]",
              "myArray[length - 1]",
              "myArray.pop()",
            ],
            correctAnswer: "2",
          },

          {
            question: "What does the 'concat()' method do in JavaScript?",
            options: [
              "It concatenates two arrays into a single array",
              "It adds an element to the end of an array",
              "It removes an element from an array",
              "It converts a string to an array",
            ],
            correctAnswer: "0",
          },
        ],
      },
      "10 intermed javascript questions": {
        questions: [
          {
            question: "What are closures in JavaScript, and how do they work?",
            options: [
              "Closures are self-invoking functions.",
              "Closures are functions that have access to variables from their outer (enclosing) scope even after the outer function has finished executing.",
              "Closures are functions that can be invoked using the 'closure' keyword.",
              "Closures are functions that take other functions as arguments.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the differences between 'let', 'const', and 'var' in terms of variable scoping and reassignment.",
            options: [
              "'let' and 'const' are block-scoped and cannot be redeclared, while 'var' is function-scoped and can be redeclared.",
              "'const' is used to declare constant values that cannot be changed, while 'let' and 'var' are used for variable declarations that can be reassigned.",
              "'let' and 'var' are block-scoped, while 'const' is function-scoped.",
              "'const' and 'var' are used for variable declarations, while 'let' is used for constant values.",
            ],
            correctAnswer:
              "'let' and 'const' are block-scoped and cannot be redeclared, while 'var' is function-scoped and can be redeclared.",
          },
          {
            question:
              "What are Promises in JavaScript, and how do they help with asynchronous programming?",
            options: [
              "Promises are used to define a set of objects representing the value or error returned from an asynchronous operation.",
              "Promises are used to handle errors in synchronous code.",
              "Promises are used to define classes and objects in JavaScript.",
              "Promises are used to create loops in JavaScript.",
            ],
            correctAnswer: "0",
          },

          {
            question:
              "Explain the concept of prototypal inheritance in JavaScript.",
            options: [
              "Prototypal inheritance is a way of creating new objects based on existing objects by linking them together using prototypes.",
              "Prototypal inheritance is a mechanism for creating private properties in objects.",
              "Prototypal inheritance allows objects to inherit properties from their child objects.",
              "Prototypal inheritance is used to create class-based inheritance in JavaScript.",
            ],
            correctAnswer: "0",
          },

          {
            question:
              "What is event delegation in JavaScript, and how does it improve performance?",
            options: [
              "Event delegation is a way of attaching event handlers directly to specific elements.",
              "Event delegation is a mechanism for creating custom events in JavaScript.",
              "Event delegation is a technique that allows events to bubble up from child elements to their parent elements.",
              "Event delegation is a technique that attaches a single event handler to a parent element to handle events for all its child elements.",
            ],
            correctAnswer: "3",
          },

          {
            question:
              "Explain the differences between '==' and '===' in JavaScript for equality comparison.",
            options: [
              "'==' performs type coercion, while '===' does not.",
              "'==' checks for both value and type equality, while '===' checks for value equality only.",
              "'==' and '===' are identical and can be used interchangeably.",
              "'==' is used for loose comparison, while '===' is used for strict comparison.",
            ],
            correctAnswer: "'==' performs type coercion, while '===' does not.",
          },

          {
            question: "What are higher-order functions in JavaScript?",
            options: [
              "Higher-order functions are functions that are used to perform arithmetic operations on arrays.",
              "Higher-order functions are functions that take other functions as arguments or return them.",
              "Higher-order functions are functions that can be invoked using the 'higherOrder' keyword.",
              "Higher-order functions are functions that return values greater than 100.",
            ],
            correctAnswer: "1",
          },

          {
            question:
              "Explain the 'this' keyword in JavaScript and how its value is determined in different contexts.",
            options: [
              "The 'this' keyword refers to the global object in all contexts.",
              "The 'this' keyword refers to the current object (the object on which the method is invoked) in all contexts.",
              "The 'this' keyword refers to the innermost function's context where it is used.",
              "The value of the 'this' keyword is dynamically determined based on how a function is called (the execution context).",
            ],
            correctAnswer: "3",
          },

          {
            question:
              "What is the purpose of the 'async/await' syntax in JavaScript?",
            options: [
              "'async/await' is used to define asynchronous functions that return promises.",
              "'async/await' is used to create loops in asynchronous code.",
              "'async/await' is used to define synchronous functions that return promises.",
              "'async/await' is used to handle errors in synchronous code.",
            ],
            correctAnswer:
              "'async/await' is used to define asynchronous functions that return promises.",
          },

          {
            question:
              "Explain the concept of the event loop in JavaScript and how it enables asynchronous behavior.",
            options: [
              "The event loop is a queue of events waiting to be executed in sequential order.",
              "The event loop is a mechanism for creating timers in JavaScript.",
              "The event loop is a way of executing code in parallel to improve performance.",
              "The event loop is a single-threaded process that continuously checks the call stack and the message queue for tasks to execute.",
            ],
            correctAnswer: "3",
          },
        ],
      },
      "15 intermed javascript questions": {
        questions: [],
      },
      "20 intermed javascript questions": {
        questions: [],
      },
      "10 advanced javascript questions": {
        questions: [],
      },
      "15 advanced javascript questions": {
        questions: [],
      },
      "20 advanced javascript questions": {
        questions: [],
      },
    },
    python: {
      "10 beginner python questions": {
        questions: [],
      },
      "15 beginner python questions": {
        questions: [],
      },
      "20 beginner python questions": {
        questions: [],
      },
      "10 intermed python questions": {
        questions: [],
      },
      "15 intermed python questions": {
        questions: [],
      },
      "20 intermed python questions": {
        questions: [],
      },
      "10 advanced python questions": {
        questions: [],
      },
      "15 advanced python questions": {
        questions: [],
      },
      "20 advanced python questions": {
        questions: [],
      },
    },
    java: {
      "10 beginner java questions": {
        questions: [],
      },
      "15 beginner java questions": {
        questions: [],
      },
      "20 beginner java questions": {
        questions: [],
      },
      "10 intermed java questions": {
        questions: [],
      },
      "15 intermed java questions": {
        questions: [],
      },
      "20 intermed java questions": {
        questions: [],
      },
      "10 advanced java questions": {
        questions: [],
      },
      "15 advanced java questions": {
        questions: [],
      },
      "20 advanced java questions": {
        questions: [],
      },
    },
    "C#": {
      "10 beginner C# questions": {
        questions: [],
      },
      "15 beginner C# questions": {
        questions: [],
      },
      "20 beginner C# questions": {
        questions: [],
      },
      "10 intermed C# questions": {
        questions: [],
      },
      "15 intermed C# questions": {
        questions: [],
      },
      "20 intermed C# questions": {
        questions: [],
      },
      "10 advanced C# questions": {
        questions: [],
      },
      "15 advanced C# questions": {
        questions: [],
      },
      "20 advanced C# questions": {
        questions: [],
      },
    },
    "C++": {
      "10 beginner C++ questions": {
        questions: [],
      },
      "15 beginner C++ questions": {
        questions: [],
      },
      "20 beginner C++ questions": {
        questions: [],
      },
      "10 intermed C++ questions": {
        questions: [],
      },
      "15 intermed C++ questions": {
        questions: [],
      },
      "20 intermed C++ questions": {
        questions: [],
      },
      "10 advanced C++ questions": {
        questions: [],
      },
      "15 advanced C++ questions": {
        questions: [],
      },
      "20 advanced C++ questions": {
        questions: [],
      },
    },
    react: {
      "10 beginner react questions": {
        questions: [],
      },
      "15 beginner react questions": {
        questions: [],
      },
      "20 beginner react questions": {
        questions: [],
      },
      "10 intermed react questions": {
        questions: [],
      },
      "15 intermed react questions": {
        questions: [],
      },
      "20 intermed react questions": {
        questions: [],
      },
      "10 advanced react questions": {
        questions: [],
      },
      "15 advanced react questions": {
        questions: [],
      },
      "20 advanced react questions": {
        questions: [],
      },
    },
    angular: {
      "10 beginner angular questions": {
        questions: [],
      },
      "15 beginner angular questions": {
        questions: [],
      },
      "20 beginner angular questions": {
        questions: [],
      },
      "10 intermed angular questions": {
        questions: [],
      },
      "15 intermed angular questions": {
        questions: [],
      },
      "20 intermed angular questions": {
        questions: [],
      },
      "10 advanced angular questions": {
        questions: [],
      },
      "15 advanced angular questions": {
        questions: [],
      },
      "20 advanced angular questions": {
        questions: [],
      },
    },
    vue: {
      "10 beginner vue questions": {
        questions: [],
      },
      "15 beginner vue questions": {
        questions: [],
      },
      "20 beginner vue questions": {
        questions: [],
      },
      "10 intermed vue questions": {
        questions: [],
      },
      "15 intermed vue questions": {
        questions: [],
      },
      "20 intermed vue questions": {
        questions: [],
      },
      "10 advanced vue questions": {
        questions: [],
      },
      "15 advanced vue questions": {
        questions: [],
      },
      "20 advanced vue questions": {
        questions: [],
      },
    },
    nodejs: {
      "10 beginner nodejs questions": {
        questions: [],
      },
      "15 beginner nodejs questions": {
        questions: [],
      },
      "20 beginner nodejs questions": {
        questions: [],
      },
      "10 intermed nodejs questions": {
        questions: [],
      },
      "15 intermed nodejs questions": {
        questions: [],
      },
      "20 intermed nodejs questions": {
        questions: [],
      },
      "10 advanced nodejs questions": {
        questions: [],
      },
      "15 advanced nodejs questions": {
        questions: [],
      },
      "20 advanced nodejs questions": {
        questions: [],
      },
    },
    django: {
      "10 beginner django questions": {
        questions: [],
      },
      "15 beginner django questions": {
        questions: [],
      },
      "20 beginner django questions": {
        questions: [],
      },
      "10 intermed django questions": {
        questions: [],
      },
      "15 intermed django questions": {
        questions: [],
      },
      "20 intermed django questions": {
        questions: [],
      },
      "10 advanced django questions": {
        questions: [],
      },
      "15 advanced django questions": {
        questions: [],
      },
      "20 advanced django questions": {
        questions: [],
      },
    },
    flask: {
      "10 beginner flask questions": {
        questions: [],
      },
      "15 beginner flask questions": {
        questions: [],
      },
      "20 beginner flask questions": {
        questions: [],
      },
      "10 intermed flask questions": {
        questions: [],
      },
      "15 intermed flask questions": {
        questions: [],
      },
      "20 intermed flask questions": {
        questions: [],
      },
      "10 advanced flask questions": {
        questions: [],
      },
      "15 advanced flask questions": {
        questions: [],
      },
      "20 advanced flask questions": {
        questions: [],
      },
    },
  },
};

export default data;
