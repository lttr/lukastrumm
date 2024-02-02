---
title: Parse, don't validate
date: 2022-08-03
tags:
---

### Resources

- https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/
- https://itnext.io/parse-dont-validate-incoming-data-in-typescript-d6d5bfb092c8

```typescript
// parseFooData defines validator, type and parser logic
// at the same time
const incommingFooData: any = { foo: 'foo@example.com' }
const parsedFooData = parseFooData(incommingData)
// parseFooData is now of type Foo or an error was thrown
```
