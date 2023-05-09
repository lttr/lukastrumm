---
title: Load linting errors into neovim
date: 2023-05-09
tags:
  - linting
  - vim
---

When you need to process all errors one by one, it might be handy to load them
into your IDE. Not sure about other options, however there are no available
workspace wide diagnostics available from corresponding language servers for
this right now.

I had troubles with the output from npm run, so used pnpm instead.

Following assumes that there is a `lint` script in your `package.json` with
something like `"eslint ."` and `lint:styles` with something like
`"stylelint '**/*.{css,vue}'"`.

```sh
nvim -q <(pnpm run --silent lint --format=unix)
nvim -q <(pnpm run --silent lint:styles --formatter=unix)
```

A little bit more complicated for typescript in Vue files. The sed replacement
is poor mans formatter (translates location from something like `(3,10)` to
`:3:10`).

```sh
nvim -q <(pnpm --silent dlx vue-tsc --noEmit --pretty false | sed -E 's/\(([[:digit:]]+),([[:digit:]]+)\)/:\1:\2/')
```
