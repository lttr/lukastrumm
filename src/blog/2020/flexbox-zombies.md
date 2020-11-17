---
title: Flexbox zombies
date: 2020-11-14
tags:
  - css
---

Recently I have finished the Flexbox zombies game. The way the author forces you to deliberately practice a skill is great.

---

[Flexbox zombies](https://flexboxzombies.com) is an online course that teaches you the `display: flex` css property. It presents quite a boring topic---placing items on a screen---in a very atractive way.

Even if you think you know css flexbox I would still recommend it, because it is interesting how it is presented directly inside a browser and everything is interactive. And you will probably find out you dont know everything. I have found a couple of new facts and I'm going to describe them now.

## Flex shorthand

Shorthand property `flex` combines `flex-grow`, `flex-shrink` and `flex-basis`. E.g.

```html {run}
<style>
  .flex {
    display: flex;
    width: 300px;
    background: var(--blue);
  }
  .flexible-item {
    flex: 1 0 0;
    background: var(--cyan);
  }
</style>
<div class="flex">
  <div class="flexible-item">Lorem ipsum</div>
</div>
```
