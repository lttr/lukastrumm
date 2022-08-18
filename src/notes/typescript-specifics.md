---
title: Typescript specifics
date: 2022-08-17
tags: 
  - typescript
---


## Declared type

```typescript
// The "declared" type is `string | number`
let x = Math.random() < 0.4 ? 10 : '' 

x = 10 // therefore this is ok
x = "foobar" // and this as well
```

## Type predicate

```typescript
// A function that accepts a single argument and returns a boolean
// A predicate helps Typescript when the control flow analysis is not enough
// The predicate is like `argumentName is Type`
function isString(input: string | number): input is string {
    return typeof input === "string"
}

let a = Math.random() < 0.3 ? 10 : "foobar"

if (isString(a)) {
    a // Typescript now knows it is a string
} else {
    a // And now a number
}
```

## Exhaustive check with discriminated union

```typescript
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Square | Rectangle;

function area(shape: Shape) {
    switch (shape.kind) {
        case "square": return shape.size * shape.size;
        case "rectangle": return shape.width * shape.height;
        // If a new case is added at compile time you will get a compile error
        // If a new value appears at runtime you will get a runtime error
        default: return assertNever(shape);
    }
}

function assertNever(x:never): never {
    throw new Error(`Should have been never. Unexpected value: ${x}`);
}
```

The assertion can also be a class that is extended from an Error
```typescript
class UnreachableCaseError extends Error {
  constructor(value: never) {
    super(`Unreachable case: ${value}`);
  }
}

...
default: throw new UnreachableCaseError(shape)
```

Or the default case can be omitted, however then there is no runtime check and the switch
has to be terminated with return statements.


## Resources
- https://www.typescriptlang.org/docs/handbook
- https://basarat.gitbook.io/typescript
