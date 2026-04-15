// Similar to Apache Kafka
// Supports event replay
// Used in big data system


class EventStream {
  constructor() {
    this.events = [];
  }

  publish(event) {
    this.events.push(event);
  }

  subscribe(offset = 0) {
    return this.events.slice(offset);
  }
}

const stream = new EventStream();

// Producer
stream.publish({ type: "CLICK", user: 1 });
stream.publish({ type: "VIEW", user: 2 });

// Consumer
let offset = 0;

setInterval(() => {
  const newEvents = stream.subscribe(offset);
  newEvents.forEach(e => console.log("Processing:", e));
  offset += newEvents.length;
}, 2000);


