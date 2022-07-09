---
category: State
---

# createGlobalState

将状态保持在全局范围内，以便跨 Vue 实例重用。

## Usage

```js
// store.js
import { createGlobalState, useStorage } from '@vueuse/core'

export const useGlobalState = createGlobalState(
  () => useStorage('vueuse-local-storage', 'initialValue'),
)
```

```js
// component.js
import { useGlobalState } from './store'

export default defineComponent({
  setup() {
    const state = useGlobalState()
    return { state }
  },
})
```

## Related Functions

- `createSharedComposable`
