---
title: Binary tree in JavaScript
date: 2020-03-12
tags: javascript
---

```js {run}
class TreeNode {
  constructor(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class Stack {
  constructor(firstItem) {
    this._array = []
    if (firstItem != null) this.push(firstItem)
  }

  push(value) {
    this._array.push(value)
  }

  pop() {
    return this._array.pop()
  }

  notEmpty() {
    return this._array.length > 0
  }
}

class Queue {
  constructor(firstItem) {
    this._array = []
    if (firstItem != null) this.push(firstItem)
  }

  push(value) {
    this._array.push(value)
  }

  pop() {
    return this._array.shift()
  }

  notEmpty() {
    return this._array.length > 0
  }
}

// Expression: ((A + B) * C)
// Graph:
//     *
//    / \
//   +   C
//  / \
// A   B
//
// Breadth first order:
// * + C A B
//
// Depth first order:
// * + A B C
const a = new TreeNode("A", null, null)
const b = new TreeNode("B", null, null)
const p = new TreeNode("+", a, b)
const c = new TreeNode("C", null, null)
const root = new TreeNode("*", p, c)

function accumulatingAction(accumulator) {
  return (node) => {
    accumulator.push(node.value)
  }
}

// Depth first

function depthFirstPrefixRecursion(node, action) {
  action(node)
  if (node.left) depthFirstPrefixRecursion(node.left, action)
  if (node.right) depthFirstPrefixRecursion(node.right, action)
}

function depthFirstInfixRecursion(node, action) {
  if (node.left) depthFirstInfixRecursion(node.left, action)
  action(node)
  if (node.right) depthFirstInfixRecursion(node.right, action)
}

function depthFirstPostfixRecursion(node, action) {
  if (node.left) depthFirstPostfixRecursion(node.left, action)
  if (node.right) depthFirstPostfixRecursion(node.right, action)
  action(node)
}

function depthFirstPrefixCycle(node, action) {
  const stack = new Stack(node)
  function process(node) {
    action(node)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  while (stack.notEmpty()) {
    process(stack.pop())
  }
}

// Breadth first

function breadthFirstPrefixRecursion(node, action) {
  const queue = new Queue(node)
  function process(queue) {
    node = queue.pop()
    action(node)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
    if (queue.notEmpty()) process(queue)
  }
  process(queue)
}

function breadthFirstPrefixCycle(node, action) {
  const queue = new Queue(node)
  function process(node) {
    action(node)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  while (queue.notEmpty()) {
    process(queue.pop())
  }
}

// Depth first

const depthFirstPrefixRecursionResult = []
depthFirstPrefixRecursion(
  root,
  accumulatingAction(depthFirstPrefixRecursionResult),
)
console.log(depthFirstPrefixRecursionResult)

const depthFirstInfixRecursionResult = []
depthFirstInfixRecursion(
  root,
  accumulatingAction(depthFirstInfixRecursionResult),
)
console.log(depthFirstInfixRecursionResult)

const depthFirstPostfixRecursionResult = []
depthFirstPostfixRecursion(
  root,
  accumulatingAction(depthFirstPostfixRecursionResult),
)
console.log(depthFirstPostfixRecursionResult)

const depthFirstPrefixCycleResult = []
depthFirstPrefixCycle(root, accumulatingAction(depthFirstPrefixCycleResult))
console.log(depthFirstPrefixCycleResult)

// Breadth first

const breadthFirstPrefixRecursionResult = []
breadthFirstPrefixRecursion(
  root,
  accumulatingAction(breadthFirstPrefixRecursionResult),
)
console.log(breadthFirstPrefixRecursionResult)

const breadthFirstPrefixCycleResult = []
breadthFirstPrefixCycle(root, accumulatingAction(breadthFirstPrefixCycleResult))
console.log(breadthFirstPrefixCycleResult)
```
