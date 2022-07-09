---
category: Animation
---

# useRafFn

在每个 `requestAnimationFrame` 上调用函数。控制暂停和恢复。

## Usage

```js
import { ref } from 'vue'
import { useRafFn } from '@vueuse/core'

const count = ref(0)

const { pause, resume } = useRafFn(() => {
  count.value++
  console.log(count.value)
})
```
