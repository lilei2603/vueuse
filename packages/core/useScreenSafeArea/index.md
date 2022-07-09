---
category: Browser
---

# useScreenSafeArea

响应式的 `env(safe-area-inset-*)`

![image](https://webkit.org/wp-content/uploads/safe-areas-1.png)

## Usage

为了使页面在屏幕中完全呈现，必须首先设置视口元标记内的附加属性 `viewport-fit=cover`，`viewport` 元标记可能如下所示：

```html
<meta name='viewport' content='initial-scale=1, viewport-fit=cover'>
```

然后我们可以在组件中使用 `useScreenSafeArea` ，如下所示：

```ts
import { useScreenSafeArea } from '@vueuse/core'

const {
  top,
  right,
  bottom,
  left,
} = useScreenSafeArea()
```

有关详细信息，您可以参考此文档：[Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)

## Component Usage

```html
<UseScreenSafeArea top right bottom left>content</UseScreenSafeArea>
```
