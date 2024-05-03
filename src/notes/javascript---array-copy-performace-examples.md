---
title: JavaScript - array copy performace examples
date: 2020-08-20
tags:
  - javascript
  - performance
---

```js {run}
function copyUsingArrayDestructuring(arr) {
  return [...arr]
}

function copyArrayInForOfLoop(array) {
  const clone = []
  for (const item of array) {
    clone.push(item)
  }
  return clone
}

function copyArrayUsingMap(arr) {
  return arr.map((x) => x)
}

function copyArrayOneByOne(arr) {
  const clone = []
  for (let i = 0; i <= arr.length; i++) {
    clone[i] = arr[i]
  }
  return clone
}

function copyArrayFromTheEnd(arr) {
  const clone = []
  for (let i = arr.length - 1; i >= 0; i--) {
    clone[i] = arr[i]
  }
  return clone
}

function copyUsingIteratingOverProperties(obj) {
  const clone = {}
  for (const property in obj) {
    clone[property] = obj[property]
  }
  return clone
}

function copyUsingObjectAssign(obj) {
  return Object.assign({}, obj)
}

function copyUsingObjectDestructuring(obj) {
  return { ...obj }
}

function copyUsingJson(arr) {
  return JSON.parse(JSON.stringify(arr))
}

const millionItems = Array.from(Array(1000000), (_, i) => i)

function runMillionOnce(fn) {
  const start = performance.now()
  fn(millionItems)
  return performance.now() - start
}

const thousandItems = Array.from(Array(1000), (_, i) => i)

async function runThousandThousandTimesSync(fn) {
  const start = performance.now()
  for (let j = 1; j <= 1000; j++) {
    fn(thousandItems)
  }
  return performance.now() - start
}

async function runThousandThousandTimesAsync(fn) {
  const start = performance.now()
  const promises = []
  for (let j = 1; j <= 1000; j++) {
    promises.push(() => fn(thousandItems))
  }
  await Promise.all(promises)
  return performance.now() - start
}

async function run(title, runFn, functions) {
  console.log()
  console.log(title)
  for (const fn of functions) {
    for (let i = 1; i <= 3; i++) {
      const time = await runFn(fn)
      console.log(`${fn.name} ${i}: ${Math.round(time)}ms`)
    }
  }
}

async function main() {
  const functions = [
    copyUsingArrayDestructuring,
    copyArrayOneByOne,
    copyArrayUsingMap,
    copyArrayInForOfLoop,
    copyArrayFromTheEnd,
    copyUsingJson,
    copyUsingIteratingOverProperties,
    copyUsingObjectAssign,
    copyUsingObjectDestructuring,
  ]
  await run("Million once", runMillionOnce, functions)
  await run(
    "Thousand thousand times sync",
    runThousandThousandTimesSync,
    functions,
  )
  await run(
    "Thousand thousand times async",
    runThousandThousandTimesAsync,
    functions,
  )
}
main()
```
