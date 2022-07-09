---
category: Elements
---

# useElementSize

响应式的HTML元素的大小。[ResizeObserver MDN](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)

## Usage

```html
<template>
  <div ref="el">
    Height: {{ height }}
    Width: {{ Width }}
  </div>
</template>

<script>
import { ref } from 'vue'
import { useElementSize } from '@vueuse/core'

export default {
  setup() {
    const el = ref(null)
    const { width, height } = useElementSize(el)

    return {
      el,
      width,
      height,
    }
  }
})
</script>
```

## 组件用法

```html
<UseElementSize v-slot="{ width, height }">
  Width: {{ width }}
  Height: {{ height }}
</UseElementSize>
```
## 指令用法

```html
<script setup lang="ts">
import { vElementSize } from '@vueuse/components'
function onResize({ width, height }: { width: number; height: number }) {
  console.log(width, height)
}
</script>

<template>
  <textarea v-element-size="onResize" />
  <!-- with options -->
  <textarea v-element-size="[onResize, {width:100,height:100}, {'box':'content-box'} ]" />
</template>
```
