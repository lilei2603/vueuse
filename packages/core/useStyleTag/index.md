---
category: Browser
---

# useStyleTag

在 `<head>` 注入响应式 `样式` 元素。

## Usage

### 基本用法

提供一个 CSS 字符串，然后 `useStyleTag` 会自动生成一个 id 并注入到 `<head>` 中。
```js
import { useStyleTag } from '@vueuse/core'

const {
  id,
  css,
  load,
  unload,
  isLoaded,
} = useStyleTag('.foo { margin-top: 32px; }')

// 稍后您可以修改样式
css.value = '.foo { margin-top: 64px; }'
```

这段代码将被注入到 `<head>`：

```html
<style type="text/css" id="vueuse_styletag_1">
.foo { margin-top: 64px; }
</style>
```

### Custom ID

如果您需要定义自己的 `id`，可以将 id 作为第一个参数传递。

```js
import { useStyleTag } from '@vueuse/core'

useStyleTag('.foo { margin-top: 32px; }', { id: 'custom-id' })
```

```html
<!-- injected to <head> -->
<style type="text/css" id="custom-id">
.foo { margin-top: 32px; }
</style>
```

### Media query

您可以将媒体属性作为对象中的最后一个参数传递。

```js
useStyleTag('.foo { margin-top: 32px; }', { media: 'print' })
```

```html
<!-- injected to <head> -->
<style type="text/css" id="vueuse_styletag_1" media="print">
.foo { margin-top: 32px; }
</style>
```
