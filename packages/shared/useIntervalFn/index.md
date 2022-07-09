---
category: Animation
---

# useIntervalFn

封装了 `setInterval` 。

## Usage

```js
import { useIntervalFn } from '@vueuse/core'

const { pause, resume, isActive } = useIntervalFn(() => {
  /* your function */
}, 1000)
```
