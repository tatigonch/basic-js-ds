const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via stack.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.array = [];
  }

  push(element) {
    this.array.push(element);
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    const peek = this.array.length - 1;
    return this.array[peek];
  }
}

module.exports = {
  Stack
};
