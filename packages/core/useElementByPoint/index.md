---
category: Sensors
---

# useElementByPoint

逐点响应式元素。

## Usage

```ts
import { useElementByPoint, useMouse } from '@vueuse/core'

const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })
```
