//Last in first out
class Stack {
  constructor() {
    this.stack = [];
  }
  add(element) {
    this.stack.push(element);
  }
  remove() {
    return this.stack.pop();
  }
}
const plates = new Stack();
plates.add("Abul");
console.log(plates.stack);
plates.add("Babul");
console.log(plates.stack);
plates.add("Cabul");
console.log(plates.stack);
plates.add("Dabul");
console.log(plates.stack);
plates.add("Eabul");
console.log(plates.stack);
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
