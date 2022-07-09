---
category: Browser
---

# useScriptTag

脚本标签注入。

## Usage

```js
import { useScriptTag } from '@vueuse/core'

useScriptTag(
  'https://player.twitch.tv/js/embed/v1.js',
  // on script tag loaded.
  (el: HTMLScriptElement) => {
    // do something
  },
)
```

卸载组件时，脚本将自动加载到已安装和删除的组件上。

## Configurations

设置 `manual: true` 可以手动控制加载脚本的时间。

```ts
import { useScriptTag } from '@vueuse/core'

const { scriptTag, load, unload } = useScriptTag(
  'https://player.twitch.tv/js/embed/v1.js',
  () => {
    // do something
  },
  { manual: true },
)

// manual controls
await load()
await unload()
```
