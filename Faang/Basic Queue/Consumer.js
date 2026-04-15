

// consumer.js
const queue = require("./Queue");

setInterval(() => {
  const order = queue.dequeue();
  if (order) {
    console.log("Processing order:", order);
  }
}, 2000);