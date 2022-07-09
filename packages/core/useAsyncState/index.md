---
category: State
---

# useAsyncState

响应式的异步状态。不会阻止您的设置功能，并会在承诺准备就绪后触发更改。

## Usage

```ts
import axios from 'axios'
import { useAsyncState } from '@vueuse/core'

const { state, isReady, isLoading } = useAsyncState(
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(t => t.data),
  { id: null },
)
```
