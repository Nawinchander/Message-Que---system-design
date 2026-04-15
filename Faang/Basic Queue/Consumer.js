// queue.js
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(msg) {
    this.queue.push(msg);
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = new Queue();

