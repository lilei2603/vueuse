---
category: Sensors
---

# useMouse

响应式的鼠标位置

## Basic Usage

```js
import { useMouse } from '@vueuse/core'

const { x, y, sourceType } = useMouse()
```

默认情况下启用触摸。要仅检测鼠标变化，请将 `touch` 设置为 `false`。 `dragover` 事件用于在拖动时跟踪鼠标位置。

```js
const { x, y } = useMouse({ touch: false })
```

## Component Usage

```html
<UseMouse v-slot="{ x, y }">
  x: {{ x }}
  y: {{ y }}
</UseMouse>
```
