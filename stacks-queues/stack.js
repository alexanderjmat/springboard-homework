/** Node: node for a stack. */

class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  print() {
    let currentNode = this.first
    while (currentNode) {
      console.log(currentNode.val)
      currentNode = currentNode.next
    }
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val, this.first)
    if (this.size == 0) {
      this.first = newNode
      this.last = newNode
      this.size += 1
      return undefined
    }
    this.first = newNode
    this.size += 1
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let currentNode = this.first.val
    if (this.size == 0) {
      throw new Error("Stack is empty")
    }
    this.first = this.first.next
    this.size -= 1
    return currentNode
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.size ? this.first.val : new Error('Stack is empty')
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size ? false : true
  }
}

let ms = new Stack()
ms.push(1)
ms.push(2)
ms.push(3)

module.exports = Stack;
