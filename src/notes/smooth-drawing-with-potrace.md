---
title: Smooth drawing with potrace
date: 2020-08-21
tags:
---

[Potrace](http://potrace.sourceforge.net/) is a tool that converts bitmaps to vector images. It is especially good for converting hand made drawings.

This setup worked for me:

```
pdftoppm -singlefile input.pdf | potrace --output output.svg --blacklevel 0.72 --color '#404040' --svg; xdg-open output.svg

```

Potrace expects some some specific formats on input. My scanned drawing is in pdf and `pdftoppm` happaned to be installed on my Linux machine.

![A simple drawing converted with `potrace`](potrace-test.svg)
