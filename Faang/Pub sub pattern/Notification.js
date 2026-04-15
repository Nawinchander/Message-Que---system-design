// Interview Insight:

// One event → multiple systems
// Used in microservices


class PubSub {
  constructor() {
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers.push(fn);
  }

  publish(msg) {
    this.subscribers.forEach(fn => fn(msg));
  }
}

const pubsub = new PubSub();

// Subscribers
pubsub.subscribe(msg => console.log("Email:", msg));
pubsub.subscribe(msg => console.log("SMS:", msg));

// Publisher
pubsub.publish("New Order Created");


