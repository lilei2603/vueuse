---
category: Utilities
---

# useClamp

将一个值夹在其他两个值之间，并且是响应式的。

## Usage

```ts
import { useClamp } from '@vueuse/core'

const min = ref(0)
const max = ref(10)
const value = useClamp(0, min, max)
```
