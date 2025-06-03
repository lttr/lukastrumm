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
-- completely disable format on save and similar commands

vim.api.nvim_create_autocmd("BufWritePre", {
    buffer = 0,
    callback = function()
        return true
    end,
})
vim.api.nvim_create_autocmd("BufWritePost", {
    buffer = 0,
    callback = function()
        return true
    end,
})

```
