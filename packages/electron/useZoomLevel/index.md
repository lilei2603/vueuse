---
category: '@Electron'
---

# useZoomLevel

响应式的 [WebFrame](https://www.electronjs.org/docs/api/web-frame#webframe) 缩放级别。在附加组件 @vueuse/electron 中可用。

## Usagef

```ts
import { useZoomLevel } from '@vueuse/electron'

// 如果您没有明确提供 webFrame，则启用 nodeIntegration
// @see: https://www.electronjs.org/docs/api/webview-tag#nodeintegration
// 响应式数据将被返回
const level = useZoomLevel()
console.log(level.value) // print current zoom level
level.value = 2 // change current zoom level
```

立即设置初始缩放级别

```js
import { useZoomLevel } from '@vueuse/electron'

const level = useZoomLevel(2)
```

传递一个 响应式数据，当源数据发生变化时，级别将被更新

```js
import { useZoomLevel } from '@vueuse/electron'

const level = ref(1)

useZoomLevel(level) // zoom level will match with the ref

level.value = 2 // zoom level will change
```
