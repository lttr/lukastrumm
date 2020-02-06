---
title: Killing processes
date: 2020-01-06
tags: linux
---

You can kill a process by:

### knowing process name

```shell-session
pkill process-name
```

or

```shell-session
ps au | grep process-name
kill process-id
```

### clicking on process window

```shell-session
xkill
```

### knowing a port number that is blocked by the process

using npm cli tool

```shell-session
npx cross-port-killer 4321
```

using lsof utility

```shell-session
kill $(lsof -t -i:4321)
```

or more fancy way with fzf and unix fu

```bash
portkill() {
  local pid
  # get processes listening on local numbered ports and output process id, port number and process name
  pid=$( \
    netstat -tnlp 2>/dev/null \
    | awk 'BEGIN { OFS = "\t"; print "PID","PORT","NAME" } $4 ~ "(127.0.0.1\|\[::\]\|0.0.0.0):[0-9]" && $7!="-" { gsub(/:::/,":"); split($7,a,"/"); split($4,b,":"); print a[1],b[2],a[2] }' 2>/dev/null \
    | sort -n -k2 \
    | fzf \
    | awk '{ print $1 }' \
    )

  if [ "x$pid" != "x" ]; then
    echo $pid | xargs kill -${1:-9}
    echo "Process $pid was killed"
  else
    echo "No process was killed"
  fi
}
```

![portkill function killing python process](/src/notes/killing-processes/portkill.gif)
