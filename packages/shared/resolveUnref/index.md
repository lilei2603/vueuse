---
category: Utilities
related: resolveRef
---

# resolveUnref

获取 value/ref/getter 的值。

## Usage

```ts
import { resolveUnref } from '@vueuse/core'

const foo = ref('hi')

const a = resolveUnref(0) // 0
const b = resolveUnref(foo) // 'hi'
const c = resolveUnref(() => 'hi') // 'hi'
```
