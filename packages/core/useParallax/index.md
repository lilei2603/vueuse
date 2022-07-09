---
category: Sensors
---

# useParallax

轻松创建视差效果。如果不支持方向，它使用 `useDeviceOrientation` 并回退到 `useMouse`。

## Usage

```html
<div ref='container'>
</div>
```

```js
import { useParallax } from '@vueuse/core'

export default {
  setup() {
    const container = ref(null)
    const { tilt, roll, source } = useParallax(container)

    return {
      container,
    }
  },
}
```
