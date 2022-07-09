---
category: Browser
related:
  - useDark
  - usePreferredDark
  - useStorage
---

# useColorMode

具有自动数据持久性的反应式颜色模式（深色/浅色/自定义）。

## Basic Usage

```js
import { useColorMode } from '@vueuse/core'

const mode = useColorMode() // Ref<'dark' | 'light'>
```

默认情况下，它将使用 `usePreferredDark`（a.k.a `自动` 模式）匹配用户的浏览器偏好。读取 ref 时，默认情况下会返回当前颜色模式（`深色`、`浅色`或您的自定义模式）。 通过启用 `emitAuto` 选项，可以将 `自动` 模式包含在返回的模式中。写入 ref 时，它将触发 DOM 更新并将颜色模式保存到本地存储（或您的自定义存储）。您可以通过 `auto` 设置回自动模式。

```ts
mode.value // 'dark' | 'light'

mode.value = 'dark' // 更改为暗模式并持续存在

mode.value = 'auto' // 更改为自动模式
```

## Config

```js
import { useColorMode } from '@vueuse/core'

const mode = useColorMode({
  attribute: 'theme',
  modes: {
    // custom colors
    dim: 'dim',
    cafe: 'cafe',
  },
}) // Ref<'dark' | 'light' | 'dim' | 'cafe'>
```

## Component Usage

```html
<UseColorMode v-slot="{ mode }">
  <button @click="mode = mode === 'dark' ? 'light' : 'dark'">
    Mode {{ mode }}
  </button>
</UseColorMode>
```
