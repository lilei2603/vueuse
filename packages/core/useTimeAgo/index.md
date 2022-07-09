---
category: Misc
---

# useTimeAgo

响应式的时间格式化函数，获取距离当前时间过去了多久。

## Usage

```js
import { useTimeAgo } from '@vueuse/core'

const timeAgo = useTimeAgo(new Date(2021, 0, 1))
```

## Component Usage

```html
<UseTimeAgo v-slot="{ timeAgo }" :time="new Date(2021, 0, 1)">
  Time Ago: {{ timeAgo }}
</UseTimeAgo>
```
