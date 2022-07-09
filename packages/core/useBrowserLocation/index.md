---
category: Browser
---

# useBrowserLocation

响应式浏览器位置

> 注意：如果您使用的是 Vue Router，请改用 Vue Router 提供的 [`useRoute`](https://router.vuejs.org/guide/advanced/composition-api.html)。

## Usage

```js
import { useBrowserLocation } from '@vueuse/core'

const location = useBrowserLocation()
```

## Component Usage

```html
<UseBrowserLocation v-slot="{ location }">
  Browser Location: {{ location }}
</UseBrowserLocation>
```
