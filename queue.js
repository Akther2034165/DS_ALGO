//first in first out=> fifo
class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
  dequeue() {
    this.queue.shift();
  }
}
const premiks = new Queue();
premiks.enqueue("Ashiks");
premiks.enqueue("Dewan");
premiks.enqueue("Prem");
premiks.enqueue("Sagor");
premiks.enqueue("Raj");
console.log(premiks.queue);
premiks.dequeue();
console.log(premiks.queue);
premiks.dequeue();
console.log(premiks.queue);
