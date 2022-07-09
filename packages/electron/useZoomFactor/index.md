---
category: '@Electron'
---

# useZoomFactor

响应式的 [WebFrame](https://www.electronjs.org/docs/api/web-frame#webframe) 缩放因子。在附加组件 @vueuse/electron 中可用。

## Usage

```ts
import { useZoomFactor } from '@vueuse/electron'

// 如果您没有明确提供 ipcRenderer，则启用 nodeIntegration
// @see: https://www.electronjs.org/docs/api/webview-tag#nodeintegration
// 响应式数据将被返回
const factor = useZoomFactor()
console.log(factor.value) // print current zoom factor
factor.value = 2 // change current zoom factor
```

立即设置初始缩放系数

```js
import { useZoomFactor } from '@vueuse/electron'

const factor = useZoomFactor(2)
```

传递一个 响应式数据，当源数据发生变化时，因子将被更新

```js
import { useZoomFactor } from '@vueuse/electron'

const factor = ref(1)

useZoomFactor(factor) // zoom factor will match with the ref

factor.value = 2 // zoom factor will change
```
