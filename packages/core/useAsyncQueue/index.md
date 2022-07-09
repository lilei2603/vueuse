---
category: Utilities
---

# useAsyncQueue

顺序执行每个异步任务，并将当前任务结果传递给下一个任务

## Usage

```ts
import { useAsyncQueue } from '@vueuse/core'

const p1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000)
    }, 10)
  })
}

const p2 = (result: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000 + result)
    }, 20)
  })
}

const { activeIndex, result } = useAsyncQueue([p1, p2])

console.log(activeIndex.value) // current pending task index

console.log(result) // the tasks result
```
