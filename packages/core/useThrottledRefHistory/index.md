---
category: State
---

# useThrottledRefHistory

支持节流的 `useRefHistory`。

## Usage

此函数在计数器值更改后立即获取第一个快照，第二个延迟为 1000 毫秒。

```ts
import { ref } from 'vue'
import { useThrottledRefHistory } from '@vueuse/core'

const counter = ref(0)
const { history, undo, redo } = useThrottledRefHistory(counter, { deep: true, throttle: 1000 })
```

## 相关功能

- `useRefHistory`
- `useDebouncedRefHistory`
