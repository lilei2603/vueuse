---
category: Elements
---

# useElementBounding

响应式的html [边界盒子](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) 元素

## Usage

```html
<template>
  <div ref="el" />
</template>

<script>
import { ref } from 'vue'
import { useElementBounding } from '@vueuse/core'

export default {
  setup() {
    const el = ref(null)
    const { x, y, top, right, bottom, left, width, height } = useElementBounding(el)

    return {
      el,
      /* ... */
    }
  }
}
</script>
```

## 组件用法

```html
<UseElementBounding v-slot="{ width, height }">
  Width: {{ width }}
  Height: {{ height }}
</UseElementBounding>
```
