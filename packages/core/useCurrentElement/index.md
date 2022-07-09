---
category: Component
---

# useCurrentElement

获取当前组件的 `DOM` 元素作为响应式数据。

## Usage

```ts
import { useCurrentElement } from '@vueuse/core'

const el = useCurrentElement() // ComputedRef<Element>
```

## Caveats

此函数在后台使用 [`$el`](https://vuejs.org/api/component-instance.html#el)。

在安装组件之前，引用的值将是未定义的。

- 对于具有单个根元素的组件，它将指向该元素。
- 对于带有文本根的组件，它将指向文本节点。
- 对于具有多个根节点的组件，它将是 Vue 用来跟踪组件在 DOM 中的位置的占位符 DOM 节点。

建议仅将此函数用于具有**单个根元素的组件**。
