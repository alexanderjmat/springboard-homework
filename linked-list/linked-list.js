/** Node: node for a singly linked list. */

class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)
    if (this.head == null) {
      this.head = newNode
      this.tail = newNode
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (this.head == null) {
      const newNode = new Node(val)
      this.head = newNode
      this.tail = newNode
    }
    const newNode = new Node(val, this.head)
    this.head = newNode
    this.length += 1

  }

  /** pop(): return & remove last item. */

  pop() {
    const value = this.tail.val
    let currentValue = this.head
    if (this.head == this.tail) {
      this.head = null
      this.tail = null
      this.length -= 1
      return value;
    }
    while (currentValue.next != this.tail) {
      currentValue = currentValue.next;
    }
    this.tail = currentValue;
    currentValue.next = null
    this.length -= 1;
    return value

  }

  /** shift(): return & remove first item. */

  shift() {
    const value = this.head.val
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return value
    }
    this.head = this.head.next
    this.length -= 1;
    return value
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let index = 0
    let currentValue = this.head
    while (index != idx) {
      index += 1
      currentValue = currentValue.next
      if (currentValue == null) {
        return false
      }
    }
    return currentValue.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let index = 0
    let currentValue = this.head
    while (index != idx) {
      index += 1
      currentValue = currentValue.next
      if (currentValue == null) {
        currentValue.val = val
        this.tail.next = currentValue
        this.tail = currentValue
        return currentValue
      }
    }
    currentValue.val = val
    return currentValue

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let index = 0
    let currentValue = this.head
    if (idx <= 0) {
      this.unshift(val)
      return val
    }
    if (idx >= this.length) {
      this.push(val)
      return val
    }

    while (index + 1 != idx) {
      currentValue = currentValue.next
      index++
    }
    let newNode = new Node(val, currentValue.next)
    currentValue.next = newNode
    this.length += 1
    return val
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let index = 0
    let currentValue = this.head

    if (idx <= 0) {
      this.shift()
      return currentValue
    }
    if (idx >= this.length) {
      let tail = this.tail
      this.pop()
      return tail
    }
    while (index + 1 != idx) {
      currentValue = currentValue.next
      index++
    }
    const returnValue = currentValue.next
    currentValue.next = currentValue.next.next
    this.length -= 1
    return returnValue

  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0
    let currentValue = this.head
    if (this.length == 0) {
      return 0;
    }
    while (currentValue) {
      sum += currentValue.val
      currentValue = currentValue.next
    }
    return sum / this.length
  }
    /** print(): print all values in the list*/

  print() {
    let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.val)
            currentNode = currentNode.next;
        }
  }
}

module.exports = LinkedList;
