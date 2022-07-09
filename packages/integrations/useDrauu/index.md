---
category: '@Integrations'
---

# useDrauu

[drauu](https://github.com/antfu/drauu) 的响应式实例

## Usage

```html
<script setup>
import { ref } from 'vue'
import { toRefs } from '@vueuse/core'
import { useDrauu } from '@vueuse/integrations'

const target = ref()
const { undo, redo, canUndo, canRedo, brush } = useDrauu(target)
const { color, size } = toRefs(brush)
</script>

<template>
  <svg ref="target"></svg>
</template>
```
