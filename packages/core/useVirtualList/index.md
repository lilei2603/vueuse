---
category: Component
---

# useVirtualList

轻松创建虚拟列表。 虚拟列表（有时称为[*虚拟滚动条*](https://akryum.github.io/vue-virtual-scroller/)）允许您高效地渲染大量项目。通过使用包装元素模拟容器元素的全高，它们仅呈现显示容器元素内的项目所需的最小数量的 DOM 节点。

## Usage

### 简单列表

```typescript
import { useVirtualList } from '@vueuse/core'

const { list, containerProps, wrapperProps } = useVirtualList(
  Array.from(Array(99999).keys()),
  {
    // Keep `itemHeight` in sync with the item's row.
    itemHeight: 22,
  },
)
```

### 配置

| 状态      | 类型     | 描述                                                                                     |
|------------|----------|-------------------------------------------------------------------------------------------------|
| itemHeight | `number` | 确保正确计算包装元素的总高度。*                 |
| overscan   | `number` | 预渲染 DOM 节点的数量。如果滚动非常快，则防止项目之间出现空白。 |

\* `itemHeight` 必须与渲染的每一行的高度保持同步。如果您在滚动到列表底部时看到额外的空白或抖动，请确保 `itemHeight` 与行的高度相同。

### 响应式列表

```typescript
import { useVirtualList, useToggle } from '@vueuse/core'
import { computed } from 'vue'

const [isEven, toggle] = useToggle()
const allItems = Array.from(Array(99999).keys())
const filteredList = computed(() => allItems.filter(i => isEven.value ? i % 2 === 0 : i % 2 === 1))

const { list, containerProps, wrapperProps } = useVirtualList(
  filteredList,
  {
    itemHeight: 22,
  },
)
```

```html
<template>
  <p>Showing {{ isEven ? 'even' : 'odd' }} items</p>
  <button @click="toggle">Toggle Even/Odd</button>
  <div v-bind="containerProps" style="height: 300px">
    <div v-bind="wrapperProps">
      <div v-for="item in list" :key="item.index" style="height: 22px">
        Row: {{ item.data }}
      </div>
    </div>
  </div>
</template>
```

## Component Usage

```html
<UseVirtualList :list="list" :options="options" height="300px">
  <template #="props">
    <!-- you can get current item of list here -->
    <div style="height: 22px">Row {{ props.data }}</div>
  </template>
</UseVirtualList>
```
