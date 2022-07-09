---
category: Browser
---

# useFileDialog

轻松打开文件对话框。

## Usage

```ts
import { useFileDialog } from '@vueuse/core'

const { files, open, reset } = useDialog()
```

```html
<template>
  <button type="button" @click="open">Choose file</button>
</template>
```
