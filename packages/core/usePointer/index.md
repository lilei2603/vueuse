---
category: Sensors
---

# usePointer

响应式的 [pointer state](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events).

## Basic Usage

```js
import { usePointer } from '@vueuse/core'

const { x, y, pressure, pointerType } = usePointer()
```

## Component Usage

默认情况下，组件将跟踪 `window` 上的指针

```html
<UsePointer v-slot="{ x, y }">
  x: {{ x }}
  y: {{ y }}
</UsePointer>
```

要跟踪元素中的本地位置，请设置 `target="self"`：

```html
<UsePointer target="self" v-slot="{ x, y }">
  x: {{ x }}
  y: {{ y }}
</UsePointer>
```
