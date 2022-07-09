---
category: Component
---

# useTemplateRefsList

将引用绑定到 `v-for` 中的模板元素和组件的简写。

> 该函数仅适用于 Vue 3.x。

## Usage

```html
<template>
  <div v-for="i of 5" :key="i" :ref="refs.set"></div>
</template>

<script setup lang="ts">
import { onUpdated } from 'vue'
import { useTemplateRefsList } from '@vueuse/core'

const refs = useTemplateRefsList<HTMLDivElement>()

onUpdated(() => {
  console.log(refs)
})
</script>
```
