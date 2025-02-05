---
title: SSH keys
date: 2020-01-04
tags: linux
---

### Generate key

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
# better, more modern:
ssh-keygen -t ed25519 -C "your_email@example.com" -f "file_name"
```

### Check correct file permissions

```bash
stat -c '%a %n' ~/.ssh ~/.ssh/*
```

should output something like:

```bash
700 /home/[username]/.ssh
600 /home/[username]/.ssh/id_rsa
644 /home/[username]/.ssh/id_rsa.pub
644 /home/[username]/.ssh/known_hosts
```

### Copy to clipboard

`copy` is e.g. `xclip -sel clip`

```bash
cat ~/.ssh/id_rsa.pub | copy
```

### Check fingerprint

to compare with the one saved in an online service

```bash
ssh-add -l -E md5
```

### Test connection to Github

```bash
ssh -T git@github.com
```
