# 快速开始

VueUse 是基于 [组合式 API](https://v3.vuejs.org/guide/composition-api-introduction.html) 所实现的工具函数集合。我们假设您在使用前已经熟悉了 [组合式 API](https://v3.vuejs.org/guide/composition-api-introduction.html)。

## 安装

> 🎩 从 v4.0 开始，借助 [vue-demi](https://github.com/vueuse/vue-demi) 的强大功能，它**适用于单个包**中的 Vue 2 和 Vue 3！

```bash
npm i @vueuse/core
```

[附加组件](/add-ons.html) | [Nuxt模块](/guide/index.html#nuxt)

> From v6.0, VueUse requires `vue` >= v3.2 or `@vue/composition-api` >= v1.1

###### 演示

- [Vite + Vue 3](https://github.com/vueuse/vueuse-vite-starter)
- [Nuxt 3 + Vue 3](https://github.com/antfu/vitesse-nuxt3)
- [Webpack + Vue 3](https://github.com/vueuse/vueuse-vue3-example)
- [Nuxt 2 + Vue 2](https://github.com/antfu/vitesse-nuxt-bridge)
- [Vue CLI + Vue 2](https://github.com/vueuse/vueuse-vue2-example)

### CDN

```html
<script src="https://unpkg.com/@vueuse/shared"></script>
<script src="https://unpkg.com/@vueuse/core"></script>
```

它将作为 `window.VueUse` 全局使用

### Nuxt

从 v7.2.0 开始，我们发布了一个 Nuxt 模块来启用 Nuxt 3 和 Nuxt Bridge 的自动导入。

```bash
npm i -D @vueuse/nuxt @vueuse/core
```

Nuxt 3
```ts
// nuxt.config.ts
export default {
  modules: [
    '@vueuse/nuxt',
  ],
}
```

Nuxt 2
```ts
// nuxt.config.js
export default {
  buildModules: [
    '@vueuse/nuxt',
  ],
}
```

然后在你的 Nuxt 应用程序的任何地方使用 VueUse 函数。例如：

```html
<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div>pos: {{x}}, {{y}}</div>
</template>
```

## 使用示例

只需从 `@vueuse/core` 导入你需要的函数

```ts
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'

export default {
  setup() {
    // 跟踪鼠标位置
    const { x, y } = useMouse()

    // 用户是否喜欢深色主题
    const isDark = usePreferredDark()

    // 在 localStorage 中保持状态
    const store = useLocalStorage(
      'my-storage',
      {
        name: 'Apple',
        color: 'red',
      },
    )

    return { x, y, isDark, store }
  },
}
```

有关详细信息，请参阅[功能列表](/functions)。
