---
title: Project local Neovim settings
date: 2025-06-03
tags:
  - neovim
  - configuration
---

## 1. Enable `exrc` option

For me it was in `~/dotfiles/nvim/lua/my/settings.lua`

```
vim.opt.exrc = true
```

## 2. Create `.nvim.lua`

The local config can be any lua code in `<your-project>/.nvim.lua`

Ignore the local config file, if it is your personal and you don't want change `.gitignore`.

```
echo -e ".nvim.lua" >> .git/info/exclude
```

## 3. Mark the file as trusted

Neovim is going to ask you every time whether to load the file.

But you can mark it as trusted:

- open the file `.nvim.lua`
- execute `:trust` ex-command

## Example

I usually let Neovim to format my code on file save, but in some legacy projects it might not be desirable, so here is my `.nvim.lua` file then:

```lua
-- disable format on save by clearing the autocommands from Conform.nvim

vim.defer_fn(function()
    local conform = require("conform")
    conform.formatters_by_ft = conform.formatters_by_ft or {}
    -- Clear the autocmd by recreating the augroup empty
    vim.api.nvim_create_augroup("Conform", { clear = true })
end, 100) -- Wait for Conform to load
```
