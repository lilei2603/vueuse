---
category: Watch
---

# watchAtMost

监听器被触发的次数限制。

## Usage

类似于 `watch` 带有一个额外的选项计数，它设置了回调函数被触发的次数。达到计数后，手表将自动停止。

```ts
import { watchAtMost } from '@vueuse/core'

watchAtMost(
  source,
  () => { console.log('trigger!') }, // triggered it at most 3 times
  {
    count: 3, // the number of times triggered
  },
)
```
