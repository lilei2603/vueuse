---
category: Animation
---

# useTimestamp

获取响应式的 `当前时间戳` 信息

## Usage

```js
import { useTimestamp } from '@vueuse/core'

const timestamp = useTimestamp({ offset: 0 })
```

```js
const { timestamp, pause, resume } = useTimestamp({ controls: true })
```

## Component Usage

```html
<UseTimestamp v-slot="{ timestamp, pause, resume }">
  Current Time: {{ timestamp }}
  <button @click="pause()">Pause</button>
  <button @click="resume()">Resume</button>
</UseTimestamp>
```
