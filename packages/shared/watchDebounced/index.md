---
category: Watch
alias: debouncedWatch
---

# watchDebounced

防抖的监听器

## Usage

与 `watch` 类似，但提供额外的选项 `debounce` 和 `maxWait` 将应用于回调函数。

```ts
import { watchDebounced } from '@vueuse/core'

watchDebounced(
  source,
  () => { console.log('changed!') },
  { debounce: 500, maxWait: 1000 },
)
```

它本质上是以下代码的简写：

```ts
import { debounceFilter, watchWithFilter } from '@vueuse/core'

watchWithFilter(
  source,
  () => { console.log('changed!') },
  {
    eventFilter: debounceFilter(500, { maxWait: 1000 }),
  },
)
```
