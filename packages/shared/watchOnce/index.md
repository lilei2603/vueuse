---
category: Watch
---

# watchOnce

只触发一次监听器

## Usage

回调函数被触发一次后，手表会自动停止。

```ts
import { watchOnce } from '@vueuse/core'

watchOnce(source, () => {
  // triggers only once
  console.log('source changed!')
})
```
