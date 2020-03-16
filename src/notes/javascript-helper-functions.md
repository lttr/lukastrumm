---
title: Javascript helper functions
date: 2020-03-12
tags: javascript
---

```js
function namesOfWeekdays() {
  return Array.from(Array(7), (_, i) =>
    new Date(0, i).toLocaleDateString('en', { weekday: 'long' })
  )
}

function namesOfMonths() {
  return Array.from(Array(12), (_, i) =>
    new Date(0, i).toLocaleDateString('en', { month: 'long' })
  )
}

function $(selector, parent = document) {
  const node = parent.querySelector(selector)
  node.on = (name, fn) => {
    node.addEventListener(name, fn)
  }
  return node
}

function $$(selector, parent = document) {
  const nodeList = Array.from(parent.querySelectorAll(selector))
  nodeList.on = (name, fn) => {
    for (const node of nodeList) {
      node.addEventListener(name, fn)
    }
  }
  return nodeList
}

function deduplicate(array) {
  return [...new Set(array)]
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 256 ** 3 - 1).toString(16)
}
```
