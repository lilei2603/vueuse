---
category: Watch
alias: throttledWatch
---

# watchThrottled

节流的监听器

## Usage

与 `watch` 类似，但提供了一个额外的选项 `throttle`，它将应用于回调函数。

```ts
import { watchThrottled } from '@vueuse/core'

watchThrottled(
  source,
  () => { console.log('changed!') },
  { throttle: 500 },
)
```

它本质上是以下代码的简写：

```ts
import { throttleFilter, watchWithFilter } from '@vueuse/core'

watchWithFilter(
  source,
  () => { console.log('changed!') },
  {
    eventFilter: throttleFilter(500),
  },
)
```
