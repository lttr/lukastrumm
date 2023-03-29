---
title: Power management on Ubuntu and Pop!_OS
date: 2020-12-16
tags:
  - power-user
  - pop-os
---

Is it possible to hibernate a Linux machine? What is the difference between sleep, suspend, stand-by and hibernation? Why isn't my machine waking up after pressing keys on my keyboard?

---

![What is going to happen?](will-it-sleep.png)

I can finally answer these questions after a long time wondering why something does not work. Let me explain some of the concepts first.

## Power management concepts

_These concepts are general but what I'm describing here might be specific for Ubuntu based Linux systems._

### Sleep and suspend

These terms are used interchangeably. The state of your machine is saved to RAM and the computer puts as much as it can to some low power consumption mode. Energy is still consumed and there is a risk of losing unsaved work in case energy is no longer available (e.g. empty battery). The advantage is, that suspending and waking up is fast (couple of seconds in my experience).

### Hibernate

When a computer hibernates it saves its state to hard drive and then shuts down. Someone might call it _suspend to disk_. When it wakes up it restores its state from hard drive into memory. You need space on your hard drive in other to save the state.

Hibernation has most issues, probably because it is dependant on the combination of hardware and operating system. You might not need hibernation---sleep might save enough energy and power off might be fast enough.

### Power off

Is a normal process of properly shutting down a computer. _Halting_ a computer might be slightly different. As I understand it _powering off_ is a more complete process.

### Lock screen

When you manually lock your computer or when you are away for some time it provides you with a prompt for password---your computer is locked. The same happens when the computer is waking up.

### Log out

Shuts down your running applications (it might not stop all of the background processes) and effectively locks the screen.

### Idle time

Is a time when the computer evaluates that it is doing nothing. From the practical point of view the computer can be configured to do something useful after some specific time of beiing idle and it might lock the screen or suspend itself.

### Standby and awake

I believe you can't directly force your computer to go into those states, those are probably internal. In _awake_ state all components are running, while in _standby_ state harddisks and other peripherials might be turned off.

## Shutting down

Or rather sleeping down because at least for me, suspending is way more convenient (read: faster) way of ending my work. I usually hit a dedicated key on my keyboard (a cheep Cherry keyboard). Another way is to let your machine sleep after a specific time. In Gnome settings there is an item called Automatic suspend (Settings -> Power), where you can set it up. Wierdly enough you need Gnome Tweaks to set the suspend action after closing a lid of your notebook (it is in General section there).

## Waking up

A reasonable way to wake up your computer is to hit some key on a keyboard. It might sound simple, but there are issues with external keyboards for notebooks or wireless keyboards. In my case I have checked [askUbuntu](https://askubuntu.com/) and my BIOS settings and found a disabled option. Now I can wake up my notebook (from sleep) using keyboard (not mouse---but I like it) which is connected via USB dongle.

## Sources

- https://askubuntu.com/questions/369760/what-are-the-differences-between-sleep-standby-suspend-and-hibernate-in-ubuntu
- https://askubuntu.com/questions/848698/wake-up-from-suspend-using-wireless-usb-keyboard-or-mouse-for-any-linux-distro/1155666#1155666
- https://help.ubuntu.com/stable/ubuntu-help/power-suspend.html.en
- https://help.ubuntu.com/stable/ubuntu-help/shell-exit.html.en#suspend
- https://wiki.ubuntu.com/PowerManagement
- https://help.ubuntu.com/stable/ubuntu-help/session-screenlocks.html.en
