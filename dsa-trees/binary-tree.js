/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0

    const nodes = [this.root]
    let sum = 1

    while (nodes.length) {
      let node = nodes.shift()
      if ((!node.left || !node.right) && node != this.root) return sum

      else if (node.left || node.right) {
        sum++
        nodes.push(node.left)
        nodes.push(node.right)
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0

    const nodes = [this.root]
    let sum = 1

    while (nodes.length) {
      let node = nodes.shift()

    if (node.left || node.right) {
        sum++
        nodes.push(node.left)
        nodes.push(node.right)
      } 
    }
    return sum;


  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0
    let treeCopy = new BinaryTree(this.root)
    console.log(treeCopy)
    const nodes = [treeCopy.root]
    let sum = nodes[0].val
    const sums = [sum]

    while (nodes.length) {
      console.log(nodes)
      let node = nodes.pop()
      if (node.left) {
        let leftVal = node.left.val + node.val
        sums.push(leftVal)
        nodes.push(node.left)
      }
      if (node.right) {
        node.right.val = node.right.val + node.val
        console.log(node.right.val)
        sums.push(node.right.val)
        nodes.push(node.right)
      }
      if (!node.left && !node.right) {
        // console.log(sums)
        return sums
      }
    }

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null

    const nodes = [this.root]
    let sum = null

    while (nodes.length) {
      let node = nodes.shift()

    if (node.left || node.right) {
        if (node.left.val >= node.right.val && node.left.val)
        nodes.push(node.left)
        nodes.push(node.right)
      } 
    }
    return sum;


  }






















  // /** Further study!
  //  * areCousins(node1, node2): determine whether two nodes are cousins
  //  * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  // /** Further study!
  //  * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  // /** Further study!
  //  * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  // /** Further study!
  //  * lowestCommonAncestor(node1, node2): find the lowest common ancestor
  //  * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {
    
  // }
}

module.exports = { BinaryTree, BinaryTreeNode };
