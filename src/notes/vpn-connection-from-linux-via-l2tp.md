---
title: VPN connection from Linux via l2tp
date: 2020-01-08
tags:
  - linux
  - troubleshooting
---

## Problem

Unable to connect to VPN using `l2tp` protocol on Linux.

## Solution

1. Install latest version of `network-manager-l2tp` for Gnome and disable `xl2tdp` service.

```shell-session
sudo apt-get purge network-manager-l2tp network-manager-l2tp-gnome
sudo add-apt-repository ppa:nm-l2tp/network-manager-l2tp
sudo apt-get update
sudo apt-get install network-manager-l2tp network-manager-l2tp-gnome
sudo apt-get upgrade
sudo systemctl stop xl2tpd
sudo systemctl disable xl2tpd
```

2. Add these communication algorithms in settings of the VPN connection:

> Phase1Algorithm: aes128-sha1-modp1024,3des-sha1-modp1024!
> Phase2Algorithm: aes128-sha1,3des-md5

3. On IPv4 tab uncheck _Use this connection only for resources on this network_

## Sources

- https://askubuntu.com/questions/1072252/ubuntu-18-04-vpn-l2tp-with-psk/1188347#1188347
- https://github.com/nm-l2tp/NetworkManager-l2tp/wiki/Known-Issues
