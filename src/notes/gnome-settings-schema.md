---
title: Gnome settings schema
date: 2020-08-03
tags: gnome
---

Gnome extensions are located in

```
~/.local/share/gnome-shell/extensions/
```

When `dconf` editor complains there is no schema available for a key, you can fix that by copiing and compiling the specific extension schema file:

```
sudo cp ~/.local/share/gnome-shell/extensions/clock-override@gnomeshell.kryogenix.org/schemas/org.gnome.shell.extensions.clock-override.gschema.xml /usr/share/glib-2.0/schemas/
sudo glib-compile-schemas /usr/share/glib-2.0/schemas/
```
