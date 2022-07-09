---
category: Elements
---

# useWindowFocus

使用 `window.onfocus` 和 `window.onblur` 事件反应性地跟踪窗口焦点。

## Usage

```js
import { useWindowFocus } from '@vueuse/core'

const focused = useWindowFocus()
```

## Component Usage
```html
<UseWindowFocus v-slot="{ focused }">
  Document Focus: {{ focused }}
</UseWindowFocus>
```
