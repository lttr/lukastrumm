---
title: Reusable components
date: 2021-02-15
tags:
  - frontend
  - components
  - learning
  - vue
---

In this article I am trying to summarize a couple of techniques that are
typically used for building reusable components. The idea came to me from a
course on VueJS by Michael Thiessen. I am writing the examples in simple
javascript functions and not in any framework code.

---

<style>
button {
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
}
@media (prefers-color-scheme: dark) {
  button {
      color: var(--text-color);
      background: var(--body-back-color);
      border-color: var(--primary-color);
    }
}
</style>

Video course [Reusable components by Michael Thiessen][1] is another take on
some basic features of VueJS. Michael is explaining the concepts that one need
to create a reusable component and specific VueJS features only happen to be the
implementation.

I'm going to summarize every technique (Michael calls them _levels of
reusability_), but I'll only use simple javascript functions as examples, since
the ideas are not framework dependant.

## Templating

Is about reusing the same markup. Copy pasting a piece of markup might be a good
starting point. And it might be enough---not everyting needs to be absolutely
DRY and componentized.

```javascript {run}
const buttonTemplate = `<button>😊 </button>`
function MyButtonComponent() {
  return `<button>😊 Foo</button>`
}

MyButtonComponent()
```

### Result

<div id="b1"></div>
<script>
function MyButtonComponent() {
  return `<button>😊 Foo</button>`
}
document.getElementById('b1').innerHTML = MyButtonComponent()
</script>
<br />

## Configuration

Is parametrized template. This is the core of any templating language. Also this
is how a so called dumb component looks like.

```javascript {run}
function MyButtonComponent({ text }) {
  return `<button>😊 <em>${text}</em></button>`
}
MyButtonComponent({ text: "My Emphasised Button" })
```

### Result

<div id="b2"></div>
<script>
function MyButtonComponent({ text }) {
  return `<button>😊 <em>${text}</em></button>`
}
document.getElementById('b2').innerHTML = MyButtonComponent({ text: 'My Emphasised Button' })
</script>
<br />

## Adaptability

A component is adaptable, when it can be used for different purposes. And it is
typically the case when the component accepts _slots_ for external content.

```javascript {run}
function MyButtonComponent(content) {
  return `<button>${content}</button>`
}
MyButtonComponent("<strong>My Strong Button 🙍</strong>")
```

### Result

<div id="b3"></div>
<script>
function MyButtonComponent(content) {
  return `<button>${content}</button>`
}
document.getElementById('b3').innerHTML = MyButtonComponent('<strong>My Strong Button 🙍</strong>')
</script>
<br />

## Inversion

Only the child component in this example knows a special algorithm to compute
something, while only the parent component knows how to present the information
in text. Passing a funciton as a component property is known as _render props_.

```javascript {run}
// Child component
function MyButtonComponent(contentFunction) {
  const computeLevelFromContent = (content) => content.length
  const level = computeLevelFromContent(contentFunction(""))
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

Extensible component is like an adaptable component in this context but with an
_extension point_. One can provide custom content for this extension point or
use the default. There might be multiple extension points, which would be
implemented as _named scoped slots_ in VueJS for example.

```javascript {run}
function MyButtonComponent({ buttonText } = {}) {
  if (!buttonText) {
    buttonText = (level) => `My Powerful Button (level: ${level})`
  }
  const computeLevelFromContent = (content) => content.length
  const level = computeLevelFromContent(buttonText(""))
  const content = buttonText(level)
  return `<button>${content}</button>`
}

function Parent() {
  return `${MyButtonComponent()} ${MyButtonComponent({
    buttonText: (level) => `${level} My Extended Button 😉`,
  })}`
}
Parent()
```

### Result

<div id="b5"></div>
<script>
function MyButtonComponent({ buttonText } = {}) {
  if (!buttonText) {
    buttonText = (level) => `My Powerful Button (level: ${level})`
  }
  const computeLevelFromContent = (content) => content.length
  const level = computeLevelFromContent(buttonText(''))
  const content = buttonText(level)
  return `<button>${content}</button>`
}
document.getElementById('b5').innerHTML
  = `${MyButtonComponent()} ${MyButtonComponent({
    buttonText: (level) => `Level ${level}: My Extended Button 😉`,
  })}`
</script>
<br />

## Nesting

When we nest components while using previous techniques we end up passing
content from parent components down into nested child components. Slots inside
slots. Maximum adaptability but also maximum cognitive overhead.

In Vue placing a slot that is passed into another component's slot is not that
bad, but I'm not going to write a convoluted vanilla javascript example. This
piece of Vue template shows a slot that a parent component can use to pass
content down into AdaptableComponent and use all its props.

One interesting aspect of this is that we can decide where we want the content
to come from and where in the hierarchy the default content will be placed.

```html
<template>
  <AdaptableComponent>
    <template #default="scope">
      <slot v-bind="scope" />
    </template>
  </AdaptableComponent>
</template>
```

[1]: https://michaelnthiessen.com/reusable-components
