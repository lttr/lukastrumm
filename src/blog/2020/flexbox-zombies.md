---
title: Flexbox zombies
date: 2020-11-14
tags:
  - css
---

Recently I have finished the Flexbox zombies game. The way the author forces you to deliberately practice a skill is great.

---

[Flexbox zombies](https://flexboxzombies.com) is an online course that teaches you the `display: flex` css property. It presents quite a boring topic---placing items on a screen---in a very atractive way.

Even if you think you know css flexbox I would still recommend it, because it is interesting how it is presented directly inside a browser and everything is interactive. And you will probably find out you dont know everything. I have found a couple of new facts and following are some notes about it.

## Start with display flex

Lets define a class with `display: flex` and a couple of other properties.

<style>
  .flex-container {
    display: flex;
    width: 300px;
    height: 100px;
    background: rebeccapurple;
  }
  .flex-item {
    color: white;
    background: darkcyan;
  }
</style>

```css
.flex-container {
  display: flex;
  width: 300px;
  height: 100px;
  background: rebeccapurple;
}
.flex-item {
  color: white;
  background: darkcyan;
}
```

## Width and min-width

Only min-width

```html/3 {run}
<style>
  .item-width {
    width: 290px;
    min-width: 200px;
    flex-shrink: 1;
  }
</style>
<div class="flex-container">
  <div class="flex-item item-width">Lorem ipsum</div>
</div>
```

## Flex shorthand

Shorthand property `flex` combines `flex-grow`, `flex-shrink` and `flex-basis`. E.g.

```html {run}
<style>
  .flexible-item {
    flex: 1 1 0;
    color: black;
    background: cyan;
  }
</style>
<div class="flex-container">
  <div class="flex-item">Lorem ipsum</div>
</div>
```
