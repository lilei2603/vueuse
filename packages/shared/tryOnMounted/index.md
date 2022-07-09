---
category: Component
---

# tryOnMounted

安全的 `onMounted`。如果它在组件生命周期内，则调用 `onMounted()`，如果不在，则调用该函数。

## Usage

```js
import { tryOnMounted } from '@vueuse/core'

tryOnMounted(() => {

})
```
