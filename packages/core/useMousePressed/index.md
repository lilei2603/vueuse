---
category: Sensors
---

# useMousePressed

响应式的鼠标点击状态。由目标元素上的 `mousedown` `touchstart` 触发并由窗口上的 `mouseup` `mouseleave` `touchend` `touchcancel` 触发。

## Basic Usage

```js
import { useMousePressed } from '@vueuse/core'

const { pressed } = useMousePressed()
```

默认情况下启用触摸。要使其仅检测鼠标更改，请将 `touch` 设置为 `false`

```js
const { pressed } = useMousePressed({ touch: false })
```

要仅在特定元素上捕获 `mousedown` 和 `touchstart`，您可以通过传递元素的 ref 来指定 `目标`。


```html {16-20}
<template>
  <div ref="el">
    Only clicking on this element will trigger the update.
  </div>
</template>

<script>
import { ref } from 'vue'
import { useMousePressed } from '@vueuse/core'

export default {
  setup() {
    const el = ref(null)

    const { pressed } = useMousePressed({ target: el })

    return {
      el,
      pressed,
    }
  }
})
</script>
```

## Component Usage

```html
<UseMousePressed v-slot="{ pressed }">
  Is Pressed: {{ pressed }}
</UseMousePressed>
```
