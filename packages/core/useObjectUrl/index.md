---
category: Browser
---

# useObjectUrl

对象的响应式URL。

通过 [URL.createObjectURL()](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) 为提供的 `File`、`Blob` 或 `MediaSource` 创建 URL，并在源更改或卸载组件时通过 [URL.revokeObjectURL()](https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL) 自动释放 URL。

## Usage

```html
<script setup>
import { useObjectUrl } from '@vueuse/core'
import { shallowRef } from 'vue'

const file = shallowRef()
const url = useObjectUrl(file)

const onFileChange = (e) => {
  file.value = event.target.files[0]
}
</script>

<template>
  <input type="file" @change="onFileChange" />

  <a :href="url">Open file</a>
</template>
```

## Component Usage

```html
<template>
  <UseObjectUrl v-slot="url" :object="file">
    <a :href="url">Open file</a>
  </UseObjectUrl>
</template>
```
