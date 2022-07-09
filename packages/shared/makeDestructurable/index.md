---
category: Utilities
---

# makeDestructurable

同时使对象和数组同构可解构。有关更多详细信息，请参阅[此博客](https://antfu.me/posts/destructuring-with-object-or-array/)。

## Usage

TypeScript Example:

<!-- eslint-disable array-bracket-spacing -->
<!-- eslint-disable @typescript-eslint/no-redeclare -->

```ts
import { makeDestructurable } from '@vueuse/core'

const foo = { name: 'foo' }
const bar = 1024

const obj = makeDestructurable(
  { foo, bar } as const,
  [ foo, bar ] as const,
)
```

Usage:

<!-- eslint-disable array-bracket-spacing -->
<!-- eslint-disable @typescript-eslint/no-redeclare -->

```ts
let { foo, bar } = obj
let [ foo, bar ] = obj
```
