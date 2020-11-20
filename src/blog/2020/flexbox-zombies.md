---
title: Flexbox zombies
date: 2020-11-14
tags:
  - css
---

Recently I have finished the Flexbox zombies game. The way the author forces you to deliberately practice a skill is great.

---

[Flexbox zombies](https://flexboxzombies.com) is an online course that teaches you the `display: flex` css property. It presents quite a boring topic---placing items on a screen---in a very atractive way.

Even if you think you know css flexbox I would still recommend it, because it is interesting how it is presented directly inside a browser and everything is interactive. And you will probably find out you don't know everything. I have found a couple of new facts and following are some notes about it.

## Start with display: flex

The number of times one have to write `display: flex` in the course is overwhelming, but at the end, it was worth it. As the author said---it is about deliberate practice.

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

## Flexible width

Width is flexible---who would guess?

```html {run}
<style>
  .my-box {
    width: 200px;
    min-width: 150px;
    max-width: 250px;
    flex-basis: 225px;
  }

  .item-1 {
    flex-shrink: 1;
  }

  .item-2 {
    flex-grow: 1;
  }
</style>
<div class="flex-container">
  <div class="flex-item">Fits the content</div>
</div>
<div class="flex-container">
  <div class="flex-item my-box">Flex-basis wide</div>
</div>
<div class="flex-container">
  <div class="flex-item my-box item-1">No need to shrink</div>
</div>
<div class="flex-container">
  <div class="flex-item my-box item-2">Grow stops at 250px</div>
</div>
```

## Flex shorthand

Shorthand property `flex` combines `flex-grow`, `flex-shrink` and `flex-basis`. When you omit the last one, `flex-basis` became `0` instead of `auto`.

```html {run}
<style>
  .flex-basis-auto {
    flex-basis: initial;
  }

  .flex-basis-zero {
    flex: 0 0;
  }
</style>
<div class="flex-container">
  <div class="flex-item flex-basis-auto">Flex-basis auto</div>
</div>
<div class="flex-container">
  <div class="flex-item flex-basis-zero">Flex-basis 0</div>
</div>
```

## Align content

In the following example the `align-content` property pushes all the items to the vertical center of the container while `align-items` to the center of their lines.

```html/3,8 {run}
<style>
  .content-aligned {
    flex-wrap: wrap;
    align-content: center;
  }

  .items-aligned {
    flex-wrap: wrap;
    align-items: center;
  }

  .content-aligned > *,
  .items-aligned > * {
    flex-basis: 140px;
    text-align: center;
  }
</style>
<div class="flex-container content-aligned">
  <div class="flex-item" style="background: darkcyan">Item 1</div>
  <div class="flex-item" style="background: darkgreen">Item 2</div>
  <div class="flex-item" style="background: cadetblue">Item 3</div>
</div>
<br />
<div class="flex-container items-aligned" style="background: purple">
  <div class="flex-item" style="background: darkcyan">Item 1</div>
  <div class="flex-item" style="background: darkgreen">Item 2</div>
  <div class="flex-item" style="background: cadetblue">Item 3</div>
</div>
```

## New properties

There are new properties available in some browsers that are not mentioned in the Flexbox zombies course.

One is [`gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/gap):

```html {run}
<style>
  .flex-with-gap {
    gap: 20px;
  }
</style>
<div class="flex-container flex-with-gap">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>
```

Another one is [`place-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/place-content) a shorthand for `justify-content` and `align-content`:

```html {run}
<style>
  .flex-centered {
    flex-wrap: wrap;
    place-content: center;
  }

  .flex-centered > * {
    width: 120px;
  }
</style>
<div class="flex-container flex-centered">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>
```

## Conclusion

The Flexbox zombies is a great course and great game at the same time. That's rare!

I don't remember if the course mentioned a very useful value of `justify-content`: `space-evenly`. Other than that it is very thorough. I highly recommend this style of learning!
