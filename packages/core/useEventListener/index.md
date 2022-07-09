---
category: Browser
---

# useEventListener

轻松使用 EventListener。在挂载时使用 [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) 注册，在卸载时自动使用[removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)。

## Usage

```js
import { useEventListener } from '@vueuse/core'

useEventListener(document, 'visibilitychange', (evt) => { console.log(evt) })
```

您也可以传递一个 ref 作为事件目标，`useEventListener` 将取消注册之前的事件并在您更改目标时注册新的事件。

```ts
import { useEventListener } from '@vueuse/core'

const element = ref<HTMLDivElement>()
useEventListener(element, 'keydown', (e) => { console.log(e.key) })
```

```html
<template>
  <div v-if="cond" ref="element">Div1</div>
  <div v-else ref="element">Div2</div>
</template>
```
