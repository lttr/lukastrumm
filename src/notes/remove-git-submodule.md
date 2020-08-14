---
title: Remove git submodule
date: 2020-08-14
tags: git
---

More information on [stackoverflow](https://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule).

Remove files of the submodule and unregister from `.git/config`

```
git submodule deinit -f <name>
rmdir <name>
```

Remove internal git submodule storage

```
rm -rf .git/modules/<name>
```

Optionally delete `.gitmodules` files if no more submodules left

```
rm .gitmodules
```
