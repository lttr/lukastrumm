---
title: NodeJS version and package managers
date: 2022-11-02
tags:
  - nodejs
  - npm
  - pnpm
  - dependency-management
---

## Definitions

**Nodejs version manager** is a tool, for installing and managing nodejs versions.
Ideally has a way to automatically use a version that is configured in a given
project. It can also manage individual tools from npm registry as global commands. Volta
does that.

**Package manager** is either `npm`, `yarn` or `pnpm`. Package manager should
manage runtime and development time dependencies of a given project. The problem
is that nodejs (in a specific version range) is also a dependency. Pnpm enables
to [manage nodejs](https://pnpm.io/cli/env). All package managers can also
manage global tools from npm registry.

**Corepack** is a tool that comes with nodejs that manages package managers. It
can inform you which package manager you are supposed to use on a given project,
in which version it should be. It can even install it and use it for you.

## The problem

I don't know what should manage what. If you can use pnpm for everything, that
is great, you can even manage nodejs.

If you use npm for everything that you might be ok with a nodejs version
manager.

But if you use a combination of those tools, then prepare for conflicts!

## Sources

- https://github.com/volta-cli/volta/issues/737
- https://github.com/pnpm/pnpm/discussions/3434
- https://nodejs.org/dist/latest/docs/api/corepack.html
