// define a function in javascript
const hello = () => {
    console.log("Hello world!");
  };
  
  hello();

// JavaScript is a single-threaded programming language. In practice, this means that it has a single call stack that keeps track of the active (called) functions in the program; the function that is on top of the call stack is the function that is being executed.

// Whenever a function is called, it is put to the top of the call stack, and whenever the execution of a function is finished, it is removed from the call stack.

const line = () => {
    console.log("------------");
  };
  
const new_hello = () => {
    line();
    console.log("Hello world!");
    line();
  };
  
new_hello();

const greet = (name) => {
    console.log(`Hello ${name}!`);
  };
  
  greet("Brendan Eich");

  const new_greet = (greeting = "Hello", name = "John Doe") => {
    console.log(`${greeting} ${name}!`);
  };
  
  new_greet();
  new_greet("Oh hi");
  new_greet("Hello", "Brendan Eich");
  new_greet("Hello there!", "General Kenobi");

  const greeting = (who = "John Doe") => {
    return `Hello ${who}!`;
  };
  
  const output = greeting("you");
  console.log(output);