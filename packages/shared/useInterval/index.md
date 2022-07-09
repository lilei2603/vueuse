---
category: Animation
---

# useInterval

在每个时间间隔增加响应式的计数器

## Usage

```js {4}
import { useInterval } from '@vueuse/core'

// count will increase every 200ms
const counter = useInterval(200)
```

```ts
const { counter, pause, resume } = useInterval(200, { controls: true })
```
