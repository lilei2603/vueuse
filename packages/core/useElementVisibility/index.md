---
category: Elements
---

# useElementVisibility

跟踪视口中元素的可见性。

## Usage

```html
<template>
  <div ref="target">
    <h1>Hello world</h1>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'

export default {
  setup() {
    const target = ref(null)
    const targetIsVisible = useElementVisibility(target)

    return {
      target,
      targetIsVisible,
    }
  }
}
</script>
```

## 组件用法

```html
<UseElementVisibility v-slot="{ isVisible }">
  Is Visible: {{ isVisible }}
</UseElementVisibility>
```

## 指令用法

```html
<script setup lang="ts">
import { ref } from 'vue'
import { vElementVisibility } from '@vueuse/components'

const target = ref(null)
const isVisible = ref(false)

function onElementVisibility(state) {
  isVisible.value = state
}
</script>

<template>
  <div v-element-visibility="onElementVisibility">
    {{ isVisible ? 'inside' : 'outside' }}
  </div>

  <!-- with options -->
  <div ref="target">
    <div v-element-visibility="[onElementVisibility, { scrollTarget: target }]">
      {{ isVisible ? 'inside' : 'outside' }}
    </div>
  </div>
</template>
```
