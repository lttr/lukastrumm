---
title: Setting up Git LFS with Netlify
date: 2021-02-10
tags:
  - git-lsf
  - netlify
---

Install netlify-cli, git-lfs extension

```
volta install netlify-cli
sudo apt install git-lfs
```

Setup netlify-cli

```
netlify plugins:install netlify-lm-plugin
netlify lm:install
```

Initialize git lfs in a git repository

```
git lfs install
```

Initialize Netlify large media in a git repository

```
netlify link
netlify lm:setup
```

Track some files with git lgs

```
git lfs track "static/img/**"
```

Push changes and files will be uploaded to Netlify LFS provider

```
git add .
git commit -m "Add files to LFS"
git push
```

Result...

```
Uploading LFS objects: 100%
```
