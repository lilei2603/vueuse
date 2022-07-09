---
category: Component
---

# templateRef

将 ref 绑定到模板元素的简写。

## Usage

```vue
<script lang="ts">
import { templateRef } from '@vueuse/core'

export default {
  setup() {
    const target = templateRef('target')

    // no need to return the `target`, it will bind to the ref magically
  },
}
</script>

<template>
  <div ref="target" />
</template>
```

### 使用 JSX/TSX

```tsx
import { templateRef } from '@vueuse/core'

export default {
  setup() {
    const target = templateRef<HTMLElement | null>('target', null)

    // use string ref
    return () => <div ref="target"></div>
  },
}
```

### `<script setup>`

与 `<script setup>` 一起使用时不需要这样做，因为所有变量都将暴露给模板。它将与 `ref` 完全相同。

```vue
<script setup lang="ts">
import { ref } from 'vue'

const target = ref<HTMLElement | null>(null)
</script>

<template>
  <div ref="target" />
</template>
```
