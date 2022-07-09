---
category: State
related:
  - useRefHistory
  - useThrottledRefHistory
---

# useDebouncedRefHistory

带有防抖过滤的 `useRefHistory` 的实现。

## Usage

当计数器的值开始变化时，此函数会在 1000 毫秒后对您的计数器进行快照。

```ts
import { ref } from 'vue'
import { useDebouncedRefHistory } from '@vueuse/core'

const counter = ref(0)
const { history, undo, redo } = useDebouncedRefHistory(counter, { deep: true, debounce: 1000 })
```
