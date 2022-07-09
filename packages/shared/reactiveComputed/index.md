---
category: Utilities
---

# reactiveComputed

响应式计算属性。 `reactiveComputed` 不是返回一个计算的 `ref`，而是返回一个响应式对象。

<RequiresProxy />

## Usage

```ts
import { reactiveComputed } from '@vueuse/core'

const state = reactiveComputed(() => {
  return {
    foo: 'bar',
    bar: 'baz',
  }
})

state.bar // 'baz'
```
