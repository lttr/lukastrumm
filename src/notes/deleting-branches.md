---
title: Deleting branches
date: 2020-04-16
tags: git
---

_Deleting a branch means deleting a reference._

### Deleting a local branch

```
git branch --delete <branch>
git branch -d <branch>  # Shorter version
git branch -D <branch>  # Force delete un-merged branches
```

### Deleting a remote branch

...and a local remote tracking at the same time

```
git push origin --delete <branch>
git push origin :<branch>  # Old syntax
```

### Deleting a local remote-tracking branch

```
git branch --delete --remotes <remote>/<branch>
git branch -dr <remote>/<branch>
```

### Deleting remote-tracking branches which have nothing to track

```
git fetch <remote> --prune
git fetch <remote> -p
```

### Check what remains

```
git branch -a
```

### Delete remote-tracking branches, that have already been removed from remote

```
git remote prune origin
```

### Local vs tracking vs remote branch

![origin/X tracks X on origin](/img/tracking-remote-branch-schema.png 'Image from _[stackoverflow](http://stackoverflow.com/a/23961231)_')
