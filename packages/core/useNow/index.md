---
category: Animation
---

# useNow

获取响应式的 `当前日期` 实例。

## Usage

```js
import { useNow } from '@vueuse/core'

const now = useNow()
```

```js
const { now, pause, resume } = useNow({ controls: true })
```

## Component Usage

```html
<UseNow v-slot="{ now, pause, resume }">
  Now: {{ now }}
  <button @click="pause()">Pause</button>
  <button @click="resume()">Resume</button>
</UseNow>
```
