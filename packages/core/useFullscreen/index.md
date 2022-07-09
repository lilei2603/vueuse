---
category: Browser
---

# useFullscreen

响应式 [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)。它添加了以全屏模式呈现特定元素（及其后代）的方法，并在不再需要时退出全屏模式。这使得可以使用用户的整个屏幕呈现所需的内容（例如在线游戏），从屏幕上移除所有浏览器用户界面元素和其他应用程序，直到关闭全屏模式。

## Usage

```js
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, enter, exit, toggle } = useFullscreen()
```

全屏指定元素

```ts
const el = ref<HTMLElement | null>(null)

const { isFullscreen, enter, exit, toggle } = useFullscreen(el)
```

```html
<video ref='el'>
```

## Component Usage

```html
<UseFullscreen v-slot="{ toggle }">
  <video />
  <button @click="toggle">
    Go Fullscreen
  </button>
</UseFullscreen>
```
