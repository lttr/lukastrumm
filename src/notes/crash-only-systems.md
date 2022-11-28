---
title: Crash only systems
date: 2022-11-28
tags:
  - robustness
---

- What if a normal shut down process would be the same as an immediate crash?
- How a server finishes its requests processing when it receives termination
  signal?
- What happens with requests that would not be processed when a server
  terminates unexpectedly? Can something resend those requests?

Sources

- https://12factor.net/disposability
- https://lwn.net/Articles/191059/
