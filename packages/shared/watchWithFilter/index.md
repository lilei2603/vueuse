---
category: Watch
---

# watchWithFilter

使用额外的事件过滤器进行监听

## Usage

类似于 `watch`，但提供了一个额外的选项 `eventFilter` 将应用于回调函数。

```ts
import { debounceFilter, watchWithFilter } from '@vueuse/core'

watchWithFilter(
  source,
  () => { console.log('changed!') }, // 回调将以 500ms 去抖动的方式调用
  {
    eventFilter: debounceFilter(500), // throttledFilter、pausabledFilter 或自定义过滤器
  },
)
```
