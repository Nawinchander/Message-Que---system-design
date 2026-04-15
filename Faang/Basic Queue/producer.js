// producer.js
const queue = require("./queue");

function createOrder(order) {
  console.log("Order received:", order);
  queue.enqueue(order);
}

createOrder({ id: 1, item: "Laptop" });

