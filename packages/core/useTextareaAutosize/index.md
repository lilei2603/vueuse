---
category: Browser
---

# useTextareaAutosize

根据其内容自动更新 textarea 元素的高度。

## Usage

```vue
<script setup lang="ts">
const { textarea, input } = useTextareaAutosize()
</script>

<template>
  <textarea
    ref="textarea"
    v-model="input"
    class="resize-none"
    placeholder="What's on your mind?"
  />
</template>
```
