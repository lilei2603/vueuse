---
category: Component
---

# tryOnUnmounted

安全 `onUnmounted`。如果它在组件生命周期内，则调用 `onUnmounted()`，如果不是，则不执行任何操作。

## Usage

```js
import { tryOnUnmounted } from '@vueuse/core'

tryOnUnmounted(() => {

})
```
