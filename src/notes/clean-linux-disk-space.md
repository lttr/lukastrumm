---
title: Clean Linux disk space
date: 2022-09-17
tags: 
  - linux
---

```
trash-empty
ls /opt
sudo apt purge ...
sudo apt-get autoclean
sudo apt autoremove
docker system prune
sudo journalctl --vacuum-size=500M
yarn cache clean
npm cache clean --force
rm -rf ..../node_modules
rm -rf ..../.terraform
```



