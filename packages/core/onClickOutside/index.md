---
category: Sensors
---

# onClickOutside

监听元素外部的点击。对于模态或下拉菜单很有用。

## Usage

```html {18}
<template>
  <div ref="target">
    Hello world
  </div>
  <div>
    Outside element
  </div>
</template>

<script>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default {
  setup() {
    const target = ref(null)

    onClickOutside(target, (event) => console.log(event))

    return { target }
  }
}
</script>
```

> 此函数使用 IE 11、Edge 18 及更低版本不支持的 [Event.composedPath()](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath)。如果您以这些浏览器为目标，我们建议您在项目中包含[这些代码片段](https://gist.github.com/sibbng/13e83b1dd1b733317ce0130ef07d4efd)。

## Component Usage

```html
<OnClickOutside @trigger="count++">
  <div>
    Click Outside of Me
  </div>
</OnClickOutside>
```
## Directive Usage

```html
<script setup lang="ts">
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const modal = ref(false)
function closeModal() {
  modal.value = false
}

</script>

<template>
  <button @click="modal = true">
    Open Modal
  </button>
  <div v-if="modal" v-on-click-outside="closeModal">
    Hello World
  </div>
</template>
```
