---
category: Sensors
---

# useFocus

用于跟踪或设置 DOM 元素的焦点状态的响应式实用程序。状态更改以反映目标元素是否为焦点元素。从外部设置响应值将分别触发 true 和 false 值的 `获取焦点` 和 `失去焦点` 事件。

## Basic Usage

```ts
import { useFocus } from '@vueuse/core'

const target = ref()
const { focused } = useFocus(target)

watch(focused, (focused) => {
  if (focused)
    console.log('input element has been focused')
  else console.log('input element has lost focus')
})
```

## Setting initial focus

要将元素集中在它的第一次渲染上，可以将 `initialValue` 选项设置为 `true`。这将触发目标元素上的 `获取焦点` 事件。

```ts
import { useFocus } from '@vueuse/core'

const target = ref()
const { focused } = useFocus(target, { initialValue: true })
```

## Change focus state

`获取焦点` 的响应式应 ref 对象的更改将分别自动触发 `true` 和 `false` 值的焦点和模糊事件。您可以利用此行为将目标元素作为另一个操作的结果（例如，当单击按钮时，如下所示）。

```html
<template>
  <div>
    <button type="button" @click="focused = true">Click me to focus input below</button>
    <input ref="input" type="text">
  </div>
</template>

<script>
import { ref } from 'vue'
import { useFocus } from '@vueuse/core'

export default {
  setup() {
    const input = ref()
    const { focused } = useFocus(input)

    return {
      input,
      focused,
    }
  }
})
</script>
```
