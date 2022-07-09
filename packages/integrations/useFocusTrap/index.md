---
category: '@Integrations'
---

# useFocusTrap

[`focus-trap`](https://github.com/focus-trap/focus-trap) 的响应式封装

有关可以传递哪些选项的更多信息，请参阅焦点陷阱文档中的 [`createOptions`](https://github.com/focus-trap/focus-trap#createfocustrapelement-createoptions)。

## Usage

**Basic Usage**

```html
<script setup>
import { ref } from 'vue'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

const target = ref()
const { hasFocus, activate, deactivate } = useFocusTrap(target)
</script>

<template>
  <div>
    <button @click="activate()">Activate</button>
    <div ref="target">
      <span>Has Focus: {{ hasFocus }}</span>
      <input type="text" />
      <button @click="deactivate()">Deactivate</button>
    </div>
  </div>
</template>
```

**自动对焦**

```html
<script setup>
import { ref } from 'vue'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

const target = ref()
const { hasFocus, activate, deactivate } = useFocusTrap(target, { immediate: true })
</script>

<template>
  <div>
    <div ref="target">...</div>
  </div>
</template>
```

## 使用组件

此功能无法正确激活对具有条件渲染的元素的关注。在这种情况下，您可以使用 `UseFocusTrap` 组件。 Focus Trap 将在安装此组件时自动激活，并在卸载时停用。

```html
<script setup>
import { ref } from 'vue'
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'

const show = ref(false)
</script>

<template>
  <UseFocusTrap v-if="show">
    <div class="modal">...</div>
  </UseFocusTrap>
</template>

```
