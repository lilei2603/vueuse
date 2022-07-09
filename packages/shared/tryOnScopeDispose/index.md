---
category: Component
---

# tryOnScopeDispose

安全的 `onScopeDispose`。如果它在效果范围生命周期内，则调用 `onScopeDispose()`，如果不是，则不执行任何操作。

## Usage

```js
import { tryOnScopeDispose } from '@vueuse/core'

tryOnScopeDispose(() => {

})
```
