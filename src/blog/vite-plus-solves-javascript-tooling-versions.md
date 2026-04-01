---
title: Vite+ solves frontend tooling versions
date: 2026-03-27
draft: true
tags:
  - code-quality
  - dependency-management
  - vite-plus
  - pnpm
---

In 2023 I wrote about the challenge of keeping correct versions of tools in the JavaScript ecosystem. The situation was fragmented: different tools for the runtime, the package manager, dev tooling, and pre-commit hooks. Vite Plus changes this by unifying most of these concerns under one tool.

---

A modern frontend project depends on a specific version of Node, a package manager at a specific version, and a set of dev tools (formatter, linter, type checker, test runner, bundler). Keeping all of these in sync across team members, CI and for some longer time was quite an effort.

In my [previous article](/blog/2023/working-with-correct-versions-of-tools-in-the-javascript-ecosystem/), I described several levels of perfection:

1. doing nothing
2. documenting
3. enforcing
4. and "automagic"

Most projects landed somewhere between enforcement and automagic, stitching together multiple tools to get there.

## The old fragmented approach

Each concern had its own solution:

| Concern                    | Tools               |
| -------------------------- | ------------------- |
| Node version               | fnm, nvm, volta     |
| Package manager selection  | corepack, @antfu/ni |
| Formatting                 | prettier            |
| Linting                    | esLint, biome       |
| Type checking              | tsc                 |
| Testing                    | jest and others     |
| Building                   | vite, webpack       |
| Pre-commit hooks           | husky + lint-staged |
| Running remote executables | npx, pnpm dlx       |

Each tool needed its own configuration, its own version management, and its own mental model. The result was a lot of glue.

## What Vite+ unifies

Vite+ (Vite Plus or `vp`) covers all of the concers from the table above. Some
funcionalities from Vite+ are focused on Vite based projects, but most can be
used in other places as well.

**Node installation and version selection.** `vp env` ensures you are using the correct Node version. It installs Node if needed and selects the right version per project. Pinning is a single command:

```bash
vpn env pin lts
```

**Package manager.** `vp` handles dependency installation with automatic package manager and version selection. No Corepack, no @antfu/ni.

```
vp i
```

**Format, lint, type-check in one pass.** `vp check` runs `oxfmt`, `oxlint`, and `tsgo` together. What used to be three separate tools with three separate configs is now a single command. This one is especially great hit since I found myself using similar package.json script in almost all of my projects.

```
vp check
```

**Testing, building, packaging.** Vitest for tests, Vite for builds, tsdown for packaging libraries or standalone executables. These commands are focused on Vite based projects.

```
vp test/build/pack
```

**Task running with caching.** The `run` subcommand runs package.json scripts as
usual, and we can leverage the caching to skip tasks that have already been run.

```
vp run --cache
```

**Pre-commit and pre-push hooks.** Built into Vite Plus, replacing husky and lint-staged.

```
vp config
```

**Remote executables.** `vpx` replaces `npx` and `pnpm dlx`, trying local bins first and falling back to remote download.

```
vpx eslint
```

The key insight: when `vp env` is active, every subsequent command is guaranteed to use the correct Node version. One entry point, consistent environment.

## The trust trade-off

One publisher controls the formatter, linter, type checker, and task runner. This reduces the supply chain surface compared to depending on dozens of separate packages from different authors. But it also concentrates trust. This is the same trade-off I described when writing about [UnJS](/blog/unjs-libraries-are-growing/) and its small set of maintainers.

In practice, fewer moving parts means fewer surprises. For most teams, that is a net positive.

## Conclusion

The "automagic" level from my 2023 article is now achievable with a single tool. Instead of assembling a patchwork of version managers, hook runners, and config files, `vp env` sets the foundation and the rest follows. The JavaScript ecosystem finally has a coherent answer to the tooling version problem.
