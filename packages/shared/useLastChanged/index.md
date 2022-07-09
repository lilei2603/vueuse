---
category: Utilities
---

# useLastChanged

记录上次更改的时间戳

## Usage

```ts
import { useLastChanged } from '@vueuse/core'

const a = ref(0)

const lastChanged = useLastChanged(a)

a.value = 1

console.log(lastChanged.value)
```
