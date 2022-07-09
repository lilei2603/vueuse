---
category: Component
---

# unrefElement

对DOM元素取消响应式

## Usage

```html
<template>
  <div ref="div"/>
  <HelloWorld ref="hello"/>
</template>

<script setup>
import { ref } from 'vue'
import { unrefElement } from '@vueuse/core'

const div = ref() // will be bind to the <div> element
const hello = ref() // will be bind to the HelloWorld Component

onMounted(() => {
  console.log(unrefElement(div)) // the <div> element
  console.log(unrefElement(hello)) // the root element of the HelloWorld Component
})
</script>
```
