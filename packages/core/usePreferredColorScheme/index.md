---
category: Browser
---

# usePreferredColorScheme

响应式的 [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) 媒体查询。

## Usage

```js
import { usePreferredColorScheme } from '@vueuse/core'

const preferredColor = usePreferredColorScheme()
```

## Component Usage

```html
<UsePreferredColorScheme v-slot="{ colorScheme }">
  Preferred Color Scheme: {{ colorScheme }}
<UsePreferredColorScheme>
```
