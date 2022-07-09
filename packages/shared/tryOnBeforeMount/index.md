---
category: Component
---

# tryOnBeforeMount

安全的 `onBeforeMount`。如果它在组件生命周期内，则调用 `onBeforeMount()`，如果不在，则调用该函数。

## Usage

```js
import { tryOnBeforeMount } from '@vueuse/core'

tryOnBeforeMount(() => {

})
```
