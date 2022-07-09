---
category: Utilities
---

# useTimeoutPoll

使用超时来轮询某些东西。最后一个任务完成后会触发回调。

## Usage

```ts
import { useTimeoutPoll } from '@vueuse/core'

const count = ref(0)

const fetchData = async () => {
  await promiseTimeout(1000)
  count.value++
}

// Only trigger after last fetch is done
const { isActive, pause, resume } = useTimeoutPoll(fetchData, 1000)
```
