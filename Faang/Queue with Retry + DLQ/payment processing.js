// Interview Insight:

// Retry mechanism
// Dead Letter Queue
// Real-world reliability


class Queue {
  constructor() {
    this.queue = [];
    this.dlq = [];
  }

  enqueue(msg) {
    this.queue.push({ ...msg, retries: 0 });
  }

  process() {
    const job = this.queue.shift();
    if (!job) return;

    try {
      if (Math.random() < 0.5) throw new Error("Fail");

      console.log("Processed:", job);
    } catch (err) {
      job.retries++;
      if (job.retries > 3) {
        this.dlq.push(job);
        console.log("Moved to DLQ:", job);
      } else {
        this.queue.push(job);
      }
    }
  }
}

const q = new Queue();
q.enqueue({ id: 1 });

setInterval(() => q.process(), 1000);


