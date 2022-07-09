---
category: Component
---

# tryOnBeforeUnmount

安全的 `onBeforeUnmount`。如果它在组件生命周期内，则调用 `onBeforeUnmount()`，如果不是，则不执行任何操作。

## Usage

```js
import { tryOnBeforeUnmount } from '@vueuse/core'

tryOnBeforeUnmount(() => {

})
```
