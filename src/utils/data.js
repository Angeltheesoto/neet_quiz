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
            correctAnswer: "1",
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
            correctAnswer: "1",
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
            correctAnswer: "0",
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
            correctAnswer: "0",
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
            options: ["'Hello'", "'World'", "'Hello World'", "SyntaxError"],
            correctAnswer: "2",
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
            correctAnswer: "0",
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
            correctAnswer: "0",
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
            correctAnswer: "0",
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
        questions: [
          {
            question:
              "What is a callback function in JavaScript and how is it used?",
            options: [
              "A callback function is a function that is called at the beginning of a script execution.",
              "A callback function is a function that is executed immediately upon declaration.",
              "A callback function is a function that is passed as an argument to another function and is executed later.",
              "A callback function is a function that is used to handle errors in asynchronous code.",
            ],
            correctAnswer: "2",
          },
          {
            question: "Explain the concept of hoisting in JavaScript.",
            options: [
              "Hoisting is a mechanism for moving code to the top of the file during compilation.",
              "Hoisting is a way of creating function expressions in JavaScript.",
              "Hoisting is the process of automatically declaring variables at the top of the function or global scope.",
              "Hoisting is the process of assigning higher priority to certain functions during runtime.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What are the differences between 'for...in' and 'for...of' loops in JavaScript?",
            options: [
              "'for...in' is used to iterate over the values of an array, while 'for...of' is used to iterate over the properties of an object.",
              "'for...in' is used to iterate over the properties of an object, while 'for...of' is used to iterate over the values of an array.",
              "'for...in' is used to iterate over the keys of an object, while 'for...of' is used to iterate over the elements of an array.",
              "'for...in' and 'for...of' are identical and can be used interchangeably.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the purpose of the 'bind()' method in JavaScript and how it affects the value of 'this'.",
            options: [
              "The 'bind()' method is used to attach event handlers to DOM elements.",
              "The 'bind()' method is used to create a new function with a specific 'this' value, regardless of how the function is called.",
              "The 'bind()' method is used to concatenate arrays in JavaScript.",
              "The 'bind()' method is used to declare new variables in the local scope of a function.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What are Arrow Functions in JavaScript, and how do they differ from regular functions?",
            options: [
              "Arrow Functions are anonymous functions that are automatically invoked.",
              "Arrow Functions are used to declare classes in JavaScript.",
              "Arrow Functions have a shorter syntax and do not have their own 'this' value.",
              "Arrow Functions are only used for mathematical calculations in JavaScript.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Explain the concept of event propagation (bubbling and capturing) in JavaScript.",
            options: [
              "Event propagation is a mechanism for stopping the execution of a script in the event of an error.",
              "Event propagation is a way of attaching event handlers to specific elements.",
              "Event propagation is a technique for sending data from child elements to parent elements.",
              "Event propagation is the process by which an event triggers on a specific element and then propagates through its ancestors or descendants.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What is the purpose of the 'map()' method in JavaScript, and how is it used?",
            options: [
              "The 'map()' method is used to apply a specified function to all elements of an array and return a new array with the results.",
              "The 'map()' method is used to filter elements of an array based on a given condition.",
              "The 'map()' method is used to remove elements from an array.",
              "The 'map()' method is used to sort elements in an array.",
            ],
            correctAnswer: "0",
          },
          {
            question: "Explain the concept of currying in JavaScript.",
            options: [
              "Currying is a way of creating functions in JavaScript using the 'curry' keyword.",
              "Currying is a technique for combining multiple arrays into a single array.",
              "Currying is a way of transforming a function that takes multiple arguments into a sequence of functions that take a single argument.",
              "Currying is a method for declaring asynchronous functions in JavaScript.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the purpose of the 'reduce()' method in JavaScript, and how is it used?",
            options: [
              "The 'reduce()' method is used to add new properties to an object.",
              "The 'reduce()' method is used to combine multiple arrays into a single array.",
              "The 'reduce()' method is used to execute a function repeatedly for each element of an array, resulting in a single output value.",
              "The 'reduce()' method is used to filter elements of an array based on a given condition.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Explain the concept of function composition in JavaScript.",
            options: [
              "Function composition is a way of concatenating strings in JavaScript.",
              "Function composition is a technique for creating closures in JavaScript.",
              "Function composition is a way of combining two or more functions to produce a new function.",
              "Function composition is a way of defining custom event listeners in JavaScript.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the purpose of the 'Object.keys()' method in JavaScript?",
            options: [
              "The 'Object.keys()' method is used to sort the keys of an object in alphabetical order.",
              "The 'Object.keys()' method is used to remove keys from an object.",
              "The 'Object.keys()' method is used to retrieve an array of all keys in an object.",
              "The 'Object.keys()' method is used to convert an object to an array of its values.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Explain the differences between shallow copy and deep copy of objects and arrays in JavaScript.",
            options: [
              "Shallow copy and deep copy both create a new copy of an object or array, but deep copy also copies the prototype chain.",
              "Shallow copy creates a new object or array with the same references to the nested objects or arrays, while deep copy creates new instances of all nested objects or arrays.",
              "Shallow copy is faster and more memory-efficient than deep copy.",
              "Shallow copy and deep copy are identical and can be used interchangeably.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What are generators in JavaScript, and how are they different from regular functions?",
            options: [
              "Generators are used to create random numbers in JavaScript.",
              "Generators are functions that return multiple values using an array.",
              "Generators are functions that can be paused and resumed, allowing for iterative control flow.",
              "Generators are functions that are only invoked by other generator functions.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Explain the concept of memoization in JavaScript and how it can improve performance.",
            options: [
              "Memoization is a technique for optimizing asynchronous code execution in JavaScript.",
              "Memoization is a way of defining constants in JavaScript.",
              "Memoization is a mechanism for caching the results of expensive function calls and returning the cached result when the same inputs occur again.",
              "Memoization is a way of storing data in local storage to improve performance.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What are JavaScript modules, and how do they help organize code?",
            options: [
              "JavaScript modules are a way of defining HTML templates in JavaScript.",
              "JavaScript modules are used to create custom events in JavaScript.",
              "JavaScript modules are a way of encapsulating code into separate files, allowing for better code organization and reusability.",
              "JavaScript modules are a way of creating conditional statements in JavaScript.",
            ],
            correctAnswer: "2",
          },
        ],
      },
      "20 intermed javascript questions": {
        questions: [
          {
            question: "What is a closure in JavaScript, and how is it used?",
            options: [
              "A closure is a way of creating private variables in JavaScript.",
              "A closure is a self-invoking function in JavaScript.",
              "A closure is an array method used to filter elements.",
              "A closure is a way of handling errors in asynchronous code.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Explain the differences between 'let', 'const', and 'var' in terms of variable scoping and reassignment.",
            options: [
              "'let' and 'const' are block-scoped and cannot be redeclared, while 'var' is function-scoped and can be redeclared.",
              "'const' is used to declare constant values that cannot be changed, while 'let' and 'var' are used for variable declarations that can be reassigned.",
              "'var' is block-scoped, while 'let' and 'const' are function-scoped.",
              "'let' and 'const' are used for variable declarations, while 'var' is used for constant values.",
            ],
            correctAnswer: "0",
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
              "Event delegation is a way of attaching event handlers to specific elements.",
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
            correctAnswer: "0",
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
            correctAnswer: "0",
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
          {
            question:
              "What is the purpose of the 'map()' method in JavaScript, and how is it used?",
            options: [
              "The 'map()' method is used to apply a specified function to all elements of an array and return a new array with the results.",
              "The 'map()' method is used to filter elements of an array based on a given condition.",
              "The 'map()' method is used to remove elements from an array.",
              "The 'map()' method is used to sort elements in an array.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Explain the concept of memoization in JavaScript and how it can improve performance.",
            options: [
              "Memoization is a technique for optimizing asynchronous code execution in JavaScript.",
              "Memoization is a way of defining constants in JavaScript.",
              "Memoization is a mechanism for caching the results of expensive function calls and returning the cached result when the same inputs occur again.",
              "Memoization is a way of storing data in local storage to improve performance.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What are JavaScript modules, and how do they help organize code?",
            options: [
              "JavaScript modules are a way of defining HTML templates in JavaScript.",
              "JavaScript modules are used to create custom events in JavaScript.",
              "JavaScript modules are a way of encapsulating code into separate files, allowing for better code organization and reusability.",
              "JavaScript modules are a way of creating conditional statements in JavaScript.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the purpose of the 'Object.keys()' method in JavaScript?",
            options: [
              "The 'Object.keys()' method is used to sort the keys of an object in alphabetical order.",
              "The 'Object.keys()' method is used to remove keys from an object.",
              "The 'Object.keys()' method is used to retrieve an array of all keys in an object.",
              "The 'Object.keys()' method is used to convert an object to an array of its values.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Explain the concept of function composition in JavaScript.",
            options: [
              "Function composition is a way of concatenating strings in JavaScript.",
              "Function composition is a technique for creating closures in JavaScript.",
              "Function composition is a way of combining two or more functions to produce a new function.",
              "Function composition is a way of defining custom event listeners in JavaScript.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What are Arrow Functions in JavaScript, and how do they differ from regular functions?",
            options: [
              "Arrow Functions are anonymous functions that are automatically invoked.",
              "Arrow Functions are used to declare classes in JavaScript.",
              "Arrow Functions have a shorter syntax and do not have their own 'this' value.",
              "Arrow Functions are only used for mathematical calculations in JavaScript.",
            ],
            correctAnswer: "2",
          },
          {
            question: "Explain the concept of currying in JavaScript.",
            options: [
              "Currying is a way of creating functions in JavaScript using the 'curry' keyword.",
              "Currying is a technique for combining multiple arrays into a single array.",
              "Currying is a way of transforming a function that takes multiple arguments into a sequence of functions that take a single argument.",
              "Currying is a method for declaring asynchronous functions in JavaScript.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the purpose of the 'reduce()' method in JavaScript, and how is it used?",
            options: [
              "The 'reduce()' method is used to add new properties to an object.",
              "The 'reduce()' method is used to combine multiple arrays into a single array.",
              "The 'reduce()' method is used to execute a function repeatedly for each element of an array, resulting in a single output value.",
              "The 'reduce()' method is used to filter elements of an array based on a given condition.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Explain the differences between shallow copy and deep copy of objects and arrays in JavaScript.",
            options: [
              "Shallow copy and deep copy both create a new copy of an object or array, but deep copy also copies the prototype chain.",
              "Shallow copy creates a new object or array with the same references to the nested objects or arrays, while deep copy creates new instances of all nested objects or arrays.",
              "Shallow copy is faster and more memory-efficient than deep copy.",
              "Shallow copy and deep copy are identical and can be used interchangeably.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What are generators in JavaScript, and how are they different from regular functions?",
            options: [
              "Generators are used to create random numbers in JavaScript.",
              "Generators are functions that return multiple values using an array.",
              "Generators are functions that can be paused and resumed, allowing for iterative control flow.",
              "Generators are functions that are only invoked by other generator functions.",
            ],
            correctAnswer: "2",
          },
        ],
      },
      "10 advanced javascript questions": {
        questions: [
          {
            question:
              "Explain the concept of prototypal inheritance in JavaScript and how it differs from classical inheritance in other programming languages.",
            options: [
              "Prototypal inheritance is a way of creating new objects based on existing objects by linking them together using prototypes, while classical inheritance is based on classes and objects.",
              "Prototypal inheritance is a mechanism for creating private properties in objects, while classical inheritance is used for encapsulation of data and behavior.",
              "Prototypal inheritance allows objects to inherit properties from their child objects, while classical inheritance supports multiple inheritance.",
              "Prototypal inheritance is used to create class-based inheritance in JavaScript, similar to other programming languages.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What are the different ways to handle asynchronous code in JavaScript, and when would you use each approach?",
            options: [
              "The different ways to handle asynchronous code include callbacks, Promises, and async/await. Callbacks are used for simple asynchronous operations, Promises provide a more structured approach, and async/await offers more readable and synchronous-like code.",
              "The different ways to handle asynchronous code include loops, switch statements, and conditional operators. Loops are used for repeating asynchronous tasks, switch statements for handling multiple asynchronous options, and conditional operators for checking async conditions.",
              "The different ways to handle asynchronous code include creating custom events, using timers, and relying on browser APIs. Custom events are used for asynchronous communication between components, timers for delayed execution, and browser APIs for scheduling asynchronous tasks.",
              "The different ways to handle asynchronous code include using Web Workers, WebSockets, and Server-Sent Events. Web Workers are used for multi-threading, WebSockets for real-time communication, and Server-Sent Events for server-initiated communication.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What are Promises in JavaScript, and how do you implement a custom Promise?",
            options: [
              "Promises are objects representing the eventual completion or failure of an asynchronous operation, and they help in handling asynchronous code in a more structured way. A custom Promise can be implemented by creating a function that takes 'resolve' and 'reject' as arguments and calling these functions accordingly based on the success or failure of the asynchronous operation.",
              "Promises are functions used for creating custom events in JavaScript, and they help in handling user interactions. A custom Promise can be implemented by passing the event data to the Promise constructor and defining custom event listeners.",
              "Promises are used to handle errors in synchronous code, and they can be implemented by wrapping the synchronous code in a try-catch block.",
              "Promises are objects that define API endpoints in JavaScript, and they can be implemented using the 'definePromise()' function.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Explain the concept of the 'this' keyword in JavaScript and how it behaves in arrow functions.",
            options: [
              "The 'this' keyword refers to the current object (the object on which the method is invoked) in all contexts. Arrow functions do not bind their own 'this' value but instead inherit it from the surrounding lexical context.",
              "The 'this' keyword refers to the global object in all contexts. Arrow functions do not have access to 'this' and will throw an error if used.",
              "The 'this' keyword refers to the innermost function's context where it is used. Arrow functions bind 'this' to the window object by default.",
              "The value of the 'this' keyword is dynamically determined based on how a function is called (the execution context). Arrow functions behave the same as regular functions when it comes to 'this'.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What are generators in JavaScript, and how are they different from regular functions?",
            options: [
              "Generators are used to create random numbers in JavaScript. They are different from regular functions in that they can yield multiple values during their execution.",
              "Generators are functions that return multiple values using an array. They are different from regular functions in that they can have multiple return statements.",
              "Generators are functions that can be paused and resumed, allowing for iterative control flow. They are different from regular functions in that they have a unique syntax using the 'generator' keyword.",
              "Generators are functions that are only invoked by other generator functions. They are different from regular functions in that they cannot be used as event handlers.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Explain the concept of the 'arguments' object in JavaScript functions and how it differs from rest parameters.",
            options: [
              "The 'arguments' object is an array-like object that contains all the arguments passed to a function, including excess arguments not defined in the function's parameters. Rest parameters are used to capture a variable number of arguments as an actual array.",
              "The 'arguments' object is an array that contains all the arguments passed to a function, including excess arguments not defined in the function's parameters. Rest parameters are used to capture arguments as individual values.",
              "The 'arguments' object is an array-like object that contains all the arguments passed to a function, excluding excess arguments not defined in the function's parameters. Rest parameters are used to capture a variable number of arguments as an actual array.",
              "The 'arguments' object is a built-in function in JavaScript that captures all the arguments passed to a function and returns them as an array. Rest parameters are used to access the last argument of a function.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What are the different ways to create objects in JavaScript, and when would you use each approach?",
            options: [
              "The different ways to create objects include object literals, constructor functions with the 'new' keyword, and ES6 classes. Object literals are used for simple object creation, constructor functions for creating multiple instances with shared methods, and ES6 classes for more organized and modern object creation.",
              "The different ways to create objects include factory functions, using the 'Object.create()' method, and mixins. Factory functions are used for creating objects with different configurations, 'Object.create()' for creating objects with a specified prototype, and mixins for combining multiple objects into one.",
              "The different ways to create objects include using the 'Object()' constructor, the 'Object.assign()' method, and the 'prototype' property. The 'Object()' constructor is used for creating plain objects, 'Object.assign()' for copying properties from one object to another, and the 'prototype' property for defining object prototypes.",
              "The different ways to create objects include using the 'class' keyword, object literals, and the 'Object.create()' method. The 'class' keyword is used for defining classes and constructors, object literals for simple object creation, and 'Object.create()' for creating objects with a specified prototype.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Explain the concept of event bubbling and how it can be controlled in JavaScript.",
            options: [
              "Event bubbling is a way of attaching event handlers to specific elements. It can be controlled using the 'event.stopPropagation()' method, which prevents the event from bubbling up the DOM tree.",
              "Event bubbling is a mechanism for creating custom events in JavaScript. It can be controlled using the 'event.stopImmediatePropagation()' method, which prevents other event handlers from being executed on the same element.",
              "Event bubbling is a technique for sending data from child elements to parent elements. It can be controlled using the 'event.preventDefault()' method, which prevents the default behavior of an event.",
              "Event bubbling is the process by which an event triggers on a specific element and then propagates through its ancestors. It can be controlled using the 'event.cancelBubble' property, which can be set to 'true' to stop the event from further propagation.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Explain the concept of currying in JavaScript and how it can be used to transform functions.",
            options: [
              "Currying is a way of creating functions in JavaScript using the 'curry' keyword. It is used to simplify the syntax of complex functions.",
              "Currying is a technique for combining multiple arrays into a single array. It is used to merge data from different sources.",
              "Currying is a way of transforming a function that takes multiple arguments into a sequence of functions that take a single argument. It can be used to create specialized functions with preset arguments.",
              "Currying is a method for declaring asynchronous functions in JavaScript. It is used to handle asynchronous operations more efficiently.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Explain the concept of memoization in JavaScript and how it can improve performance.",
            options: [
              "Memoization is a technique for optimizing asynchronous code execution in JavaScript. It stores the results of expensive function calls and returns the cached result when the same inputs occur again.",
              "Memoization is a way of defining constants in JavaScript. It helps in avoiding reassignment of constant values.",
              "Memoization is a mechanism for caching the results of expensive function calls and returning the cached result when the same inputs occur again. This can greatly improve the performance of functions that are frequently called with the same arguments.",
              "Memoization is a way of storing data in local storage to improve performance. It reduces the need for making network requests for data that has been previously fetched.",
            ],
            correctAnswer: "2",
          },
        ],
      },
      "15 advanced javascript questions": {
        questions: [
          {
            question:
              "Explain the concept of functional programming in JavaScript and its advantages.",
            options: [
              "Functional programming is a paradigm that treats computation as the evaluation of mathematical functions. Its advantages include easier debugging and testing, better reusability, and support for parallel processing.",
              "Functional programming is a design pattern that emphasizes the use of classes and objects. Its advantages include better organization of code, enhanced encapsulation, and support for inheritance.",
              "Functional programming is a way of creating functions in JavaScript using the 'function' keyword. Its advantages include better code modularity and the ability to use function expressions.",
              "Functional programming is a technique for creating custom event handlers in JavaScript. Its advantages include better event management and reduced memory usage.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Explain the differences between the 'call', 'apply', and 'bind' methods in JavaScript.",
            options: [
              "All three methods are used to invoke functions with a specific 'this' context. The 'call' method passes arguments individually, the 'apply' method passes arguments as an array, and the 'bind' method returns a new function with the specified 'this' context and pre-filled arguments.",
              "The 'call' method is used for synchronous functions, the 'apply' method for asynchronous functions, and the 'bind' method for generators.",
              "The 'call' method is used for regular functions, the 'apply' method for arrow functions, and the 'bind' method for async functions.",
              "The 'call' method is used for event handling, the 'apply' method for data manipulation, and the 'bind' method for DOM manipulation.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What are IIFE (Immediately Invoked Function Expressions) in JavaScript, and why are they used?",
            options: [
              "IIFE is a way of declaring classes in JavaScript. They are used to create class-based inheritance and encapsulation.",
              "IIFE is a way of creating anonymous functions in JavaScript. They are used to handle complex logic and calculations.",
              "IIFE is a design pattern that emphasizes the use of interfaces and implementations. They are used to define contracts between objects.",
              "IIFE is a way of declaring functions that are immediately executed. They are used to create a new scope and avoid polluting the global namespace.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "Explain the concept of promises chaining in JavaScript and how it improves readability in asynchronous code.",
            options: [
              "Promise chaining is a technique for combining multiple promises in a sequential manner using the 'Promise.all()' method. It improves readability by reducing nested callbacks and providing a more linear flow of code.",
              "Promise chaining is a way of handling errors in asynchronous code using the 'catch()' method. It improves readability by providing a centralized error-handling mechanism.",
              "Promise chaining is a technique for linking multiple promises together to handle successive asynchronous operations. It improves readability by allowing developers to write cleaner and more organized asynchronous code.",
              "Promise chaining is a way of defining custom events in JavaScript. It improves readability by providing a clear structure for event handling.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What are Web Workers in JavaScript, and how do they help in improving performance?",
            options: [
              "Web Workers are a way of creating custom event handlers in JavaScript. They improve performance by reducing the memory usage of the application.",
              "Web Workers are used for parallel processing and running heavy computations in the background without blocking the main thread. They improve performance by utilizing multi-core processors.",
              "Web Workers are used to handle network requests and responses in JavaScript. They improve performance by reducing latency and speeding up data retrieval.",
              "Web Workers are a technique for managing the state of an application in JavaScript. They improve performance by providing a centralized data store.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the concept of currying in JavaScript and how it can be used to transform functions.",
            options: [
              "Currying is a way of creating functions in JavaScript using the 'curry' keyword. It is used to simplify the syntax of complex functions.",
              "Currying is a technique for combining multiple arrays into a single array. It is used to merge data from different sources.",
              "Currying is a way of transforming a function that takes multiple arguments into a sequence of functions that take a single argument. It can be used to create specialized functions with preset arguments.",
              "Currying is a method for declaring asynchronous functions in JavaScript. It is used to handle asynchronous operations more efficiently.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Explain the concept of memoization in JavaScript and how it can improve performance.",
            options: [
              "Memoization is a technique for optimizing asynchronous code execution in JavaScript. It stores the results of expensive function calls and returns the cached result when the same inputs occur again.",
              "Memoization is a way of defining constants in JavaScript. It helps in avoiding reassignment of constant values.",
              "Memoization is a mechanism for caching the results of expensive function calls and returning the cached result when the same inputs occur again. This can greatly improve the performance of functions that are frequently called with the same arguments.",
              "Memoization is a way of storing data in local storage to improve performance. It reduces the need for making network requests for data that has been previously fetched.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Explain the concept of the 'Proxy' object in JavaScript and how it can be used for metaprogramming.",
            options: [
              "The 'Proxy' object is used for creating proxies of classes in JavaScript. It helps in extending class behavior and adding new methods.",
              "The 'Proxy' object is used to intercept and customize operations performed on objects, such as property access, assignment, and function invocation. It allows for advanced metaprogramming and control over object behavior.",
              "The 'Proxy' object is used for handling errors in asynchronous code. It provides a centralized mechanism for catching and handling errors.",
              "The 'Proxy' object is used for managing the state of an application. It allows for efficient state management and data retrieval.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the concept of the 'async/await' syntax in JavaScript and how it simplifies asynchronous code.",
            options: [
              "'async/await' is used to define asynchronous functions in JavaScript. It simplifies asynchronous code by allowing developers to write asynchronous logic in a more synchronous style.",
              "'async/await' is used to define synchronous functions in JavaScript. It simplifies synchronous code by providing a more concise syntax.",
              "'async/await' is a technique for handling errors in asynchronous code. It simplifies error handling by using a try-catch block around asynchronous operations.",
              "'async/await' is used for defining event listeners in JavaScript. It simplifies event handling and propagation.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Explain the concept of the 'WeakMap' and 'WeakSet' objects in JavaScript and their use cases.",
            options: [
              "The 'WeakMap' and 'WeakSet' objects are used to create maps and sets with weak references to the keys or values, respectively. They are used to prevent memory leaks and are suitable for scenarios where objects can be garbage collected when they are no longer used.",
              "The 'WeakMap' and 'WeakSet' objects are used for managing the state of an application in JavaScript. They are suitable for storing sensitive data that needs to be protected.",
              "The 'WeakMap' and 'WeakSet' objects are used for handling errors in asynchronous code. They provide a way to store and track errors that occur during async operations.",
              "The 'WeakMap' and 'WeakSet' objects are used for creating custom event handlers in JavaScript. They are suitable for managing event listeners and their references.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Explain the differences between deep clone and shallow clone of objects and arrays in JavaScript.",
            options: [
              "Deep clone and shallow clone are identical and can be used interchangeably to create copies of objects and arrays.",
              "Deep clone creates a new object or array with the same references to the nested objects or arrays, while shallow clone creates new instances of all nested objects or arrays.",
              "Deep clone is a way of defining custom event listeners in JavaScript, while shallow clone is a method for creating event handlers.",
              "Deep clone is a technique for handling errors in asynchronous code, while shallow clone is used for handling synchronous errors.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the concept of the 'IntersectionObserver' in JavaScript and its use cases.",
            options: [
              "The 'IntersectionObserver' is used to create custom event listeners in JavaScript. It is suitable for detecting events related to intersection changes of DOM elements.",
              "The 'IntersectionObserver' is a design pattern used to handle data binding in JavaScript. It is suitable for synchronizing data between different parts of an application.",
              "The 'IntersectionObserver' is a way of managing the state of an application in JavaScript. It is suitable for updating UI components based on data changes.",
              "The 'IntersectionObserver' is used to observe changes in the intersection of an element with its parent or viewport. It is suitable for lazy loading of images, infinite scrolling, and performance optimizations.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What are JavaScript decorators, and how can they be used for metaprogramming?",
            options: [
              "JavaScript decorators are used to define custom event handlers for DOM elements. They can be used for managing event listeners.",
              "JavaScript decorators are used to modify the behavior of class methods or properties. They can be used for metaprogramming by applying additional functionality to methods or properties at runtime.",
              "JavaScript decorators are a technique for handling errors in asynchronous code. They can be used for centralizing error handling logic.",
              "JavaScript decorators are used to create custom event handlers for specific actions. They can be used for monitoring user interactions.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the concept of memoization in JavaScript and how it can improve performance.",
            options: [
              "Memoization is a technique for optimizing asynchronous code execution in JavaScript. It stores the results of expensive function calls and returns the cached result when the same inputs occur again.",
              "Memoization is a way of defining constants in JavaScript. It helps in avoiding reassignment of constant values.",
              "Memoization is a mechanism for caching the results of expensive function calls and returning the cached result when the same inputs occur again. This can greatly improve the performance of functions that are frequently called with the same arguments.",
              "Memoization is a way of storing data in local storage to improve performance. It reduces the need for making network requests for data that has been previously fetched.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Explain the concept of the 'Symbol' data type in JavaScript and its use cases.",
            options: [
              "The 'Symbol' data type is used for creating custom event handlers in JavaScript. It provides a way to create unique identifiers for events.",
              "The 'Symbol' data type is used to define private properties in objects. It ensures that the properties cannot be accessed from outside the object.",
              "The 'Symbol' data type is used for managing the state of an application in JavaScript. It provides a way to store and update the application's state.",
              "The 'Symbol' data type is used for creating unique identifiers for object properties. It ensures that the property keys do not clash with other keys.",
            ],
            correctAnswer: "1",
          },
        ],
      },
      "20 advanced javascript questions": {
        questions: [
          {
            question:
              "Explain the concept of functional programming in JavaScript and its advantages.",
            options: [
              "Functional programming is a paradigm that treats computation as the evaluation of mathematical functions. Its advantages include easier debugging and testing, better reusability, and support for parallel processing.",
              "Functional programming is a design pattern that emphasizes the use of classes and objects. Its advantages include better organization of code, enhanced encapsulation, and support for inheritance.",
              "Functional programming is a way of creating functions in JavaScript using the 'function' keyword. Its advantages include better code modularity and the ability to use function expressions.",
              "Functional programming is a technique for creating custom event handlers in JavaScript. Its advantages include better event management and reduced memory usage.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Explain the differences between the 'call', 'apply', and 'bind' methods in JavaScript.",
            options: [
              "All three methods are used to invoke functions with a specific 'this' context. The 'call' method passes arguments individually, the 'apply' method passes arguments as an array, and the 'bind' method returns a new function with the specified 'this' context and pre-filled arguments.",
              "The 'call' method is used for synchronous functions, the 'apply' method for asynchronous functions, and the 'bind' method for generators.",
              "The 'call' method is used for regular functions, the 'apply' method for arrow functions, and the 'bind' method for async functions.",
              "The 'call' method is used for event handling, the 'apply' method for data manipulation, and the 'bind' method for DOM manipulation.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What are IIFE (Immediately Invoked Function Expressions) in JavaScript, and why are they used?",
            options: [
              "IIFE is a way of declaring classes in JavaScript. They are used to create class-based inheritance and encapsulation.",
              "IIFE is a way of creating anonymous functions in JavaScript. They are used to handle complex logic and calculations.",
              "IIFE is a design pattern that emphasizes the use of interfaces and implementations. They are used to define contracts between objects.",
              "IIFE is a way of declaring functions that are immediately executed. They are used to create a new scope and avoid polluting the global namespace.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "Explain the concept of promises chaining in JavaScript and how it improves readability in asynchronous code.",
            options: [
              "Promise chaining is a technique for combining multiple promises in a sequential manner using the 'Promise.all()' method. It improves readability by reducing nested callbacks and providing a more linear flow of code.",
              "Promise chaining is a way of handling errors in asynchronous code using the 'catch()' method. It improves readability by providing a centralized error-handling mechanism.",
              "Promise chaining is a technique for linking multiple promises together to handle successive asynchronous operations. It improves readability by allowing developers to write cleaner and more organized asynchronous code.",
              "Promise chaining is a way of defining custom events in JavaScript. It improves readability by providing a clear structure for event handling.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What are Web Workers in JavaScript, and how do they help in improving performance?",
            options: [
              "Web Workers are a way of creating custom event handlers in JavaScript. They improve performance by reducing the memory usage of the application.",
              "Web Workers are used for parallel processing and running heavy computations in the background without blocking the main thread. They improve performance by utilizing multi-core processors.",
              "Web Workers are used to handle network requests and responses in JavaScript. They improve performance by reducing latency and speeding up data retrieval.",
              "Web Workers are a technique for managing the state of an application in JavaScript. They improve performance by providing a centralized data store.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the concept of currying in JavaScript and how it can be used to transform functions.",
            options: [
              "Currying is a way of creating functions in JavaScript using the 'curry' keyword. It is used to simplify the syntax of complex functions.",
              "Currying is a technique for combining multiple arrays into a single array. It is used to merge data from different sources.",
              "Currying is a way of transforming a function that takes multiple arguments into a sequence of functions that take a single argument. It can be used to create specialized functions with preset arguments.",
              "Currying is a method for declaring asynchronous functions in JavaScript. It is used to handle asynchronous operations more efficiently.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Explain the concept of memoization in JavaScript and how it can improve performance.",
            options: [
              "Memoization is a technique for optimizing asynchronous code execution in JavaScript. It stores the results of expensive function calls and returns the cached result when the same inputs occur again.",
              "Memoization is a way of defining constants in JavaScript. It helps in avoiding reassignment of constant values.",
              "Memoization is a mechanism for caching the results of expensive function calls and returning the cached result when the same inputs occur again. This can greatly improve the performance of functions that are frequently called with the same arguments.",
              "Memoization is a way of storing data in local storage to improve performance. It reduces the need for making network requests for data that has been previously fetched.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Explain the concept of the 'Proxy' object in JavaScript and how it can be used for metaprogramming.",
            options: [
              "The 'Proxy' object is used for creating proxies of classes in JavaScript. It helps in extending class behavior and adding new methods.",
              "The 'Proxy' object is used to intercept and customize operations performed on objects, such as property access, assignment, and function invocation. It allows for advanced metaprogramming and control over object behavior.",
              "The 'Proxy' object is used for handling errors in asynchronous code. It provides a centralized mechanism for catching and handling errors.",
              "The 'Proxy' object is used for managing the state of an application. It allows for efficient state management and data retrieval.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the concept of the 'async/await' syntax in JavaScript and how it simplifies asynchronous code.",
            options: [
              "'async/await' is used to define asynchronous functions in JavaScript. It simplifies asynchronous code by allowing developers to write asynchronous logic in a more synchronous style.",
              "'async/await' is used to define synchronous functions in JavaScript. It simplifies synchronous code by providing a more concise syntax.",
              "'async/await' is a technique for handling errors in asynchronous code. It simplifies error handling by using a try-catch block around asynchronous operations.",
              "'async/await' is used for defining event listeners in JavaScript. It simplifies event handling and propagation.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Explain the concept of the 'WeakMap' and 'WeakSet' objects in JavaScript and their use cases.",
            options: [
              "The 'WeakMap' and 'WeakSet' objects are used to create maps and sets with weak references to the keys or values, respectively. They are used to prevent memory leaks and are suitable for scenarios where objects can be garbage collected when they are no longer used.",
              "The 'WeakMap' and 'WeakSet' objects are used for managing the state of an application in JavaScript. They are suitable for storing sensitive data that needs to be protected.",
              "The 'WeakMap' and 'WeakSet' objects are used for handling errors in asynchronous code. They provide a way to store and track errors that occur during async operations.",
              "The 'WeakMap' and 'WeakSet' objects are used for creating custom event handlers in JavaScript. They are suitable for managing event listeners and their references.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Explain the differences between deep clone and shallow clone of objects and arrays in JavaScript.",
            options: [
              "Deep clone and shallow clone are identical and can be used interchangeably to create copies of objects and arrays.",
              "Deep clone creates a new object or array with the same references to the nested objects or arrays, while shallow clone creates new instances of all nested objects or arrays.",
              "Deep clone is a way of defining custom event listeners in JavaScript, while shallow clone is a method for creating event handlers.",
              "Deep clone is a technique for handling errors in asynchronous code, while shallow clone is used for handling synchronous errors.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the concept of the 'IntersectionObserver' in JavaScript and its use cases.",
            options: [
              "The 'IntersectionObserver' is used to create custom event listeners in JavaScript. It is suitable for detecting events related to intersection changes of DOM elements.",
              "The 'IntersectionObserver' is a design pattern used to handle data binding in JavaScript. It is suitable for synchronizing data between different parts of an application.",
              "The 'IntersectionObserver' is a way of managing the state of an application in JavaScript. It is suitable for updating UI components based on data changes.",
              "The 'IntersectionObserver' is used to observe changes in the intersection of an element with its parent or viewport. It is suitable for lazy loading of images, infinite scrolling, and performance optimizations.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What are JavaScript decorators, and how can they be used for metaprogramming?",
            options: [
              "JavaScript decorators are used to define custom event handlers for DOM elements. They can be used for managing event listeners.",
              "JavaScript decorators are used to modify the behavior of class methods or properties. They can be used for metaprogramming by applying additional functionality to methods or properties at runtime.",
              "JavaScript decorators are a technique for handling errors in asynchronous code. They can be used for centralizing error handling logic.",
              "JavaScript decorators are used to create custom event handlers for specific actions. They can be used for monitoring user interactions.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the concept of memoization in JavaScript and how it can improve performance.",
            options: [
              "Memoization is a technique for optimizing asynchronous code execution in JavaScript. It stores the results of expensive function calls and returns the cached result when the same inputs occur again.",
              "Memoization is a way of defining constants in JavaScript. It helps in avoiding reassignment of constant values.",
              "Memoization is a mechanism for caching the results of expensive function calls and returning the cached result when the same inputs occur again. This can greatly improve the performance of functions that are frequently called with the same arguments.",
              "Memoization is a way of storing data in local storage to improve performance. It reduces the need for making network requests for data that has been previously fetched.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "Explain the concept of the 'Symbol' data type in JavaScript and its use cases.",
            options: [
              "The 'Symbol' data type is used for creating custom event handlers in JavaScript. It provides a way to create unique identifiers for events.",
              "The 'Symbol' data type is used to define private properties in objects. It ensures that the properties cannot be accessed from outside the object.",
              "The 'Symbol' data type is used for managing the state of an application in JavaScript. It provides a way to store and update the application's state.",
              "The 'Symbol' data type is used for creating unique identifiers for object properties. It ensures that the property keys do not clash with other keys.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the concept of the Event Loop in JavaScript and how it manages asynchronous operations.",
            options: [
              "The Event Loop is a technique for handling network requests and responses in JavaScript. It manages asynchronous operations by queuing requests and processing them in the order they are received.",
              "The Event Loop is a mechanism for creating custom event handlers in JavaScript. It manages asynchronous operations by listening to events and triggering corresponding callbacks.",
              "The Event Loop is a design pattern used to handle data flow in JavaScript. It manages asynchronous operations by organizing data into streams and processing them sequentially.",
              "The Event Loop is a fundamental part of JavaScript's concurrency model. It manages asynchronous operations by maintaining a call stack and a message queue, ensuring that tasks are executed in a non-blocking manner.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "Explain the concept of the 'Spread Operator' in JavaScript and its practical applications.",
            options: [
              "The 'Spread Operator' is used for creating custom event handlers in JavaScript. It is practical for managing event listeners.",
              "The 'Spread Operator' is a technique for handling errors in asynchronous code. It is practical for providing a centralized error-handling mechanism.",
              "The 'Spread Operator' is used for object destructuring in JavaScript. It is practical for extracting specific properties from objects and assigning them to variables.",
              "The 'Spread Operator' is used for array concatenation and object merging in JavaScript. It is practical for creating new arrays or objects with the content of existing ones.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "Explain the concept of the 'Proxy' object in JavaScript and how it can be used for metaprogramming.",
            options: [
              "The 'Proxy' object is used for creating proxies of classes in JavaScript. It helps in extending class behavior and adding new methods.",
              "The 'Proxy' object is used to intercept and customize operations performed on objects, such as property access, assignment, and function invocation. It allows for advanced metaprogramming and control over object behavior.",
              "The 'Proxy' object is used for handling errors in asynchronous code. It provides a centralized mechanism for catching and handling errors.",
              "The 'Proxy' object is used for managing the state of an application. It allows for efficient state management and data retrieval.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the concept of the 'Promise' constructor in JavaScript and how it is used for handling asynchronous operations.",
            options: [
              "The 'Promise' constructor is a way of creating custom event handlers in JavaScript. It is used for managing event listeners and their callbacks.",
              "The 'Promise' constructor is used to define synchronous functions in JavaScript. It is used for wrapping synchronous code in a promise-like interface.",
              "The 'Promise' constructor is a design pattern for handling data binding in JavaScript. It is used for synchronizing data between different parts of an application.",
              "The 'Promise' constructor is used to create and manage asynchronous operations. It represents a value that may not be available yet, but will be resolved or rejected in the future.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "Explain the concept of the 'async/await' syntax in JavaScript and how it simplifies asynchronous code.",
            options: [
              "'async/await' is used to define asynchronous functions in JavaScript. It simplifies asynchronous code by allowing developers to write asynchronous logic in a more synchronous style.",
              "'async/await' is used to define synchronous functions in JavaScript. It simplifies synchronous code by providing a more concise syntax.",
              "'async/await' is a technique for handling errors in asynchronous code. It simplifies error handling by using a try-catch block around asynchronous operations.",
              "'async/await' is used for defining event listeners in JavaScript. It simplifies event handling and propagation.",
            ],
            correctAnswer: "0",
          },
        ],
      },
    },
    python: {
      "10 beginner python questions": {
        questions: [
          {
            question: "What is Python?",
            options: [
              "A high-level programming language.",
              "A text editor.",
              "A database management system.",
              "A web browser.",
            ],
            correctAnswer: "0",
          },
          {
            question: "How do you print 'Hello, World!' in Python?",
            options: [
              "print('Hello, World!')",
              "console.log('Hello, World!')",
              "print('Hello, World!');",
              "log('Hello, World!')",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Which symbol is used for single-line comments in Python?",
            options: ["#", "//", "/*", "!--"],
            correctAnswer: "0",
          },
          {
            question:
              "What is the correct way to declare a variable in Python?",
            options: [
              "variable = 10",
              "10 = variable",
              "variable == 10",
              "10 == variable",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Which data type is used to store a sequence of characters in Python?",
            options: ["string", "int", "float", "boolean"],
            correctAnswer: "0",
          },
          {
            question: "What is the result of 4 + 7?",
            options: ["11", "47", "13", "44"],
            correctAnswer: "0",
          },
          {
            question: "How do you check the length of a list in Python?",
            options: [
              "len(my_list)",
              "length(my_list)",
              "my_list.length()",
              "size(my_list)",
            ],
            correctAnswer: "0",
          },
          {
            question: "Which Python keyword is used to define a function?",
            options: ["function", "define", "def", "function()"],
            correctAnswer: "2",
          },
          {
            question:
              "What is the output of the following code?\n\nnumbers = [1, 2, 3, 4, 5]\nprint(numbers[2])",
            options: ["1", "2", "3", "4"],
            correctAnswer: "2",
          },
          {
            question: "What is the purpose of the 'if' statement in Python?",
            options: [
              "To create a loop.",
              "To define a function.",
              "To check conditions and execute code based on the result.",
              "To import modules.",
            ],
            correctAnswer: "2",
          },
        ],
      },
      "15 beginner python questions": {
        questions: [
          {
            question: "What is Python?",
            options: [
              "A high-level programming language.",
              "A text editor.",
              "A database management system.",
              "A web browser.",
            ],
            correctAnswer: "0",
          },
          {
            question: "How do you print 'Hello, World!' in Python?",
            options: [
              "print('Hello, World!')",
              "console.log('Hello, World!')",
              "print('Hello, World!');",
              "log('Hello, World!')",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Which symbol is used for single-line comments in Python?",
            options: ["#", "//", "/*", "!--"],
            correctAnswer: "0",
          },
          {
            question:
              "What is the correct way to declare a variable in Python?",
            options: [
              "variable = 10",
              "10 = variable",
              "variable == 10",
              "10 == variable",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Which data type is used to store a sequence of characters in Python?",
            options: ["string", "int", "float", "boolean"],
            correctAnswer: "0",
          },
          {
            question: "What is the result of 4 + 7?",
            options: ["11", "47", "13", "44"],
            correctAnswer: "0",
          },
          {
            question: "How do you check the length of a list in Python?",
            options: [
              "len(my_list)",
              "length(my_list)",
              "my_list.length()",
              "size(my_list)",
            ],
            correctAnswer: "0",
          },
          {
            question: "Which Python keyword is used to define a function?",
            options: ["function", "define", "def", "function()"],
            correctAnswer: "2",
          },
          {
            question:
              "What is the output of the following code?\n\nnumbers = [1, 2, 3, 4, 5]\nprint(numbers[2])",
            options: ["1", "2", "3", "4"],
            correctAnswer: "2",
          },
          {
            question: "What is the purpose of the 'if' statement in Python?",
            options: [
              "To create a loop.",
              "To define a function.",
              "To check conditions and execute code based on the result.",
              "To import modules.",
            ],
            correctAnswer: "2",
          },
          {
            question: "Which Python function is used to get user input?",
            options: ["input()", "user_input()", "get_input()", "read_input()"],
            correctAnswer: "0",
          },
          {
            question:
              "What is the output of the following code?\n\nfor i in range(5):\n print(i)",
            options: ["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3", "1 2 3 4"],
            correctAnswer: "0",
          },
          {
            question:
              "Which operator is used to perform exponentiation in Python?",
            options: ["**", "//", "^^", "exp"],
            correctAnswer: "0",
          },
          {
            question:
              "What is the correct way to add an element 'x' to a list 'my_list'?",
            options: [
              "my_list.add(x)",
              "my_list.append(x)",
              "my_list.insert(x)",
              "add(x, my_list)",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is the purpose of the 'while' loop in Python?",
            options: [
              "To create a function.",
              "To check conditions and execute code based on the result.",
              "To perform a task repeatedly as long as a condition is true.",
              "To import modules.",
            ],
            correctAnswer: "2",
          },
        ],
      },
      "20 beginner python questions": {
        questions: [
          {
            question: "What is Python?",
            options: [
              "A high-level programming language.",
              "A text editor.",
              "A database management system.",
              "A web browser.",
            ],
            correctAnswer: "0",
          },
          {
            question: "How do you print 'Hello, World!' in Python?",
            options: [
              "print('Hello, World!')",
              "console.log('Hello, World!')",
              "print('Hello, World!');",
              "log('Hello, World!')",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Which symbol is used for single-line comments in Python?",
            options: ["#", "//", "/*", "!--"],
            correctAnswer: "0",
          },
          {
            question:
              "What is the correct way to declare a variable in Python?",
            options: [
              "variable = 10",
              "10 = variable",
              "variable == 10",
              "10 == variable",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Which data type is used to store a sequence of characters in Python?",
            options: ["string", "int", "float", "boolean"],
            correctAnswer: "0",
          },
          {
            question: "What is the result of 4 + 7?",
            options: ["11", "47", "13", "44"],
            correctAnswer: "0",
          },
          {
            question: "How do you check the length of a list in Python?",
            options: [
              "len(my_list)",
              "length(my_list)",
              "my_list.length()",
              "size(my_list)",
            ],
            correctAnswer: "0",
          },
          {
            question: "Which Python keyword is used to define a function?",
            options: ["function", "define", "def", "function()"],
            correctAnswer: "2",
          },
          {
            question:
              "What is the output of the following code?\n\nnumbers = [1, 2, 3, 4, 5]\nprint(numbers[2])",
            options: ["1", "2", "3", "4"],
            correctAnswer: "2",
          },
          {
            question: "What is the purpose of the 'if' statement in Python?",
            options: [
              "To create a loop.",
              "To define a function.",
              "To check conditions and execute code based on the result.",
              "To import modules.",
            ],
            correctAnswer: "2",
          },
          {
            question: "Which Python function is used to get user input?",
            options: ["input()", "user_input()", "get_input()", "read_input()"],
            correctAnswer: "0",
          },
          {
            question:
              "What is the output of the following code?\n\nfor i in range(5):\n print(i)",
            options: ["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3", "1 2 3 4"],
            correctAnswer: "0",
          },
          {
            question:
              "Which operator is used to perform exponentiation in Python?",
            options: ["**", "//", "^^", "exp"],
            correctAnswer: "0",
          },
          {
            question:
              "What is the correct way to add an element 'x' to a list 'my_list'?",
            options: [
              "my_list.add(x)",
              "my_list.append(x)",
              "my_list.insert(x)",
              "add(x, my_list)",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is the purpose of the 'while' loop in Python?",
            options: [
              "To create a function.",
              "To check conditions and execute code based on the result.",
              "To perform a task repeatedly as long as a condition is true.",
              "To import modules.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the output of the following code?\n\nprint(type(5))",
            options: [
              "<class 'int'>",
              "<class 'float'>",
              "<class 'str'>",
              "<class 'bool'>",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "Which Python data type is used to store a collection of elements as key-value pairs?",
            options: ["list", "tuple", "dictionary", "set"],
            correctAnswer: "2",
          },
          {
            question:
              "What is the correct way to access the last element of a list 'my_list' in Python?",
            options: [
              "my_list[-1]",
              "my_list[0]",
              "my_list[last]",
              "my_list.last()",
            ],
            correctAnswer: "0",
          },
          {
            question: "Which Python operator is used for string concatenation?",
            options: ["+", "-", "*", "/"],
            correctAnswer: "0",
          },
          {
            question:
              "What does the 'else' keyword do in the context of conditional statements in Python?",
            options: [
              "It defines the start of a loop.",
              "It specifies a condition to be checked.",
              "It is used to define a function.",
              "It provides an alternative code block to be executed if the condition is not met.",
            ],
            correctAnswer: "3",
          },
        ],
      },
      "10 intermed python questions": {
        questions: [
          {
            question: "What is the purpose of a Python virtual environment?",
            options: [
              "To create a separate environment for testing Python applications.",
              "To run Python code without an internet connection.",
              "To optimize the performance of Python code.",
              "To create a virtual reality environment using Python.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the difference between 'deep copy' and 'shallow copy' in Python?",
            options: [
              "'Deep copy' creates a new object with a new memory address, while 'shallow copy' creates a new object that shares the same memory address as the original.",
              "'Deep copy' creates a new object that shares the same memory address as the original, while 'shallow copy' creates a new object with a new memory address.",
              "'Deep copy' copies the elements of a list or dictionary to another list or dictionary, while 'shallow copy' only copies the outer structure.",
              "'Deep copy' is used for copying integers and floats, while 'shallow copy' is used for copying lists and dictionaries.",
            ],
            correctAnswer: "0",
          },
          {
            question: "How do you handle exceptions in Python?",
            options: [
              "By using the 'finally' block.",
              "By using the 'try-except' block.",
              "By using the 'raise' keyword.",
              "By using the 'assert' keyword.",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is the purpose of the 'lambda' function in Python?",
            options: [
              "To declare anonymous functions.",
              "To convert data types.",
              "To create multi-line functions.",
              "To define class methods.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the role of 'self' in a Python class method?",
            options: [
              "'self' refers to the class instance itself and is used to access its attributes and methods.",
              "'self' is used to create private variables in a class.",
              "'self' is a reserved keyword for defining class-level variables.",
              "'self' is used to refer to other instances of the class within a method.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "How can you read and write data to a CSV file in Python?",
            options: [
              "By using the 'csv' module's 'read' and 'write' methods.",
              "By opening the file in read or write mode and using 'readline()' and 'write()' functions.",
              "By using the 'pandas' library's 'read_csv()' and 'to_csv()' functions.",
              "By converting the CSV file to a JSON format and using Python's JSON module.",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is a Python decorator used for?",
            options: [
              "To modify the behavior of class methods or functions.",
              "To add CSS styles to HTML elements.",
              "To create animation effects in graphical applications.",
              "To define routing rules in web applications.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What does the 'yield' keyword do in a Python generator function?",
            options: [
              "It returns a value from the generator function.",
              "It creates a new generator object.",
              "It defines a variable that can be accessed from outside the generator function.",
              "It pauses the generator function and allows for iterative processing.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "How can you sort a list of dictionaries based on a specific key in Python?",
            options: [
              "By using the 'sort()' method with a lambda function.",
              "By converting the list to a set and then sorting it.",
              "By using the 'sorted()' function with the 'key' parameter.",
              "By using the 'filter()' function with a custom filtering function.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the purpose of the 'with' statement in Python when working with files?",
            options: [
              "To create a new file.",
              "To open a file in write mode.",
              "To handle exceptions that may occur while working with files.",
              "To ensure that file resources are properly managed and closed after use.",
            ],
            correctAnswer: "3",
          },
        ],
      },
      "15 intermed python questions": {
        questions: [
          {
            question: "What is the purpose of a Python virtual environment?",
            options: [
              "To create a separate environment for testing Python applications.",
              "To run Python code without an internet connection.",
              "To optimize the performance of Python code.",
              "To create a virtual reality environment using Python.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the difference between 'deep copy' and 'shallow copy' in Python?",
            options: [
              "'Deep copy' creates a new object with a new memory address, while 'shallow copy' creates a new object that shares the same memory address as the original.",
              "'Deep copy' creates a new object that shares the same memory address as the original, while 'shallow copy' creates a new object with a new memory address.",
              "'Deep copy' copies the elements of a list or dictionary to another list or dictionary, while 'shallow copy' only copies the outer structure.",
              "'Deep copy' is used for copying integers and floats, while 'shallow copy' is used for copying lists and dictionaries.",
            ],
            correctAnswer: "0",
          },
          {
            question: "How do you handle exceptions in Python?",
            options: [
              "By using the 'finally' block.",
              "By using the 'try-except' block.",
              "By using the 'raise' keyword.",
              "By using the 'assert' keyword.",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is the purpose of the 'lambda' function in Python?",
            options: [
              "To declare anonymous functions.",
              "To convert data types.",
              "To create multi-line functions.",
              "To define class methods.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the role of 'self' in a Python class method?",
            options: [
              "'self' refers to the class instance itself and is used to access its attributes and methods.",
              "'self' is used to create private variables in a class.",
              "'self' is a reserved keyword for defining class-level variables.",
              "'self' is used to refer to other instances of the class within a method.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "How can you read and write data to a CSV file in Python?",
            options: [
              "By using the 'csv' module's 'read' and 'write' methods.",
              "By opening the file in read or write mode and using 'readline()' and 'write()' functions.",
              "By using the 'pandas' library's 'read_csv()' and 'to_csv()' functions.",
              "By converting the CSV file to a JSON format and using Python's JSON module.",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is a Python decorator used for?",
            options: [
              "To modify the behavior of class methods or functions.",
              "To add CSS styles to HTML elements.",
              "To create animation effects in graphical applications.",
              "To define routing rules in web applications.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What does the 'yield' keyword do in a Python generator function?",
            options: [
              "It returns a value from the generator function.",
              "It creates a new generator object.",
              "It defines a variable that can be accessed from outside the generator function.",
              "It pauses the generator function and allows for iterative processing.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "How can you sort a list of dictionaries based on a specific key in Python?",
            options: [
              "By using the 'sort()' method with a lambda function.",
              "By converting the list to a set and then sorting it.",
              "By using the 'sorted()' function with the 'key' parameter.",
              "By using the 'filter()' function with a custom filtering function.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the purpose of the 'with' statement in Python when working with files?",
            options: [
              "To create a new file.",
              "To open a file in write mode.",
              "To handle exceptions that may occur while working with files.",
              "To ensure that file resources are properly managed and closed after use.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What is the difference between a list comprehension and a generator expression in Python?",
            options: [
              "A list comprehension produces a list, while a generator expression produces a generator object.",
              "A list comprehension is used for filtering elements, while a generator expression is used for mapping elements.",
              "A list comprehension is used for mapping elements, while a generator expression is used for filtering elements.",
              "A list comprehension is more memory-efficient than a generator expression.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What does the 'pass' statement do in Python?",
            options: [
              "It raises an exception.",
              "It defines a function but doesn't execute any code.",
              "It stops the execution of a loop.",
              "It allows you to skip a conditional block.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "How do you create a copy of a list without modifying the original list in Python?",
            options: [
              "By using the 'copy()' method of the list.",
              "By using the 'clone()' method of the list.",
              "By using the 'duplicate()' method of the list.",
              "By using the 'slice' notation (e.g., myList[:]).",
            ],
            correctAnswer: "3",
          },
          {
            question: "What is the purpose of the 'map()' function in Python?",
            options: [
              "To apply a function to each element of an iterable and return a new iterable with the results.",
              "To merge two or more dictionaries into a single dictionary.",
              "To filter elements of an iterable based on a condition.",
              "To sort elements of an iterable in ascending order.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "How do you handle multiple exceptions in Python using 'except'?",
            options: [
              "By using the 'catch' block.",
              "By separating exception types with commas (e.g., 'except ValueError, TypeError').",
              "By nesting 'try-except' blocks.",
              "By using the 'else' block after the 'except' block.",
            ],
            correctAnswer: "1",
          },
        ],
      },
      "20 intermed python questions": {
        questions: [
          {
            question: "What is the purpose of a Python virtual environment?",
            options: [
              "To create a separate environment for testing Python applications.",
              "To run Python code without an internet connection.",
              "To optimize the performance of Python code.",
              "To create a virtual reality environment using Python.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the difference between 'deep copy' and 'shallow copy' in Python?",
            options: [
              "'Deep copy' creates a new object with a new memory address, while 'shallow copy' creates a new object that shares the same memory address as the original.",
              "'Deep copy' creates a new object that shares the same memory address as the original, while 'shallow copy' creates a new object with a new memory address.",
              "'Deep copy' copies the elements of a list or dictionary to another list or dictionary, while 'shallow copy' only copies the outer structure.",
              "'Deep copy' is used for copying integers and floats, while 'shallow copy' is used for copying lists and dictionaries.",
            ],
            correctAnswer: "0",
          },
          {
            question: "How do you handle exceptions in Python?",
            options: [
              "By using the 'finally' block.",
              "By using the 'try-except' block.",
              "By using the 'raise' keyword.",
              "By using the 'assert' keyword.",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is the purpose of the 'lambda' function in Python?",
            options: [
              "To declare anonymous functions.",
              "To convert data types.",
              "To create multi-line functions.",
              "To define class methods.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the role of 'self' in a Python class method?",
            options: [
              "'self' refers to the class instance itself and is used to access its attributes and methods.",
              "'self' is used to create private variables in a class.",
              "'self' is a reserved keyword for defining class-level variables.",
              "'self' is used to refer to other instances of the class within a method.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "How can you read and write data to a CSV file in Python?",
            options: [
              "By using the 'csv' module's 'read' and 'write' methods.",
              "By opening the file in read or write mode and using 'readline()' and 'write()' functions.",
              "By using the 'pandas' library's 'read_csv()' and 'to_csv()' functions.",
              "By converting the CSV file to a JSON format and using Python's JSON module.",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is a Python decorator used for?",
            options: [
              "To modify the behavior of class methods or functions.",
              "To add CSS styles to HTML elements.",
              "To create animation effects in graphical applications.",
              "To define routing rules in web applications.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What does the 'yield' keyword do in a Python generator function?",
            options: [
              "It returns a value from the generator function.",
              "It creates a new generator object.",
              "It defines a variable that can be accessed from outside the generator function.",
              "It pauses the generator function and allows for iterative processing.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "How can you sort a list of dictionaries based on a specific key in Python?",
            options: [
              "By using the 'sort()' method with a lambda function.",
              "By converting the list to a set and then sorting it.",
              "By using the 'sorted()' function with the 'key' parameter.",
              "By using the 'filter()' function with a custom filtering function.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the purpose of the 'with' statement in Python when working with files?",
            options: [
              "To create a new file.",
              "To open a file in write mode.",
              "To handle exceptions that may occur while working with files.",
              "To ensure that file resources are properly managed and closed after use.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What is the difference between a list comprehension and a generator expression in Python?",
            options: [
              "A list comprehension produces a list, while a generator expression produces a generator object.",
              "A list comprehension is used for filtering elements, while a generator expression is used for mapping elements.",
              "A list comprehension is used for mapping elements, while a generator expression is used for filtering elements.",
              "A list comprehension is more memory-efficient than a generator expression.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What does the 'pass' statement do in Python?",
            options: [
              "It raises an exception.",
              "It defines a function but doesn't execute any code.",
              "It stops the execution of a loop.",
              "It allows you to skip a conditional block.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "How do you create a copy of a list without modifying the original list in Python?",
            options: [
              "By using the 'copy()' method of the list.",
              "By using the 'clone()' method of the list.",
              "By using the 'duplicate()' method of the list.",
              "By using the 'slice' notation (e.g., 'myList[:]').",
            ],
            correctAnswer: "3",
          },
          {
            question: "What is the purpose of the 'map()' function in Python?",
            options: [
              "To apply a function to each element of an iterable and return a new iterable with the results.",
              "To merge two or more dictionaries into a single dictionary.",
              "To filter elements of an iterable based on a condition.",
              "To sort elements of an iterable in ascending order.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "How do you handle multiple exceptions in Python using 'except'?",
            options: [
              "By using the 'catch' block.",
              "By separating exception types with commas (e.g., 'except ValueError, TypeError').",
              "By nesting 'try-except' blocks.",
              "By using the 'else' block after the 'except' block.",
            ],
            correctAnswer: "1",
          },
          {
            question: "In Python, what is the purpose of the 'sys' module?",
            options: [
              "To provide system-related information and functions.",
              "To perform mathematical operations.",
              "To handle date and time.",
              "To work with regular expressions.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the use of the 'super()' function in Python?",
            options: [
              "To call the base class constructor from the derived class.",
              "To check if a variable is defined in the local scope.",
              "To override a method in the base class.",
              "To create an instance of a class.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of the 'json' module in Python?",
            options: [
              "To handle binary data.",
              "To work with JSON data (e.g., encoding and decoding).",
              "To perform file I/O operations.",
              "To generate random numbers.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "How do you convert a Python dictionary to a JSON string?",
            options: [
              "By using the 'to_json()' method of the dictionary.",
              "By using the 'json.dump()' method.",
              "By using the 'json.dumps()' method.",
              "By using the 'convert_to_json()' function.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the purpose of the 'itertools' module in Python?",
            options: [
              "To provide tools for working with iterables (e.g., infinite iterators, combinations).",
              "To perform input/output operations.",
              "To handle exceptions and errors.",
              "To define classes and objects.",
            ],
            correctAnswer: "0",
          },
        ],
      },
      "10 advanced python questions": {
        questions: [
          {
            question: "What is a closure in Python?",
            options: [
              "A way to securely close a file after reading or writing.",
              "A function object that remembers values in the enclosing scope even if they are not present in memory.",
              "A feature to close a database connection after performing database operations.",
              "A method to terminate a Python script at runtime.",
            ],
            correctAnswer: "1",
          },
          {
            question: "Explain the Global Interpreter Lock (GIL) in Python.",
            options: [
              "GIL is a lock that prevents multiple threads from executing Python bytecode simultaneously to avoid race conditions.",
              "GIL is a feature that enables automatic memory management in Python.",
              "GIL is a mechanism to protect sensitive data in Python.",
              "GIL is used to allow multiple processes to communicate with each other in Python.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What are metaclasses in Python?",
            options: [
              "Metaclasses are classes that can inherit from multiple base classes.",
              "Metaclasses are classes used for instantiating objects.",
              "Metaclasses are classes used for implementing decorators in Python.",
              "Metaclasses are classes used for creating and controlling class objects.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "Explain the difference between 'deepcopy()' and 'copy()' in the 'copy' module.",
            options: [
              "'deepcopy()' creates a shallow copy of an object, while 'copy()' creates a deep copy.",
              "'deepcopy()' creates a deep copy of an object, including copies of nested objects, while 'copy()' creates a shallow copy.",
              "'deepcopy()' is used for copying immutable objects, while 'copy()' is used for mutable objects.",
              "'deepcopy()' is used for copying lists and tuples, while 'copy()' is used for dictionaries and sets.",
            ],
            correctAnswer: "1",
          },
          {
            question: "How does Python handle memory management?",
            options: [
              "Python uses garbage collection to automatically manage memory by freeing up unused objects.",
              "Python relies on manual memory management using 'malloc()' and 'free()' functions.",
              "Python uses automatic memory allocation and deallocation for all objects.",
              "Python uses a 'memory' module for explicit memory management.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of the 'asyncio' module in Python?",
            options: [
              "To handle asynchronous I/O operations using coroutines.",
              "To manage system processes and threads in a concurrent manner.",
              "To perform parallel processing of data in Python.",
              "To implement event-driven programming in Python.",
            ],
            correctAnswer: "0",
          },
          {
            question: "How can you create a custom exception in Python?",
            options: [
              "By raising a built-in exception with a custom message.",
              "By defining a class that inherits from the 'Exception' base class.",
              "By using the 'try-except' block with a custom error code.",
              "By using the 'raise' keyword with a custom error code.",
            ],
            correctAnswer: "1",
          },
          {
            question: "What are decorators in Python?",
            options: [
              "Decorators are design patterns used for adding behavior to objects.",
              "Decorators are functions that modify the behavior of other functions or methods.",
              "Decorators are classes used for managing database connections.",
              "Decorators are used for decorating GUI elements in Python applications.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the use of the 'slots' attribute in Python classes.",
            options: [
              "It allows you to create private attributes in a class.",
              "It specifies the maximum number of instances that can be created from a class.",
              "It is used to define the class's interfaces with other classes.",
              "It optimizes memory usage by defining a fixed set of attributes for instances.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What is the purpose of the 'concurrent.futures' module in Python?",
            options: [
              "To create concurrent processes for parallel computing.",
              "To manage and schedule Python tasks using threads and processes.",
              "To perform file I/O operations concurrently.",
              "To handle network-related tasks asynchronously.",
            ],
            correctAnswer: "1",
          },
        ],
      },
      "15 advanced python questions": {
        questions: [
          {
            question: "What is a closure in Python?",
            options: [
              "A way to securely close a file after reading or writing.",
              "A function object that remembers values in the enclosing scope even if they are not present in memory.",
              "A feature to close a database connection after performing database operations.",
              "A method to terminate a Python script at runtime.",
            ],
            correctAnswer: "1",
          },
          {
            question: "Explain the Global Interpreter Lock (GIL) in Python.",
            options: [
              "GIL is a lock that prevents multiple threads from executing Python bytecode simultaneously to avoid race conditions.",
              "GIL is a feature that enables automatic memory management in Python.",
              "GIL is a mechanism to protect sensitive data in Python.",
              "GIL is used to allow multiple processes to communicate with each other in Python.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What are metaclasses in Python?",
            options: [
              "Metaclasses are classes that can inherit from multiple base classes.",
              "Metaclasses are classes used for instantiating objects.",
              "Metaclasses are classes used for implementing decorators in Python.",
              "Metaclasses are classes used for creating and controlling class objects.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "Explain the difference between 'deepcopy()' and 'copy()' in the 'copy' module.",
            options: [
              "'deepcopy()' creates a shallow copy of an object, while 'copy()' creates a deep copy.",
              "'deepcopy()' creates a deep copy of an object, including copies of nested objects, while 'copy()' creates a shallow copy.",
              "'deepcopy()' is used for copying immutable objects, while 'copy()' is used for mutable objects.",
              "'deepcopy()' is used for copying lists and tuples, while 'copy()' is used for dictionaries and sets.",
            ],
            correctAnswer: "1",
          },
          {
            question: "How does Python handle memory management?",
            options: [
              "Python uses garbage collection to automatically manage memory by freeing up unused objects.",
              "Python relies on manual memory management using 'malloc()' and 'free()' functions.",
              "Python uses automatic memory allocation and deallocation for all objects.",
              "Python uses a 'memory' module for explicit memory management.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of the 'asyncio' module in Python?",
            options: [
              "To handle asynchronous I/O operations using coroutines.",
              "To manage system processes and threads in a concurrent manner.",
              "To perform parallel processing of data in Python.",
              "To implement event-driven programming in Python.",
            ],
            correctAnswer: "0",
          },
          {
            question: "How can you create a custom exception in Python?",
            options: [
              "By raising a built-in exception with a custom message.",
              "By defining a class that inherits from the 'Exception' base class.",
              "By using the 'try-except' block with a custom error code.",
              "By using the 'raise' keyword with a custom error code.",
            ],
            correctAnswer: "1",
          },
          {
            question: "What are decorators in Python?",
            options: [
              "Decorators are design patterns used for adding behavior to objects.",
              "Decorators are functions that modify the behavior of other functions or methods.",
              "Decorators are classes used for managing database connections.",
              "Decorators are used for decorating GUI elements in Python applications.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the use of the 'slots' attribute in Python classes.",
            options: [
              "It allows you to create private attributes in a class.",
              "It specifies the maximum number of instances that can be created from a class.",
              "It is used to define the class's interfaces with other classes.",
              "It optimizes memory usage by defining a fixed set of attributes for instances.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What is the purpose of the 'concurrent.futures' module in Python?",
            options: [
              "To create concurrent processes for parallel computing.",
              "To manage and schedule Python tasks using threads and processes.",
              "To perform file I/O operations concurrently.",
              "To handle network-related tasks asynchronously.",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is the use of the 'itertools' module in Python?",
            options: [
              "To provide tools for working with iterables (e.g., infinite iterators, combinations).",
              "To perform input/output operations.",
              "To handle exceptions and errors.",
              "To define classes and objects.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the purpose of the 'contextlib' module in Python?",
            options: [
              "To create context managers using the 'with' statement.",
              "To manage contexts for multi-threading applications.",
              "To provide utilities for working with context processors.",
              "To perform data serialization and deserialization.",
            ],
            correctAnswer: "0",
          },
          {
            question: "Explain the concept of metaprogramming in Python.",
            options: [
              "Metaprogramming is a technique to define classes that inherit from multiple base classes.",
              "Metaprogramming is a way to create decorators for functions and methods.",
              "Metaprogramming is a technique to modify or generate code during runtime.",
              "Metaprogramming is a way to handle concurrency in Python applications.",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is the purpose of the 'logging' module in Python?",
            options: [
              "To perform mathematical operations with large datasets.",
              "To handle and record application logs for debugging and analysis.",
              "To manage database connections and transactions.",
              "To define custom exception classes for error handling.",
            ],
            correctAnswer: "1",
          },
          {
            question: "Explain the concept of metaclasses in Python.",
            options: [
              "Metaclasses are classes used to define the interfaces of other classes.",
              "Metaclasses are classes used to manage and manipulate modules.",
              "Metaclasses are classes used to control the behavior of other classes during their creation.",
              "Metaclasses are classes used to create abstract base classes.",
            ],
            correctAnswer: "2",
          },
        ],
      },
      "20 advanced python questions": {
        questions: [
          {
            question: "What is a closure in Python?",
            options: [
              "A way to securely close a file after reading or writing.",
              "A function object that remembers values in the enclosing scope even if they are not present in memory.",
              "A feature to close a database connection after performing database operations.",
              "A method to terminate a Python script at runtime.",
            ],
            correctAnswer: "1",
          },
          {
            question: "Explain the Global Interpreter Lock (GIL) in Python.",
            options: [
              "GIL is a lock that prevents multiple threads from executing Python bytecode simultaneously to avoid race conditions.",
              "GIL is a feature that enables automatic memory management in Python.",
              "GIL is a mechanism to protect sensitive data in Python.",
              "GIL is used to allow multiple processes to communicate with each other in Python.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What are metaclasses in Python?",
            options: [
              "Metaclasses are classes that can inherit from multiple base classes.",
              "Metaclasses are classes used for instantiating objects.",
              "Metaclasses are classes used for implementing decorators in Python.",
              "Metaclasses are classes used for creating and controlling class objects.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "Explain the difference between 'deepcopy()' and 'copy()' in the 'copy' module.",
            options: [
              "'deepcopy()' creates a shallow copy of an object, while 'copy()' creates a deep copy.",
              "'deepcopy()' creates a deep copy of an object, including copies of nested objects, while 'copy()' creates a shallow copy.",
              "'deepcopy()' is used for copying immutable objects, while 'copy()' is used for mutable objects.",
              "'deepcopy()' is used for copying lists and tuples, while 'copy()' is used for dictionaries and sets.",
            ],
            correctAnswer: "1",
          },
          {
            question: "How does Python handle memory management?",
            options: [
              "Python uses garbage collection to automatically manage memory by freeing up unused objects.",
              "Python relies on manual memory management using 'malloc()' and 'free()' functions.",
              "Python uses automatic memory allocation and deallocation for all objects.",
              "Python uses a 'memory' module for explicit memory management.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of the 'asyncio' module in Python?",
            options: [
              "To handle asynchronous I/O operations using coroutines.",
              "To manage system processes and threads in a concurrent manner.",
              "To perform parallel processing of data in Python.",
              "To implement event-driven programming in Python.",
            ],
            correctAnswer: "0",
          },
          {
            question: "How can you create a custom exception in Python?",
            options: [
              "By raising a built-in exception with a custom message.",
              "By defining a class that inherits from the 'Exception' base class.",
              "By using the 'try-except' block with a custom error code.",
              "By using the 'raise' keyword with a custom error code.",
            ],
            correctAnswer: "1",
          },
          {
            question: "What are decorators in Python?",
            options: [
              "Decorators are design patterns used for adding behavior to objects.",
              "Decorators are functions that modify the behavior of other functions or methods.",
              "Decorators are classes used for managing database connections.",
              "Decorators are used for decorating GUI elements in Python applications.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Explain the use of the 'slots' attribute in Python classes.",
            options: [
              "It allows you to create private attributes in a class.",
              "It specifies the maximum number of instances that can be created from a class.",
              "It is used to define the class's interfaces with other classes.",
              "It optimizes memory usage by defining a fixed set of attributes for instances.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What is the purpose of the 'concurrent.futures' module in Python?",
            options: [
              "To create concurrent processes for parallel computing.",
              "To manage and schedule Python tasks using threads and processes.",
              "To perform file I/O operations concurrently.",
              "To handle network-related tasks asynchronously.",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is the use of the 'itertools' module in Python?",
            options: [
              "To provide tools for working with iterables (e.g., infinite iterators, combinations).",
              "To perform input/output operations.",
              "To handle exceptions and errors.",
              "To define classes and objects.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the purpose of the 'contextlib' module in Python?",
            options: [
              "To create context managers using the 'with' statement.",
              "To manage contexts for multi-threading applications.",
              "To provide utilities for working with context processors.",
              "To perform data serialization and deserialization.",
            ],
            correctAnswer: "0",
          },
          {
            question: "Explain the concept of metaprogramming in Python.",
            options: [
              "Metaprogramming is a technique to define classes that inherit from multiple base classes.",
              "Metaprogramming is a way to create decorators for functions and methods.",
              "Metaprogramming is a technique to modify or generate code during runtime.",
              "Metaprogramming is a way to handle concurrency in Python applications.",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is the purpose of the 'logging' module in Python?",
            options: [
              "To perform mathematical operations with large datasets.",
              "To handle and record application logs for debugging and analysis.",
              "To manage database connections and transactions.",
              "To define custom exception classes for error handling.",
            ],
            correctAnswer: "1",
          },
          {
            question: "Explain the concept of metaclasses in Python.",
            options: [
              "Metaclasses are classes used to define the interfaces of other classes.",
              "Metaclasses are classes used to manage and manipulate modules.",
              "Metaclasses are classes used to control the behavior of other classes during their creation.",
              "Metaclasses are classes used to create abstract base classes.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the purpose of the 'collections' module in Python?",
            options: [
              "To perform operations on collections of data, such as lists and dictionaries.",
              "To create collections of custom objects in Python.",
              "To handle file and directory operations.",
              "To manage network connections and protocols.",
            ],
            correctAnswer: "0",
          },
          {
            question: "How can you handle concurrency in Python?",
            options: [
              "By using multiple threads within a single process.",
              "By using multiple processes and inter-process communication.",
              "By using the 'concurrent' module for parallel execution.",
              "By using the 'asyncio' module for asynchronous programming.",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is the purpose of the 'pickle' module in Python?",
            options: [
              "To store and retrieve Python objects from a relational database.",
              "To serialize and deserialize Python objects for storage or transmission.",
              "To optimize memory usage for large data structures.",
              "To handle exceptions and errors related to data serialization.",
            ],
            correctAnswer: "1",
          },
          {
            question: "Explain the concept of metaclasses in Python.",
            options: [
              "Metaclasses are classes used to define the interfaces of other classes.",
              "Metaclasses are classes used to manage and manipulate modules.",
              "Metaclasses are classes used to control the behavior of other classes during their creation.",
              "Metaclasses are classes used to create abstract base classes.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the purpose of the 'subprocess' module in Python?",
            options: [
              "To handle regular expressions and pattern matching.",
              "To create subprocesses and manage communication with them.",
              "To perform mathematical operations with complex numbers.",
              "To generate random data and numbers in Python.",
            ],
            correctAnswer: "1",
          },
        ],
      },
    },
    java: {
      "10 beginner java questions": {
        questions: [
          {
            question: "What is Java?",
            options: [
              "A scripting language",
              "An operating system",
              "A programming language",
              "A database management system",
            ],
            correctAnswer: "2",
          },
          {
            question: "Which keyword is used to define a class in Java?",
            options: ["class", "void", "new", "this"],
            correctAnswer: "0",
          },
          {
            question:
              "What is the correct syntax for declaring a variable in Java?",
            options: [
              "int variableName;",
              "variableName = int;",
              "variableName = 10;",
              "int = variableName;",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the output of the following code snippet?\n\nint x = 5;\nint y = 2;\nSystem.out.println(x / y);",
            options: ["2.5", "2", "2.0", "2.2"],
            correctAnswer: "1",
          },
          {
            question: "In Java, how do you create an object of a class?",
            options: [
              "objectName = new className();",
              "objectName = create className();",
              "objectName = className();",
              "new className() = objectName;",
            ],
            correctAnswer: "0",
          },
          {
            question: "Which Java access modifier is the most restrictive?",
            options: ["public", "protected", "default", "private"],
            correctAnswer: "3",
          },
          {
            question:
              "What is the correct way to comment a single line in Java?",
            options: [
              "/* This is a comment */",
              "// This is a comment",
              "# This is a comment",
              "<!-- This is a comment -->",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Which loop is used to iterate a block of code until a condition becomes false?",
            options: ["while loop", "for loop", "do-while loop", "switch loop"],
            correctAnswer: "0",
          },
          {
            question:
              "What is the main purpose of the 'break' keyword in Java?",
            options: [
              "To exit the program",
              "To continue to the next iteration of a loop",
              "To skip a condition and execute a block of code",
              "To terminate the current loop or switch statement",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What is the correct way to compare two String objects in Java for their content?",
            options: [
              "str1 == str2",
              "str1.equals(str2)",
              "str1.compare(str2)",
              "str1.compareTo(str2)",
            ],
            correctAnswer: "1",
          },
        ],
      },
      "15 beginner java questions": {
        questions: [
          {
            question: "What is Java?",
            options: [
              "A scripting language",
              "An operating system",
              "A programming language",
              "A database management system",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the correct syntax for declaring a variable in Java?",
            options: [
              "int variableName;",
              "variableName = int;",
              "variableName = 10;",
              "int = variableName;",
            ],
            correctAnswer: "0",
          },
          {
            question: "In Java, how do you create an object of a class?",
            options: [
              "objectName = new className();",
              "objectName = create className();",
              "objectName = className();",
              "new className() = objectName;",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of the 'break' keyword in Java?",
            options: [
              "To exit the program",
              "To continue to the next iteration of a loop",
              "To skip a condition and execute a block of code",
              "To terminate the current loop or switch statement",
            ],
            correctAnswer: "3",
          },
          {
            question: "Which Java access modifier is the most restrictive?",
            options: ["public", "protected", "default", "private"],
            correctAnswer: "3",
          },
          {
            question:
              "What is the correct way to compare two String objects in Java for their content?",
            options: [
              "str1 == str2",
              "str1.equals(str2)",
              "str1.compare(str2)",
              "str1.compareTo(str2)",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the output of the following code snippet?\n\nint x = 5;\nint y = 2;\nSystem.out.println(x / y);",
            options: ["2.5", "2", "2.0", "2.2"],
            correctAnswer: "1",
          },
          {
            question: "Which keyword is used to define a class in Java?",
            options: ["class", "void", "new", "this"],
            correctAnswer: "0",
          },
          {
            question:
              "What is the main purpose of the 'continue' keyword in Java?",
            options: [
              "To exit the program",
              "To skip the rest of the code in a loop and start the next iteration",
              "To skip a condition and execute a block of code",
              "To terminate the current loop or switch statement",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the correct way to comment a single line in Java?",
            options: [
              "/* This is a comment */",
              "// This is a comment",
              "# This is a comment",
              "<!-- This is a comment -->",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Which loop is used to iterate a block of code until a condition becomes false?",
            options: ["while loop", "for loop", "do-while loop", "switch loop"],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of the 'if' statement in Java?",
            options: [
              "To declare a new variable",
              "To define a method",
              "To create an object",
              "To make decisions based on conditions",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What is the correct way to declare a constant variable in Java?",
            options: [
              "const int VAR_NAME = 10;",
              "final int VAR_NAME = 10;",
              "static final int VAR_NAME = 10;",
              "const VAR_NAME = 10;",
            ],
            correctAnswer: "1",
          },
          {
            question: "Which data type is used to store whole numbers in Java?",
            options: ["int", "double", "char", "boolean"],
            correctAnswer: "0",
          },
          {
            question:
              "What is the output of the following code snippet?\n\nboolean isTrue = true;\nSystem.out.println(isTrue);",
            options: ["0", "1", "true", "false"],
            correctAnswer: "2",
          },
        ],
      },
      "20 beginner java questions": {
        questions: [
          {
            question: "What is Java?",
            options: [
              "A scripting language",
              "An operating system",
              "A programming language",
              "A database management system",
            ],
            correctAnswer: "2",
          },
          {
            question: "Which keyword is used to define a class in Java?",
            options: ["class", "void", "new", "this"],
            correctAnswer: "0",
          },
          {
            question:
              "What is the correct syntax for declaring a variable in Java?",
            options: [
              "int variableName;",
              "variableName = int;",
              "variableName = 10;",
              "int = variableName;",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the output of the following code snippet?\n\nint x = 5;\nint y = 2;\nSystem.out.println(x / y);",
            options: ["2.5", "2", "2.0", "2.2"],
            correctAnswer: "1",
          },
          {
            question: "In Java, how do you create an object of a class?",
            options: [
              "objectName = new className();",
              "objectName = create className();",
              "objectName = className();",
              "new className() = objectName;",
            ],
            correctAnswer: "0",
          },
          {
            question: "Which Java access modifier is the most restrictive?",
            options: ["public", "protected", "default", "private"],
            correctAnswer: "3",
          },
          {
            question:
              "What is the correct way to compare two String objects in Java for their content?",
            options: [
              "str1 == str2",
              "str1.equals(str2)",
              "str1.compare(str2)",
              "str1.compareTo(str2)",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the correct way to comment a single line in Java?",
            options: [
              "/* This is a comment */",
              "// This is a comment",
              "# This is a comment",
              "<!-- This is a comment -->",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "Which loop is used to iterate a block of code until a condition becomes false?",
            options: ["while loop", "for loop", "do-while loop", "switch loop"],
            correctAnswer: "0",
          },
          {
            question:
              "What is the main purpose of the 'break' keyword in Java?",
            options: [
              "To exit the program",
              "To continue to the next iteration of a loop",
              "To skip a condition and execute a block of code",
              "To terminate the current loop or switch statement",
            ],
            correctAnswer: "3",
          },
          {
            question: "What is the purpose of the 'if' statement in Java?",
            options: [
              "To declare a new variable",
              "To define a method",
              "To create an object",
              "To make decisions based on conditions",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What is the correct way to declare a constant variable in Java?",
            options: [
              "const int VAR_NAME = 10;",
              "final int VAR_NAME = 10;",
              "static final int VAR_NAME = 10;",
              "const VAR_NAME = 10;",
            ],
            correctAnswer: "1",
          },
          {
            question: "Which data type is used to store whole numbers in Java?",
            options: ["int", "double", "char", "boolean"],
            correctAnswer: "0",
          },
          {
            question:
              "What is the output of the following code snippet?\n\nboolean isTrue = true;\nSystem.out.println(isTrue);",
            options: ["0", "1", "true", "false"],
            correctAnswer: "2",
          },
          {
            question: "What is the purpose of the 'continue' keyword in Java?",
            options: [
              "To exit the program",
              "To skip the rest of the code in a loop and start the next iteration",
              "To skip a condition and execute a block of code",
              "To terminate the current loop or switch statement",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the correct way to declare and initialize an array in Java?",
            options: [
              "int[] numbers = {1, 2, 3};",
              "int numbers = [1, 2, 3];",
              "int numbers = (1, 2, 3);",
              "int numbers = 1, 2, 3;",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the purpose of the 'else' keyword in an if-else statement?",
            options: [
              "To execute an alternative block of code if the condition is false",
              "To execute the same block of code regardless of the condition",
              "To define a method",
              "To declare a new variable",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the correct way to define a method in Java?",
            options: [
              "method myMethod() {}",
              "void myMethod() {}",
              "myMethod() {}",
              "function myMethod() {}",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the output of the following code snippet?\n\nint x = 10;\nint y = x++;\nSystem.out.println(y);",
            options: ["9", "10", "11", "The code will throw an error"],
            correctAnswer: "1",
          },
          {
            question:
              "What is the purpose of the 'return' keyword in a method?",
            options: [
              "To terminate the program",
              "To declare a new variable",
              "To define a loop",
              "To specify the value to be returned by the method",
            ],
            correctAnswer: "3",
          },
        ],
      },
      "10 intermed java questions": {
        questions: [
          {
            question:
              "What is the difference between method overloading and method overriding in Java?",
            options: [
              "Method overloading is when a subclass provides a specific implementation of a method defined in its superclass.",
              "Method overloading is when a subclass provides a more general implementation of a method defined in its superclass.",
              "Method overloading occurs when a class has multiple methods with the same name but different parameters.",
              "Method overriding occurs when a subclass provides a more specific implementation of a method defined in its superclass.",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is the 'this' keyword used for in Java?",
            options: [
              "To create a new instance of an object",
              "To refer to the current instance of the class",
              "To call a superclass constructor",
              "To prevent a class from being instantiated",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is the purpose of the 'super' keyword in Java?",
            options: [
              "To refer to the current instance of the class",
              "To call a superclass constructor",
              "To prevent a class from being instantiated",
              "To create a new instance of an object",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is a checked exception in Java?",
            options: [
              "An exception that occurs due to an error in the program's logic",
              "An exception that is automatically handled by the Java Virtual Machine",
              "An exception that must be caught or declared in the method's signature",
              "An exception that occurs when there is an error in the JVM",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is the purpose of the 'static' keyword in Java?",
            options: [
              "To indicate that a method is abstract and does not have a body",
              "To indicate that a variable or method belongs to the class and not to the instances of the class",
              "To prevent a class from being extended by other classes",
              "To indicate that a class is a subclass of another class",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the difference between HashSet and TreeSet in Java?",
            options: [
              "HashSet is unordered and allows duplicate elements, while TreeSet is ordered and does not allow duplicate elements.",
              "HashSet is ordered and allows duplicate elements, while TreeSet is unordered and does not allow duplicate elements.",
              "HashSet and TreeSet are both ordered and do not allow duplicate elements.",
              "HashSet and TreeSet are both unordered and allow duplicate elements.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the purpose of the 'synchronized' keyword in Java?",
            options: [
              "To indicate that a method cannot be overridden in a subclass",
              "To ensure that only one thread can access a block of code or object at a time",
              "To prevent a class from being extended by other classes",
              "To indicate that a method does not have a return value",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the difference between ArrayList and LinkedList in Java?",
            options: [
              "ArrayList is a resizable array implementation, while LinkedList is a doubly linked list implementation.",
              "ArrayList is a singly linked list implementation, while LinkedList is a resizable array implementation.",
              "ArrayList and LinkedList both use a fixed-size array to store elements.",
              "ArrayList and LinkedList both use a doubly linked list to store elements.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the purpose of the 'finally' block in a try-catch-finally statement?",
            options: [
              "To handle exceptions thrown by the try block",
              "To execute code regardless of whether an exception is thrown or not",
              "To specify the code that will throw an exception",
              "To define a block of code that will be executed repeatedly",
            ],
            correctAnswer: "1",
          },
          {
            question: "What are lambda expressions in Java?",
            options: [
              "Lambda expressions are a way to define anonymous classes in Java.",
              "Lambda expressions are used to create objects of a functional interface.",
              "Lambda expressions are used to create instances of abstract classes.",
              "Lambda expressions are a way to define static methods in Java.",
            ],
            correctAnswer: "1",
          },
        ],
      },
      "15 intermed java questions": {
        questions: [
          {
            question:
              "What is the difference between method overloading and method overriding in Java?",
            options: [
              "Method overloading is when a subclass provides a specific implementation of a method defined in its superclass.",
              "Method overloading is when a subclass provides a more general implementation of a method defined in its superclass.",
              "Method overloading occurs when a class has multiple methods with the same name but different parameters.",
              "Method overriding occurs when a subclass provides a more specific implementation of a method defined in its superclass.",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is the 'this' keyword used for in Java?",
            options: [
              "To create a new instance of an object",
              "To refer to the current instance of the class",
              "To call a superclass constructor",
              "To prevent a class from being instantiated",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is the purpose of the 'super' keyword in Java?",
            options: [
              "To refer to the current instance of the class",
              "To call a superclass constructor",
              "To prevent a class from being instantiated",
              "To create a new instance of an object",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is a checked exception in Java?",
            options: [
              "An exception that occurs due to an error in the program's logic",
              "An exception that is automatically handled by the Java Virtual Machine",
              "An exception that must be caught or declared in the method's signature",
              "An exception that occurs when there is an error in the JVM",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is the purpose of the 'static' keyword in Java?",
            options: [
              "To indicate that a method is abstract and does not have a body",
              "To indicate that a variable or method belongs to the class and not to the instances of the class",
              "To prevent a class from being extended by other classes",
              "To indicate that a class is a subclass of another class",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the difference between HashSet and TreeSet in Java?",
            options: [
              "HashSet is unordered and allows duplicate elements, while TreeSet is ordered and does not allow duplicate elements.",
              "HashSet is ordered and allows duplicate elements, while TreeSet is unordered and does not allow duplicate elements.",
              "HashSet and TreeSet are both ordered and do not allow duplicate elements.",
              "HashSet and TreeSet are both unordered and allow duplicate elements.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the purpose of the 'synchronized' keyword in Java?",
            options: [
              "To indicate that a method cannot be overridden in a subclass",
              "To ensure that only one thread can access a block of code or object at a time",
              "To prevent a class from being extended by other classes",
              "To indicate that a method does not have a return value",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the difference between ArrayList and LinkedList in Java?",
            options: [
              "ArrayList is a resizable array implementation, while LinkedList is a doubly linked list implementation.",
              "ArrayList is a singly linked list implementation, while LinkedList is a resizable array implementation.",
              "ArrayList and LinkedList both use a fixed-size array to store elements.",
              "ArrayList and LinkedList both use a doubly linked list to store elements.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the purpose of the 'finally' block in a try-catch-finally statement?",
            options: [
              "To handle exceptions thrown by the try block",
              "To execute code regardless of whether an exception is thrown or not",
              "To specify the code that will throw an exception",
              "To define a block of code that will be executed repeatedly",
            ],
            correctAnswer: "1",
          },
          {
            question: "What are lambda expressions in Java?",
            options: [
              "Lambda expressions are a way to define anonymous classes in Java.",
              "Lambda expressions are used to create objects of a functional interface.",
              "Lambda expressions are used to create instances of abstract classes.",
              "Lambda expressions are a way to define static methods in Java.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the difference between abstraction and encapsulation in Java?",
            options: [
              "Abstraction is the process of hiding the implementation details, while encapsulation is the process of defining methods and variables within a class.",
              "Encapsulation is the process of hiding the implementation details, while abstraction is the process of defining methods and variables within a class.",
              "Abstraction allows a class to inherit from multiple classes, while encapsulation allows a class to have multiple constructors.",
              "Encapsulation allows a class to inherit from multiple classes, while abstraction allows a class to have multiple constructors.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of the 'interface' keyword in Java?",
            options: [
              "To define a class that cannot be instantiated",
              "To define a blueprint for a class that can have multiple implementations",
              "To define a subclass that inherits from a superclass",
              "To define a method that must be implemented in a subclass",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the purpose of the 'try-with-resources' statement in Java?",
            options: [
              "To ensure that a method is properly closed after its execution",
              "To handle exceptions thrown by the try block",
              "To execute code regardless of whether an exception is thrown or not",
              "To define a block of code that will be executed repeatedly",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the difference between an abstract class and an interface in Java?",
            options: [
              "An abstract class can have constructors, while an interface cannot.",
              "An abstract class can have multiple implementations, while an interface can only have one.",
              "An abstract class can have instance variables, while an interface cannot.",
              "An abstract class can have static methods, while an interface cannot.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of the 'throws' keyword in Java?",
            options: [
              "To indicate that a method is abstract and does not have a body",
              "To specify the code that will throw an exception",
              "To declare that a method may throw a checked exception",
              "To indicate that a method does not have a return value",
            ],
            correctAnswer: "2",
          },
        ],
      },
      "20 intermed java questions": {
        questions: [
          {
            question:
              "What is the difference between method overloading and method overriding in Java?",
            options: [
              "Method overloading is when a subclass provides a specific implementation of a method defined in its superclass.",
              "Method overloading is when a subclass provides a more general implementation of a method defined in its superclass.",
              "Method overloading occurs when a class has multiple methods with the same name but different parameters.",
              "Method overriding occurs when a subclass provides a more specific implementation of a method defined in its superclass.",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is the 'this' keyword used for in Java?",
            options: [
              "To create a new instance of an object",
              "To refer to the current instance of the class",
              "To call a superclass constructor",
              "To prevent a class from being instantiated",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is the purpose of the 'super' keyword in Java?",
            options: [
              "To refer to the current instance of the class",
              "To call a superclass constructor",
              "To prevent a class from being instantiated",
              "To create a new instance of an object",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is a checked exception in Java?",
            options: [
              "An exception that occurs due to an error in the program's logic",
              "An exception that is automatically handled by the Java Virtual Machine",
              "An exception that must be caught or declared in the method's signature",
              "An exception that occurs when there is an error in the JVM",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is the purpose of the 'static' keyword in Java?",
            options: [
              "To indicate that a method is abstract and does not have a body",
              "To indicate that a variable or method belongs to the class and not to the instances of the class",
              "To prevent a class from being extended by other classes",
              "To indicate that a class is a subclass of another class",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the difference between HashSet and TreeSet in Java?",
            options: [
              "HashSet is unordered and allows duplicate elements, while TreeSet is ordered and does not allow duplicate elements.",
              "HashSet is ordered and allows duplicate elements, while TreeSet is unordered and does not allow duplicate elements.",
              "HashSet and TreeSet both use a fixed-size array to store elements.",
              "HashSet and TreeSet both use a doubly linked list to store elements.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the purpose of the 'synchronized' keyword in Java?",
            options: [
              "To indicate that a method cannot be overridden in a subclass",
              "To ensure that only one thread can access a block of code or object at a time",
              "To prevent a class from being extended by other classes",
              "To indicate that a method does not have a return value",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the difference between ArrayList and LinkedList in Java?",
            options: [
              "ArrayList is a resizable array implementation, while LinkedList is a doubly linked list implementation.",
              "ArrayList is a singly linked list implementation, while LinkedList is a resizable array implementation.",
              "ArrayList and LinkedList both use a fixed-size array to store elements.",
              "ArrayList and LinkedList both use a doubly linked list to store elements.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the purpose of the 'finally' block in a try-catch-finally statement?",
            options: [
              "To handle exceptions thrown by the try block",
              "To execute code regardless of whether an exception is thrown or not",
              "To specify the code that will throw an exception",
              "To define a block of code that will be executed repeatedly",
            ],
            correctAnswer: "1",
          },
          {
            question: "What are lambda expressions in Java?",
            options: [
              "Lambda expressions are a way to define anonymous classes in Java.",
              "Lambda expressions are used to create objects of a functional interface.",
              "Lambda expressions are used to create instances of abstract classes.",
              "Lambda expressions are a way to define static methods in Java.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the difference between abstraction and encapsulation in Java?",
            options: [
              "Abstraction is the process of hiding the implementation details, while encapsulation is the process of defining methods and variables within a class.",
              "Encapsulation is the process of hiding the implementation details, while abstraction is the process of defining methods and variables within a class.",
              "Abstraction allows a class to inherit from multiple classes, while encapsulation allows a class to have multiple constructors.",
              "Encapsulation allows a class to inherit from multiple classes, while abstraction allows a class to have multiple constructors.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of the 'interface' keyword in Java?",
            options: [
              "To define a class that cannot be instantiated",
              "To define a blueprint for a class that can have multiple implementations",
              "To define a subclass that inherits from a superclass",
              "To define a method that must be implemented in a subclass",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the purpose of the 'try-with-resources' statement in Java?",
            options: [
              "To ensure that a method is properly closed after its execution",
              "To handle exceptions thrown by the try block",
              "To execute code regardless of whether an exception is thrown or not",
              "To define a block of code that will be executed repeatedly",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the difference between an abstract class and an interface in Java?",
            options: [
              "An abstract class can have constructors, while an interface cannot.",
              "An abstract class can have multiple implementations, while an interface can only have one.",
              "An abstract class can have instance variables, while an interface cannot.",
              "An abstract class can have static methods, while an interface cannot.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of the 'throws' keyword in Java?",
            options: [
              "To indicate that a method is abstract and does not have a body",
              "To specify the code that will throw an exception",
              "To declare that a method may throw a checked exception",
              "To indicate that a method does not have a return value",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is the purpose of the 'transient' keyword in Java?",
            options: [
              "To indicate that a method should not be serialized",
              "To prevent a variable from being serialized",
              "To specify that a class cannot be subclassed",
              "To indicate that a class should be serializable",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the purpose of the 'instanceof' operator in Java?",
            options: [
              "To check if a class is a subclass of another class",
              "To check if an object is an instance of a particular class",
              "To determine if a method is overridden in a subclass",
              "To compare two objects for equality",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is the purpose of the 'transient' keyword in Java?",
            options: [
              "To indicate that a method should not be serialized",
              "To prevent a variable from being serialized",
              "To specify that a class cannot be subclassed",
              "To indicate that a class should be serializable",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the purpose of the 'instanceof' operator in Java?",
            options: [
              "To check if a class is a subclass of another class",
              "To check if an object is an instance of a particular class",
              "To determine if a method is overridden in a subclass",
              "To compare two objects for equality",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of the 'volatile' keyword in Java?",
            options: [
              "To indicate that a method should be synchronized",
              "To prevent a variable from being modified by multiple threads simultaneously",
              "To specify that a class cannot be extended",
              "To indicate that a method should be overridden in a subclass",
            ],
            correctAnswer: "1",
          },
        ],
      },
      "10 advanced java questions": {
        questions: [
          {
            question: "What is the purpose of the 'transient' keyword in Java?",
            options: [
              "To indicate that a method should not be serialized",
              "To prevent a variable from being serialized",
              "To specify that a class cannot be subclassed",
              "To indicate that a class should be serializable",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the purpose of the 'instanceof' operator in Java?",
            options: [
              "To check if a class is a subclass of another class",
              "To check if an object is an instance of a particular class",
              "To determine if a method is overridden in a subclass",
              "To compare two objects for equality",
            ],
            correctAnswer: "1",
          },
          {
            question: "What is the purpose of the 'volatile' keyword in Java?",
            options: [
              "To indicate that a method should be synchronized",
              "To prevent a variable from being modified by multiple threads simultaneously",
              "To specify that a class cannot be extended",
              "To indicate that a method should be overridden in a subclass",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the difference between shallow copy and deep copy in Java?",
            options: [
              "Shallow copy creates a new object but does not duplicate the elements, while deep copy creates a new object and duplicates all the elements.",
              "Shallow copy creates a new object and duplicates all the elements, while deep copy creates a new object but does not duplicate the elements.",
              "Shallow copy retains a reference to the original object, while deep copy creates a completely independent copy of the original object.",
              "Shallow copy creates a completely independent copy of the original object, while deep copy retains a reference to the original object.",
            ],
            correctAnswer: "2",
          },
          {
            question: "Explain the concept of multithreading in Java.",
            options: [
              "Multithreading allows a program to perform multiple tasks simultaneously within a single process.",
              "Multithreading is the process of converting a single-threaded program into a multi-threaded program.",
              "Multithreading is the process of dividing a single task into multiple sub-tasks.",
              "Multithreading is a technique used to prevent race conditions in concurrent programs.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of the 'strictfp' keyword in Java?",
            options: [
              "To specify that a class cannot be subclassed",
              "To indicate that a method should be synchronized",
              "To prevent floating-point calculations from being optimized by the JVM",
              "To specify that all methods of a class must be implemented as abstract methods",
            ],
            correctAnswer: "2",
          },
          {
            question: "Explain the concept of reflection in Java.",
            options: [
              "Reflection is the process of analyzing and modifying the structure and behavior of a class at runtime.",
              "Reflection is the process of analyzing and modifying the structure and behavior of a class at compile time.",
              "Reflection is a technique used to dynamically load classes in Java.",
              "Reflection is the process of hiding the implementation details of a class.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What are the advantages and disadvantages of using the Java Collections Framework?",
            options: [
              "Advantages: Provides a set of reusable data structures and algorithms. Disadvantages: May have performance overhead due to abstraction.",
              "Advantages: Increases code readability and maintainability. Disadvantages: Limited functionality for certain data structures.",
              "Advantages: Provides seamless integration with external databases. Disadvantages: Consumes excessive memory.",
              "Advantages: Enables automatic memory management. Disadvantages: Requires manual garbage collection.",
            ],
            correctAnswer: "0",
          },
          {
            question: "Explain the concept of Java Native Interface (JNI).",
            options: [
              "JNI is a technique used to write platform-independent code in Java.",
              "JNI is a mechanism that allows Java code to call or be called by native applications written in languages such as C or C++.",
              "JNI is a built-in library in Java that provides access to the underlying operating system.",
              "JNI is a technique used to encrypt and decrypt data in Java.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What are the differences between checked and unchecked exceptions in Java?",
            options: [
              "Checked exceptions must be caught or declared in the method's signature, while unchecked exceptions do not have this requirement.",
              "Checked exceptions are only thrown by methods that access external resources, while unchecked exceptions are thrown by any method.",
              "Checked exceptions are caused by errors in the program's logic, while unchecked exceptions are caused by errors in the JVM.",
              "Checked exceptions are automatically handled by the Java Virtual Machine, while unchecked exceptions are not.",
            ],
            correctAnswer: "0",
          },
        ],
      },
      "15 advanced java questions": {
        questions: [
          {
            question: "What is the purpose of the 'strictfp' keyword in Java?",
            options: [
              "To specify that a class cannot be subclassed",
              "To indicate that a method should be synchronized",
              "To prevent floating-point calculations from being optimized by the JVM",
              "To specify that all methods of a class must be implemented as abstract methods",
            ],
            correctAnswer: "2",
          },
          {
            question: "Explain the concept of reflection in Java.",
            options: [
              "Reflection is the process of analyzing and modifying the structure and behavior of a class at runtime.",
              "Reflection is the process of analyzing and modifying the structure and behavior of a class at compile time.",
              "Reflection is a technique used to dynamically load classes in Java.",
              "Reflection is the process of hiding the implementation details of a class.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What are the advantages and disadvantages of using the Java Collections Framework?",
            options: [
              "Advantages: Provides a set of reusable data structures and algorithms. Disadvantages: May have performance overhead due to abstraction.",
              "Advantages: Increases code readability and maintainability. Disadvantages: Limited functionality for certain data structures.",
              "Advantages: Provides seamless integration with external databases. Disadvantages: Consumes excessive memory.",
              "Advantages: Enables automatic memory management. Disadvantages: Requires manual garbage collection.",
            ],
            correctAnswer: "0",
          },
          {
            question: "Explain the concept of Java Native Interface (JNI).",
            options: [
              "JNI is a technique used to write platform-independent code in Java.",
              "JNI is a mechanism that allows Java code to call or be called by native applications written in languages such as C or C++.",
              "JNI is a built-in library in Java that provides access to the underlying operating system.",
              "JNI is a technique used to encrypt and decrypt data in Java.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What are the differences between checked and unchecked exceptions in Java?",
            options: [
              "Checked exceptions must be caught or declared in the method's signature, while unchecked exceptions do not have this requirement.",
              "Checked exceptions are only thrown by methods that access external resources, while unchecked exceptions are thrown by any method.",
              "Checked exceptions are caused by errors in the program's logic, while unchecked exceptions are caused by errors in the JVM.",
              "Checked exceptions are automatically handled by the Java Virtual Machine, while unchecked exceptions are not.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of the 'assert' keyword in Java?",
            options: [
              "To check if a variable is null",
              "To test a boolean expression and throw an exception if it evaluates to false",
              "To convert a primitive data type to an object",
              "To perform mathematical calculations with floating-point numbers",
            ],
            correctAnswer: "1",
          },
          {
            question: "Explain the concept of the Java ClassLoader.",
            options: [
              "The Java ClassLoader is a mechanism that loads classes at compile-time.",
              "The Java ClassLoader is a built-in library that provides access to the underlying operating system.",
              "The Java ClassLoader is a mechanism that loads classes at runtime when they are first referenced in the code.",
              "The Java ClassLoader is a tool used for debugging and profiling Java applications.",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is the purpose of the 'finalize' method in Java?",
            options: [
              "To force garbage collection of an object",
              "To indicate that a class cannot be subclassed",
              "To indicate that a method should be synchronized",
              "To perform cleanup operations on an object before it is garbage collected",
            ],
            correctAnswer: "3",
          },
          {
            question: "What are Java annotations, and how are they used?",
            options: [
              "Java annotations are comments that are used to improve the readability of the code.",
              "Java annotations are used to add metadata to Java code and are commonly used for providing instructions to the compiler or other tools.",
              "Java annotations are used to create graphical user interfaces in Java applications.",
              "Java annotations are used to define the structure and behavior of classes and methods in Java.",
            ],
            correctAnswer: "1",
          },
          {
            question: "Explain the concept of lambda expressions in Java 8.",
            options: [
              "Lambda expressions are used to define anonymous classes in Java.",
              "Lambda expressions are used to create objects of a functional interface.",
              "Lambda expressions are used to create instances of abstract classes.",
              "Lambda expressions are a way to define static methods in Java.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the difference between 'synchronized' and 'concurrent' collections in Java?",
            options: [
              "'Synchronized' collections ensure that only one thread can modify the collection at a time, while 'concurrent' collections allow multiple threads to modify the collection simultaneously.",
              "'Synchronized' collections allow multiple threads to modify the collection simultaneously, while 'concurrent' collections ensure that only one thread can modify the collection at a time.",
              "'Synchronized' collections are more efficient than 'concurrent' collections for multi-threaded scenarios.",
              "'Synchronized' collections are not thread-safe, while 'concurrent' collections are thread-safe.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the purpose of the 'Executors' framework in Java?",
            options: [
              "The 'Executors' framework is used for creating and managing threads in Java applications.",
              "The 'Executors' framework is used for handling exceptions in Java applications.",
              "The 'Executors' framework is used for managing external resources in Java applications.",
              "The 'Executors' framework is used for creating and managing collections in Java applications.",
            ],
            correctAnswer: "0",
          },
          {
            question: "Explain the concept of Java Generics.",
            options: [
              "Java Generics allow a method to return different data types based on the input parameters.",
              "Java Generics are a way to perform arithmetic operations with different data types.",
              "Java Generics allow a class or method to operate on objects of various types while providing compile-time type safety.",
              "Java Generics allow a class or method to operate on primitive data types.",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is the 'java.time' package introduced in Java 8?",
            options: [
              "The 'java.time' package is used for working with XML data in Java applications.",
              "The 'java.time' package is used for handling exceptions in Java applications.",
              "The 'java.time' package is used for creating and managing threads in Java applications.",
              "The 'java.time' package is used for working with date and time values in Java applications.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What is the purpose of the 'ProcessBuilder' class in Java?",
            options: [
              "The 'ProcessBuilder' class is used for creating instances of abstract classes in Java.",
              "The 'ProcessBuilder' class is used for executing external processes and controlling their input, output, and error streams.",
              "The 'ProcessBuilder' class is used for creating and managing collections in Java applications.",
              "The 'ProcessBuilder' class is used for handling exceptions in Java applications.",
            ],
            correctAnswer: "1",
          },
        ],
      },
      "20 advanced java questions": {
        questions: [
          {
            question: "What is the purpose of the 'assert' keyword in Java?",
            options: [
              "To check if a variable is null",
              "To test a boolean expression and throw an exception if it evaluates to false",
              "To convert a primitive data type to an object",
              "To perform mathematical calculations with floating-point numbers",
            ],
            correctAnswer: "1",
          },
          {
            question: "Explain the concept of the Java ClassLoader.",
            options: [
              "The Java ClassLoader is a mechanism that loads classes at compile-time.",
              "The Java ClassLoader is a built-in library that provides access to the underlying operating system.",
              "The Java ClassLoader is a mechanism that loads classes at runtime when they are first referenced in the code.",
              "The Java ClassLoader is a tool used for debugging and profiling Java applications.",
            ],
            correctAnswer: "2",
          },
          {
            question: "What are Java annotations, and how are they used?",
            options: [
              "Java annotations are comments that are used to improve the readability of the code.",
              "Java annotations are used to add metadata to Java code and are commonly used for providing instructions to the compiler or other tools.",
              "Java annotations are used to create graphical user interfaces in Java applications.",
              "Java annotations are used to define the structure and behavior of classes and methods in Java.",
            ],
            correctAnswer: "1",
          },
          {
            question: "Explain the concept of lambda expressions in Java 8.",
            options: [
              "Lambda expressions are used to define anonymous classes in Java.",
              "Lambda expressions are used to create objects of a functional interface.",
              "Lambda expressions are used to create instances of abstract classes.",
              "Lambda expressions are a way to define static methods in Java.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the difference between 'synchronized' and 'concurrent' collections in Java?",
            options: [
              "'Synchronized' collections ensure that only one thread can modify the collection at a time, while 'concurrent' collections allow multiple threads to modify the collection simultaneously.",
              "'Synchronized' collections allow multiple threads to modify the collection simultaneously, while 'concurrent' collections ensure that only one thread can modify the collection at a time.",
              "'Synchronized' collections are more efficient than 'concurrent' collections for multi-threaded scenarios.",
              "'Synchronized' collections are not thread-safe, while 'concurrent' collections are thread-safe.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What is the purpose of the 'Executors' framework in Java?",
            options: [
              "The 'Executors' framework is used for creating and managing threads in Java applications.",
              "The 'Executors' framework is used for handling exceptions in Java applications.",
              "The 'Executors' framework is used for managing external resources in Java applications.",
              "The 'Executors' framework is used for creating and managing collections in Java applications.",
            ],
            correctAnswer: "0",
          },
          {
            question: "Explain the concept of Java Generics.",
            options: [
              "Java Generics allow a method to return different data types based on the input parameters.",
              "Java Generics are a way to perform arithmetic operations with different data types.",
              "Java Generics allow a class or method to operate on objects of various types while providing compile-time type safety.",
              "Java Generics allow a class or method to operate on primitive data types.",
            ],
            correctAnswer: "2",
          },
          {
            question: "What is the 'java.time' package introduced in Java 8?",
            options: [
              "The 'java.time' package is used for working with XML data in Java applications.",
              "The 'java.time' package is used for handling exceptions in Java applications.",
              "The 'java.time' package is used for creating and managing threads in Java applications.",
              "The 'java.time' package is used for working with date and time values in Java applications.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What is the purpose of the 'ProcessBuilder' class in Java?",
            options: [
              "The 'ProcessBuilder' class is used for creating instances of abstract classes in Java.",
              "The 'ProcessBuilder' class is used for executing external processes and controlling their input, output, and error streams.",
              "The 'ProcessBuilder' class is used for creating and managing collections in Java applications.",
              "The 'ProcessBuilder' class is used for handling exceptions in Java applications.",
            ],
            correctAnswer: "1",
          },
          {
            question:
              "What is the purpose of the 'Streams' API introduced in Java 8?",
            options: [
              "The 'Streams' API is used for handling file input/output operations in Java applications.",
              "The 'Streams' API is used for creating and managing threads in Java applications.",
              "The 'Streams' API is used for processing sequences of data in a functional programming style.",
              "The 'Streams' API is used for creating graphical user interfaces in Java applications.",
            ],
            correctAnswer: "2",
          },
          {
            question: "Explain the concept of Functional Interfaces in Java.",
            options: [
              "Functional Interfaces are interfaces that have only one abstract method and are used to define lambda expressions in Java.",
              "Functional Interfaces are interfaces used for creating abstract classes in Java.",
              "Functional Interfaces are interfaces used for creating graphical user interfaces in Java.",
              "Functional Interfaces are interfaces used for handling exceptions in Java applications.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What are the advantages and disadvantages of using the Java Stream API?",
            options: [
              "Advantages: Provides a set of reusable data processing operations. Disadvantages: May have performance overhead due to intermediate operations.",
              "Advantages: Increases code readability and maintainability. Disadvantages: Limited functionality for certain data structures.",
              "Advantages: Provides seamless integration with external databases. Disadvantages: Consumes excessive memory.",
              "Advantages: Enables automatic memory management. Disadvantages: Requires manual garbage collection.",
            ],
            correctAnswer: "0",
          },
          {
            question:
              "What are the design principles of Object-Oriented Programming (OOP)?",
            options: [
              "Encapsulation, Inheritance, Polymorphism, and Abstraction",
              "Inheritance, Polymorphism, Interfaces, and Composition",
              "Encapsulation, Interfaces, Polymorphism, and Abstraction",
              "Encapsulation, Inheritance, Interfaces, and Composition",
            ],
            correctAnswer: "0",
          },
          {
            question: "Explain the concept of Garbage Collection in Java.",
            options: [
              "Garbage Collection is a process of reclaiming the memory occupied by objects that are no longer in use.",
              "Garbage Collection is a process of cleaning up resources like files and database connections.",
              "Garbage Collection is a process of converting objects to primitive data types.",
              "Garbage Collection is a process of managing external resources in Java applications.",
            ],
            correctAnswer: "0",
          },
          {
            question: "What is the purpose of the 'java.nio' package in Java?",
            options: [
              "The 'java.nio' package is used for working with XML data in Java applications.",
              "The 'java.nio' package is used for handling exceptions in Java applications.",
              "The 'java.nio' package is used for creating and managing threads in Java applications.",
              "The 'java.nio' package is used for performing non-blocking I/O operations in Java applications.",
            ],
            correctAnswer: "3",
          },
          {
            question: "Explain the concept of Thread Pools in Java.",
            options: [
              "Thread Pools are used for creating and managing collections in Java applications.",
              "Thread Pools are used for handling exceptions in Java applications.",
              "Thread Pools are used for creating and managing threads in Java applications.",
              "Thread Pools are used for executing external processes and controlling their input, output, and error streams.",
            ],
            correctAnswer: "2",
          },
          {
            question:
              "What is the purpose of the 'java.util.concurrent' package in Java?",
            options: [
              "The 'java.util.concurrent' package is used for handling file input/output operations in Java applications.",
              "The 'java.util.concurrent' package is used for creating graphical user interfaces in Java applications.",
              "The 'java.util.concurrent' package is used for managing external resources in Java applications.",
              "The 'java.util.concurrent' package is used for creating and managing concurrent utilities and data structures in Java applications.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What is the purpose of the 'try-with-resources' statement in Java?",
            options: [
              "The 'try-with-resources' statement is used for creating and managing threads in Java applications.",
              "The 'try-with-resources' statement is used for handling exceptions in Java applications.",
              "The 'try-with-resources' statement is used for working with XML data in Java applications.",
              "The 'try-with-resources' statement is used for managing external resources such as files and database connections.",
            ],
            correctAnswer: "3",
          },
          {
            question: "Explain the concept of the Java Security Manager.",
            options: [
              "The Java Security Manager is a built-in library that provides access to the underlying operating system.",
              "The Java Security Manager is used for creating and managing graphical user interfaces in Java applications.",
              "The Java Security Manager is a tool used for debugging and profiling Java applications.",
              "The Java Security Manager is a security mechanism used to define and enforce security policies for Java applications.",
            ],
            correctAnswer: "3",
          },
          {
            question:
              "What is the purpose of the 'java.lang.instrument' package in Java?",
            options: [
              "The 'java.lang.instrument' package is used for creating and managing collections in Java applications.",
              "The 'java.lang.instrument' package is used for handling exceptions in Java applications.",
              "The 'java.lang.instrument' package is used for creating graphical user interfaces in Java applications.",
              "The 'java.lang.instrument' package is used for instrumenting Java bytecode at runtime for performance monitoring and profiling.",
            ],
            correctAnswer: "3",
          },
        ],
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
