---
title: Make stories from PR code reviews
number: 4
date: 2026-10-06
---

You still need to review code, but these days it often makes more sense to look at it from a higher level. And when you spot something, you want to give the agent targeted feedback right in the context of that code.

You can get the higher-level view by grouping the changes into distinct areas. Try it on any GitHub PR with a tool by Anthony Fu: https://pulls.review

The feedback part is a review tool you start right from an interactive session with the agent, which then hands your comments back to it. Matteo Collina built such a tool: https://githuman.dev I tried to build my own that combines both ideas and adds a bit more. It turned out not to be that hard: https://github.com/lttr/git-history-viewer

If some simplification is welcome, or necessary because of the amount of changes you have to take in, it can help to have an HTML overview generated. Simon Willison described the approach: https://simonwillison.net/guides/agentic-engineering-patterns/linear-walkthroughs/
