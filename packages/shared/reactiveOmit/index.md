---
category: Utilities
---

# reactiveOmit

响应式地省略对象中的字段。

## Usage

```js
import { reactiveOmit } from '@vueuse/core'

const obj = reactive({
  x: 0,
  y: 0,
  elementX: 0,
  elementY: 0,
})

const picked = reactiveOmit(obj, 'x', 'elementX') // { y: number, elementY: number }
```

### 场景

#### 有选择地将道具传递给子组件

```html
<script setup>
import { reactiveOmit } from '@vueuse/core'

const props = defineProps({
  value: {
    default: 'value',
  },
  color: {
    type: String,
  },
  font: {
    type: String,
  }
})

const childProps = reactiveOmit(props, 'value')
</script>

<template>
  <div>
    <!-- only passes "color" and "font" props to child -->
    <ChildComp v-bind="childProps" />
  </div>
</template>
```
