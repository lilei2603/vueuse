---
category: Sensors
---

# useOnline

响应式的在线状态. `useNetwork` 的封装

## Usage

```js
import { useOnline } from '@vueuse/core'

const online = useOnline()
```

## Component Usage
```html
<UseOnline v-slot="{ isOnline }">
  Is Online: {{ isOnline }}
</UseOnline>
```
