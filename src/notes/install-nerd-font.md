---
title: Install Nerd font
date: 2021-09-16
tags: fonts
---

How to download Fira Mono Regular patched nerd font:

```bash
FONT_FILE_NAME="Fira Mono Regular Nerd Font.otf"
FONT_TARGET_DIR="${HOME}/.fonts/"
cd ~/Downloads
curl -fsLo $FONT_FILE_NAME https://github.com/ryanoasis/nerd-fonts/raw/master/patched-fonts/FiraMono/Regular/complete/Fura%20Mono%20Regular%20Nerd%20Font%20Complete.otf
mkdir -p $FONT_TARGET_DIR
cp $FONT_FILE_NAME $FONT_TARGET_DIR
fc-cache -f
rm $FONT_FILE_NAME
```

Install by executing the file...
