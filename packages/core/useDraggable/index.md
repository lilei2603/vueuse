---
category: Elements
---

# useDraggable

使元素可拖动。

## Usage

```html
<script setup lang="ts">
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
</script>

<template>
  <div ref="el" :style="style" style="position: fixed">
    Drag me! I am at {{x}}, {{y}}
  </div>
</template>
```

## Component Usage

```html
<UseDraggable :initialValue="{ x: 10, y: 10 }" v-slot="{ x, y }">
  Drag me! I am at {{x}}, {{y}}
</UseDraggable>
```

对于组件使用，可以将额外的 props `storageKey` 和 `storageType` 传递给组件并启用元素位置的持久化。

```html
<UseDraggable storage-key="vueuse-draggable" storage-type="session">
  Refresh the page and I am still in the same position!
</UseDraggable>
```
