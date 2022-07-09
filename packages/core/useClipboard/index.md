---
category: Browser
---

# useClipboard

响应式的 [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)。提供响应剪贴板命令（剪切、复制和粘贴）以及异步读取和写入系统剪贴板的能力。未经用户许可，对剪贴板内容的访问在 Permissions API 后面进行，不允许读取或更改剪贴板内容。

## Usage

```js
import { useClipboard } from '@vueuse/core'

const source = ref('Hello')
const { text, copy, copied, isSupported } = useClipboard({ source })
```

```html
<button @click='copy()'>
  <!-- by default, `copied` will be reset in 1.5s -->
  <span v-if='!copied'>Copy</span>
  <span v-else>Copied!</span>
</button>
```
