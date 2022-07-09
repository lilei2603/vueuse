---
category: Utilities
---

# reactivePick

从响应性对象中选择字段。

## Usage

```js
import { reactivePick } from '@vueuse/core'

const obj = reactive({
  x: 0,
  y: 0,
  elementX: 0,
  elementY: 0,
})

const picked = reactivePick(obj, 'x', 'elementX') // { x: number, elementX: number }
```

### 场景

#### 有选择地将道具传递给子组件

```html
<script setup>
import { reactivePick } from '@vueuse/core'

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

const childProps = reactivePick(props, 'color', 'font')
</script>

<template>
  <div>
    <!-- only passes "color" and "font" props to child -->
    <ChildComp v-bind="childProps" />
  </div>
</template>
```

#### 选择性地包装响应式对象

而不是这样做

```ts
import { reactive } from 'vue'
import { useElementBounding } from '@vueuse/core'

const { height, width } = useElementBounding() // object of refs
const size = reactive({ height, width })
```

现在我们可以拥有这个

```ts
import { reactivePick, useElementBounding } from '@vueuse/core'

const size = reactivePick(useElementBounding(), 'height', 'width')
```
