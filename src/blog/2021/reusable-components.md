---
title: Reusable components
date: 2021-02-15
tags:
  - frontend
  - components
  - learning
---

## Templating

```js {run}
function MyButtonComponent() {
  return `<button>My Button</button>`
}
MyButtonComponent()
```

### Result

<div id="b1"></div>
<script>
function MyButtonComponent() {
  return `<button>My Button</button>`
}
document.getElementById('b1').innerHTML = MyButtonComponent()
</script>
<br />

## Configuration

```js {run}
function MyButtonComponent({ text }) {
  return `<button><em>${text}</em></button>`
}
MyButtonComponent({ text: 'My Emphasised Button' })
```

### Result

<div id="b2"></div>
<script>
function MyButtonComponent({ text }) {
  return `<button><em>${text}</em></button>`
}
document.getElementById('b2').innerHTML = MyButtonComponent({ text: 'My Emphasised Button' })
</script>
<br />

## Adaptability

```js {run}
function MyButtonComponent(content) {
  return `<button>${content}</button>`
}
MyButtonComponent('<strong>My Strong Button</strong>')
```

### Result

<div id="b3"></div>
<script>
function MyButtonComponent(content) {
  return `<button>${content}</button>`
}
document.getElementById('b3').innerHTML = MyButtonComponent('<strong>My Strong Button</strong>')
</script>
<br />

## Inversion

Only the child component in this example knows a special algorithm to compute something, while only the parent component knows how to present the information in text.

```js {run}
// Child component
function MyButtonComponent(contentFunction) {
  const computeLevelFromContent = (content) => content.length
  const level = computeLevelFromContent(contentFunction(''))
  const content = contentFunction(level)
  return `<button>${content}</button>`
}

// Parent component
function Parent() {
  return MyButtonComponent((level) => `My Powerful Button (level: ${level})`)
}
Parent()
```

### Result

<div id="b4"></div>
<script>
function MyButtonComponent(contentFunction) {
  const computeLevelFromContent = (content) => content.length
  const level = computeLevelFromContent(contentFunction(''))
  const content = contentFunction(level)
  return `<button>${content}</button>`
}
document.getElementById('b4').innerHTML
  = MyButtonComponent((level) => `My Powerful Button (level: ${level})`)
</script>
<br />

## Extension

## Nesting

