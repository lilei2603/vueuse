---
category: Sensors
---

# useTextSelection

基于 [`Window.getSelection`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection) 被动跟踪用户文本选择。

## Usage

```html
<template>
  <p>{{state.text}}</p>
</template>

<script setup lang="ts">
  import { useTextSelection } from '@vueuse/core'
  const state = useTextSelection()
</script>
```
