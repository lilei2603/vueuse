---
category: Animation
---

# useTimeoutFn

封装了 `setTimeout` 。

```js
import { useTimeoutFn } from '@vueuse/core'

const { isPending, start, stop } = useTimeoutFn(() => {
  /* ... */
}, 3000)
```
