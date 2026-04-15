// producer.js
const queue = require("./Queue");

function createOrder(order) {
  console.log("Order received:", order);
  queue.enqueue(order);
}

createOrder({ id: 1, item: "Laptop" });

