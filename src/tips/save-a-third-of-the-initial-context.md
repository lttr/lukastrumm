---
title: Save 1/3 of the initial context in every Claude session
number: 3
date: 2026-09-25
---

Out of the box Claude Code can do more than I need day to day, and every tool and feature costs tokens right at startup. In settings.json I limited what I rarely use and dropped about a third of the system prompt and built-in tools. The difference between models is even bigger. With optimized Opus 5.5 I start a session at 8k tokens, with unoptimized Sonnet 5 at 25k. Comparison: https://html.lukastrumm.com/claude-context-compare/

The saved context lets you stay in the "smart zone" longer, making better use of the model's own intelligence. Any feature can be turned back on for a single session when needed. Here is each setting I limited and why: https://github.com/lttr/dotfiles/blob/master/claude/README.md
