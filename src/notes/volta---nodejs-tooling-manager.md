---
title: Volta - nodejs tooling manager
date: 2020-10-14
tags:
  - nodejs
  - javascript
---

Volta is a nice tool for managing nodejs versions, and installing global npm packages.

The best thing is, that you install and forget---volta takes care of which version to use at runtime!

https://docs.volta.sh/

## Install

```
curl https://get.volta.sh | bash -s -- --skip-setup
```

Make sure to have these two lines in shell configuration (`.zshenv` in my case)

```
export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"
```

## Usage

```
volta install node@latest
volta install yarn json eslint prettier typescript browser-sync ...
```
