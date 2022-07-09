---
category: Elements
---

# useDropZone

创建一个可以删除文件的区域。

## Usage

```html
<script setup lang="ts">
import { useDropZone } from '@vueuse/core'

const dropZoneRef = ref(null)

function onDrop(dropZoneRef, files: File[] | null) {
  // Trigger an event when file(s) is drop on zone
}

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)
</script>

<template>
  <div ref="dropZoneRef">
    Drop files here
  </div>
</template>
```
