---
category: Elements
---

# useWindowSize

获取响应式的窗口大小信息

## Usage

```js
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
```

## Component Usage

```html
<UseWindowSize v-slot="{ width, height }">
  Width: {{ width }}
  Height: {{ height }}
</UseWindowSize>
```
