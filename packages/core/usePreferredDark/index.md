---
category: Browser
---

# usePreferredDark

响应性黑暗主题偏好。

## Usage

```js
import { usePreferredDark } from '@vueuse/core'

const isDark = usePreferredDark()
```

## Component Usage

```html
<UsePreferredDark v-slot="{ prefersDark }">
  Prefers Dark: {{ prefersDark }}
</UsePreferredDark>
```
