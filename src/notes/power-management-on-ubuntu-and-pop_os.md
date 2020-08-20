---
title: Power management on Ubuntu and Pop!_OS
date: 2020-08-18
tags:
  - power-user
  - pop-os
---

Is it possible to hibernate a Linux machine? What is the difference between sleep, suspend, stand-by and hibernation? Why isn't my machine waking up after pressing keys on my keyboard?

---

![What is going to happen?](/img/will-it-sleep.png)

I can finally answer these questions after a long time wondering why something does not work. Let me give you explanations of some concepts first.

## Power management concepts

_These concepts are general but what I'm describing here might be specific for Ubuntu based Linux systems._

### Sleep and suspend

These terms are used interchangeably. The state of your machine is saved to RAM and the computer puts as much as it can to some low power consumption mode. Battery is still consumed, therefore there is a risk of losing unsaved work. The advantage is, that suspending and waking up is fast (couple of seconds in my experience).

### Hibernate

When a computer hibernates it saves its state to hard drive and then shuts down. Someone might call it _suspend to disk_. When it wakes up it restores its state from hard drive into memory. You need space on your hard drive in other to save the state.

### Power off

Is a normal process of properly shutting down a computer. _Halting_ a computer might be slightly different. As I understand it _powering off_ is a more complete process.

### Lock screen

When you manually lock your computer or when you are away for some time it provides you with a prompt for password---your computer is locked. The same happens when the computer is waking up.

### Idle time

Is a time when the computer evaluates that it is doing nothing. From the practical point of view the computer can be configured to do something useful after some specific time of beiing idle---lock the screen or suspend.
