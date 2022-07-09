---
category: Browser
related:
  - useColorMode
  - usePreferredDark
  - useStorage
---

# useDark

具有自动数据持久性的反应式暗模式。

## Basic Usage

```js
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
```

## Behavior

`useDark` 结合 `usePreferredDark` 和 `useStorage` 启动时从 localStorage/sessionStorage 读取值（key可配置），看是否有用户配置的配色方案，如果没有，则使用用户的系统偏好。 当您更改 `isDark` 引用时，它将更新相应元素的属性，然后将首选项存储到存储中以保持持久性。

> 请注意 `useDark` 只处理 DOM 属性更改，以便您在 CSS 中应用适当的选择器。它不会为您处理实际的样式、主题或 CSS。

## Configuration

默认情况下，它使用 [Tailwind CSS favored dark mode](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually)，当 `dark` 应用于 `html` 标签时启用暗模式，例如：

```html
<!--light-->
<html> ... </html>

<!--dark-->
<html class="dark"> ... </html>
```

虽然您可以自定义它并使其适用于大多数 CSS 框架。

例如：

```ts
const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})
```

会像

```html
<!--light-->
<html>
  <body color-scheme="light"> ... </body>
</html>

<!--dark-->
<html>
  <body color-scheme="dark"> ... </body>
</html>
```

如果上面的配置仍然不能满足您的需求，您可以使用 `onChanged` 选项来完全控制您如何处理更新

```ts
const isDark = useDark({
  onChanged(dark: boolean) {
    // update the dom, call the API or something
  },
})
```

## Component Usage

```html
<UseDark v-slot="{ isDark, toggleDark }">
  <button @click="toggleDark()">
    Is Dark: {{ isDark }}
  </button>
</UseDark>
```
