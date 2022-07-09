---
category: '@Electron'
---

# useIpcRendererOn

使用 [ipcRenderer.on](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendereronchannel-listener) 并在卸载时自动使用 [ipcRenderer.removeListener](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererremovelistenerchannel-listener)。在附加组件 @vueuse/electron 中可用。

## Usage

```ts
import { useIpcRendererOn } from '@vueuse/electron'

// 如果您没有明确提供 ipcRenderer，则启用 nodeIntegration
// @see: https://www.electronjs.org/docs/api/webview-tag#nodeintegration
// 卸载时自动移除监听器
useIpcRendererOn('custom-event', (event, ...args) => {
  console.log(args)
})
```
