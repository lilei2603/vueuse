---
category: Component
---

# useMounted

响应式的 `Mounted` 状态

## Usage

```js
import { useMounted } from '@vueuse/core'

const isMounted = useMounted()
```

Which is essentially a shorthand of:

```ts
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
```
