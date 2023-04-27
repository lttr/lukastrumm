---
title: Path manipulation in Linux
date: 2023-04-27
tags: linux
---

There is a file on location: `/home/lukas/dotfiles/zsh_plugins.txt` and a
symlink to it from `~/.zsh_plugins.txt`.

Lets break down the path segments:

```sh
realpath ~/.zsh_plugins.txt
# -> /home/lukas/dotfiles/zsh_plugins.txt

realpath --relative-to=$HOME ~/.zsh_plugins.txt
# -> dotfiles/zsh_plugins.txt

dirname $(realpath --relative-to=$HOME ~/.zsh_plugins.txt)
# -> dotfiles

basename $(realpath ~/.zsh_plugins.txt)
# -> zsh_plugins.txt

basename --suffix ".txt" $(realpath ~/.zsh_plugins.txt)
# -> zsh_plugins
```
