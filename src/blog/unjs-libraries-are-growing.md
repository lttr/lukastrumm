---
title: UnJS libraries are growing
date: 2024-10-11
tags:
  - unjs
  - javascript
---

This week I had the opportunity to attend FrontKon, a conference in the Czech Republic for frontend developers and designers. I gave a short talk about UnJS, a growing set of libraries designed to simplify the creation of new frameworks and tools.

---

UnJS packages are rapidly growing in popularity. Many of them were created during the development of Nuxt 3. There are more than 60 packages, with 400 million downloads per month and growing.

The UnJS packages are used in many growing frameworks and tools such as Analog, TanStack Start, Solid Start, Vitest or Tailwind. They are definitely on to something.

## So what exactly is UnJS?

It is a set of JavaScript libraries designed to work well together.
Each package within UnJS is built with a specific purpose in mind, which is very similar to the UNIX philosophy.

What I like about it is that the libraries are pragmatic. They are not too small, like many packages on npm. They feel like lego bricks that fit together well.

Since the libraries are used in frameworks like Nuxt, most of them are battle tested and you can find their real use in repositories on Github.

## UnJS has good leadership

A key aspect of UnJS is the leadership behind it, which addresses concerns about fragmented authorship seen in many npm packages. Pooya Parsa created most of the libraries in the UnJS ecosystem. Daniel Roe, the current Nuxt core team leader, and Anthony Fu, the creator of Vitest and several other influential libraries, are also key figures.

A smaller number of maintainers is a big advantage in my eyes. A project with a lot of small dependencies depends on a lot of people. And it is only natural to have more unexpected changes and more vulnerabilities in such a case. UnJS feels much more coherent and transparent than a random set of npm packages.

The maintainers of the UnJS packages are very welcoming. They strive to create very useful libraries and discuss many of their decisions publicly, as anyone can see on their [Github organisation](https://github.com/unjs).

## Part of a bigger ecosystem

UnJS is part of a larger ecosystem of JavaScript tools. It is interesting to note that the values of the Vite bundler are very similar to those of UnJS.

Evan You, the creator of Vite and Vue, mentioned the following key values at ViteConf 2024: Tooling should be unified, high performance, composable, and runtime agnostic.
