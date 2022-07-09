---
category: '@Electron'
---

# useIpcRendererInvoke

响应式的 [ipcRenderer.invoke API](https://www.electronjs.org/docs/api/ipc-renderer#ipcrendererinvokechannel-args) 结果。使异步操作看起来像同步的。在附加组件 @vueuse/electron 中可用。

## Usage

```ts
import { useIpcRendererInvoke } from '@vueuse/electron'

// 如果您没有明确提供 ipcRenderer，则启用 nodeIntegration
// @see: https://www.electronjs.org/docs/api/webview-tag#nodeintegration
// 响应式数据将被返回
const result = useIpcRendererInvoke<string>('custom-channel', 'some data')
const msg = computed(() => result.value?.msg)
```
