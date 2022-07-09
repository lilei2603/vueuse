---
category: Sensors
---

# useFocusWithin

用于跟踪元素或其后代之一是否具有焦点的反应性实用程序。它旨在匹配 `:focus-within` CSS 伪类的行为。一个常见的用例是在表单元素上查看其任何输入当前是否具有焦点。

## Basic Usage

```html
<template>
  <form ref="target">
    <input type="text" placeholder="First Name">
    <input type="text" placeholder="Last Name">
    <input type="text" placeholder="Email">
    <input type="text" placeholder="Password">
  </form>
</template>

<script>
import { useFocusWithin } from '@vueuse/core'

const target = ref();
const { focused } = useFocusWithin(target)

watch(focused, focused => {
  if (focused) console.log('Target contains the focused element')
  else console.log('Target does NOT contain the focused element')
})
</script>
```
