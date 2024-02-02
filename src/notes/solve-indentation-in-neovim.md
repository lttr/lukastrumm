---
title: Solve indentation in neovim
date: 2022-09-23
tags:
  - vim
---

- Install treesitter plugin
- Enable the [indentation module](https://github.com/nvim-treesitter/nvim-treesitter#indentation)
- Install [autopairs](https://github.com/windwp/nvim-autopairs) plugin
- Install [vim-sleuth](https://github.com/tpope/vim-sleuth) plugin
- Set `map_cr = true` setting for autopairs
- Set `opt.smartindent = true`, `opt.shiftround = true` and possibly other
  indentation settings like this (tabstop, softtabstop, shiftwidth, textwidth, formatoptions) for neovim
- Use prettier or other automattic formatter and let it format your code on save
  with [null-ls](https://github.com/jose-elias-alvarez/null-ls.nvim)
