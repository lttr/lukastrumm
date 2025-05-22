---
title: Install Nerd font
date: 2021-09-16
tags: fonts
---


How to download Fira Mono Regular and Medium (for bold) patched nerd font:

```bash
FONT_TARGET_DIR="${HOME}/.fonts/"
cd ~/Downloads
curl -fsL https://github.com/ryanoasis/nerd-fonts/releases/download/v3.4.0/FiraMono.tar.xz
mkdir FiraMono
mv FiraMono.tar.xz FiraMono/
cd FiraMono
tar xvzf FiraMono.tar.xz 
mkdir -p $FONT_TARGET_DIR
cp FiraMonoNerdFont-Regular.otf FiraMonoNerdFont-Medium.otf FiraMonoNerdFont-Bold.otf $FONT_TARGET_DIR
fc-cache -f
cd ~/Downloads
trash-put FiraMono
```

Then in terminal configuration, e.g. in `kitty.conf`:

```
font_family      FiraMono Nerd Font
bold_font        FiraMono Nerd Font Medium
```
