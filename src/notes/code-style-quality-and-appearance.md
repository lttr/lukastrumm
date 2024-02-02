---
title: Code style, quality and appearance
date: 2022-08-03
tags:
  - linting
  - quality
  - code-review
---

{{ '/src/notes/code-style-quality-and-appearance/diagram.svg' | svgContents: "chameleon" }}

## Ideally...

- I want to not argue about code appearance and code style after a project has started (maybe before, but prefer the defaults/recommended)
- I don't want to manually format my code (a file save operation should be enough)
- Repeated mistakes or poor code should be checked by automation
- I want to be sure that every contributor is commiting code that is automatically checked (precommit hook with formatting and linting)
- Code reviews should be about things that can't be automated (CI should do the rest)

## Process for getting code into good shape

**For every commit:**

1. Suggestions while editing code in an IDE (format, lint, compile, ...)
1. Format
1. Autofix linting errors
1. Build (reveals errors in types and compile time errors and warnings)
1. Lint (reveals linting errors and warnings)
1. Test (reveals failing tests)
1. Code review (or for a couple of commits)

**From time to time:**

1. Other tests (smoke, integration, e2e) - might not run for every commit
1. Failed deployments (reveals infrastructure related errors)
1. Manual testing

## How to setup

- Recommended setups with typescript: https://github.com/vsramalwan/typescript-eslint-prettier-config
- Eslint with prettier: https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
- https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/
- Hook these tools into neovim's LSP support: https://github.com/jose-elias-alvarez/null-ls.nvim

## Speed

- Lint and test only what has changed (e.g. [lint-staged](https://github.com/okonet/lint-staged))
- In a monorepo setup check only affected packages (e.g. https://nx.dev/guides/eslint)

All those tools take time to execute. There are alternatives:

- https://dprint.dev/
- https://github.com/mantoni/eslint_d.js
- https://github.com/mikew/prettier_d_slim
- https://github.com/pinterest/esprint
- https://github.com/rslint/rslint

### Decisions

- ["Stylistic rules are frozen"](https://eslint.org/blog/2020/05/changes-to-rules-policies/#what-are-the-changes)
- [Prettier -> dprint](https://github.com/denoland/deno/issues/3818)
