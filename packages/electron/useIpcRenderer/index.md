---
category: '@Electron'
---

# useIpcRenderer

提供 [ipcRenderer](https://www.electronjs.org/docs/api/ipc-renderer) 和它的所有 API。在附加组件 @vueuse/electron 中可用。

## Usage

```ts
import { useIpcRenderer } from '@vueuse/electron'

// 如果您没有明确提供 ipcRenderer，则启用 nodeIntegration
// @see: https://www.electronjs.org/docs/api/webview-tag#nodeintegration
const ipcRenderer = useIpcRenderer()

// 响应式数据将被返回
const result = ipcRenderer.invoke<string>('custom-channel', 'some data')
const msg = computed(() => result.value?.msg)

// 卸载时自动移除监听器
ipcRenderer.on('custom-event', (event, ...args) => {
  console.log(args)
})
```
