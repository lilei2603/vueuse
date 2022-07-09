---
category: Utilities
---

# useConfirmDialog

创建一个事件钩子来支持模态对话框和确认对话框链。

函数可以在模板中使用，钩子是模态对话框或其他需要用户确认的行为的落脚点。

## 函数和钩子

- `reveal()` - 触发 `onReveal` 钩子并设置 `reveal.value` 为 `true`。返回由 `confirm()` 或 `cancel()` 解决的 `promise`。
- `confirm()` - 将 `isRevealed.value` 设置为 `false` 并触发 `onConfirm` 钩子。
- `cancel()` - 将 `isRevealed.value` 设置为 `false` 并触发 onCancel 钩子。

## Basic Usage

### 使用钩子

```html
<script setup>
import { useConfirmDialog } from '@vueuse/core'

const {
  isRevealed,
  reveal,
  confirm,
  cancel,
  onReveal,
  onConfirm,
  onCancel,
} = useConfirmDialog()
</script>

<template>
  <button @click="reveal">Reveal Modal</button>

  <teleport to="body">
    <div v-if="isRevealed" class="modal-bg">
      <div class="modal">
        <h2>Confirm?</h2>
        <button @click="confirm">Yes</button>
        <button @click="cancel">Cancel</button>
      </div>
    </div>
  </teleport>
</template>
```

### Promise

如果您更喜欢使用 Promise：

```html
<script setup>
import { useConfirmDialog, onClickOutside } from '@vueuse/core'

const {
  isRevealed,
  reveal,
  confirm,
  cancel,
} = useConfirmDialog()

const openDialog = async () => {
  const { data, isCanceled } = await reveal()
  if (!isCanceled) {
    console.log(data)
  }
}
</script>

<template>
  <button @click="openDialog">Show Modal</button>

  <teleport to="body">
    <div v-if="isRevealed" class="modal-layout">
      <div class="modal">
        <h2>Confirm?</h2>
        <button @click="confirm(true)">Yes</button>
        <button @click="confirm(false)">No</button>
      </div>
    </div>
  </teleport>
</template>
```
