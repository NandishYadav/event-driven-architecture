// eventExample.js
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define a listener for the 'greeting' event
myEmitter.on('greeting', (message) => {
  console.log('Greeting received:', message);
});

// Define another listener for the 'farewell' event
myEmitter.on('farewell', (name) => {
  console.log('Farewell message:', `Goodbye, ${name}!`);
});

// Emit events
myEmitter.emit('greeting', 'Hello, world!');
myEmitter.emit('farewell', 'Alice');


//Enter Name and press Enter
process.stdin.on('data', (data) => {
    myEmitter.emit('greeting', data.toString());
  });
