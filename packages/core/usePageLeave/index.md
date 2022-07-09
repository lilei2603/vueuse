---
category: Sensors
---

# usePageLeave

显示鼠标是否离开页面的响应式状态。

## Usage

```js
import { usePageLeave } from '@vueuse/core'

const isLeft = usePageLeave()
```

## Component Usage
```html
<UsePageLeave v-slot="{ isLeft }">
  Has Left Page: {{ isLeft }}
</UsePageLeave>
```
