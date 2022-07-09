---
category: Utilities
---

# useCycleList

循环浏览列表。

## Usage

```ts
import { useCycleList } from '@vueuse/core'

const { state, next, prev } = useCycleList([
  'Dog',
  'Cat',
  'Lizard',
  'Shark',
  'Whale',
  'Dolphin',
  'Octopus',
  'Seal',
])

console.log(state.value) // 'Dog'

prev()

console.log(state.value) // 'Seal'
```
