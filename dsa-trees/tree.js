/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root == null) return 0;
    let sum = 0
    const values = [this.root]
    while (values.length) {
      let value = values.pop()
      sum += value.val
      console.log(values, value, sum)


      for (let child of value.children) {
        values.push(child)
      }
    }
    return sum
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root == null) return 0;
    let sum = 0
    const values = [this.root]
    while (values.length) {
      let value = values.pop()
      if (value.val % 2 == 0) sum++

      for (let child of value.children) {
        values.push(child)
      }
    }
    return sum

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root == null) return 0;
    let sum = 0
    const values = [this.root]
    while (values.length) {
      let value = values.pop()
      if (value.val > lowerBound) sum++

      for (let child of value.children) {
        values.push(child)
      }
    }
    return sum

  }
}

module.exports = { Tree, TreeNode };
