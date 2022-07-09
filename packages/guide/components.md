# 组件

在 v5.0 中，我们引入了一个新的包，`@vueuse/components` 提供了可组合函数的无渲染组件版本。

## 安装

```bash
$ npm i @vueuse/core @vueuse/components
```

## 用法

例如 `onClickOutside` 而不是绑定组件 ref 以供函数使用：

```html
<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const el = ref()

function close () {
  /* ... */
}

onClickOutside(el, close)
</script>

<template>
  <div ref="el">
    Click Outside of Me
  </div>
</template>
```

我们现在可以使用自动完成绑定的无渲染组件：

```html
<script setup>
import { OnClickOutside } from '@vueuse/components'

function close () {
  /* ... */
}
</script>

<template>
  <OnClickOutside @trigger="close">
    <div>
      Click Outside of Me
    </div>
  </OnClickOutside>
</template>
```

## 返回值

您可以使用 `v-slot` 访问返回值： 

```html
<UseMouse v-slot="{ x, y }">
  x: {{ x }}
  y: {{ y }}
</UseMouse>
```

```html
<UseDark v-slot="{ isDark, toggleDark }">
  <button @click="toggleDark()">
    Is Dark: {{ isDark }}
  </button>
</UseDark>
```

组件样式的详细使用请参考各个函数的文档。
