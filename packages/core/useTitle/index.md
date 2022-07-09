---
category: Browser
---

# useTitle

反应式页面标题。

::: tip
与 Nuxt 3 一起使用时，**不会**自动导入此函数，以支持 Nuxt 的内置 `useTitle()`。如果要使用 VueUse 中的函数，请使用显式导入。
:::

## Usage

```js
import { useTitle } from '@vueuse/core'

const title = useTitle()
console.log(title.value) // print current title
title.value = 'Hello' // change current title
```

立即设置初始标题

```js
const title = useTitle('New Title')
```

传递一个 `ref` 并且当源 `ref` 改变时标题会被更新

```js
import { useTitle } from '@vueuse/core'

const messages = ref(0)

const title = computed(() => {
  return !messages.value ? 'No message' : `${messages.value} new messages`
})

useTitle(title) // document title will match with the ref "title"
```

传递一个可选的模板标签 [Vue Meta Title Template](https://vue-meta.nuxtjs.org/guide/metainfo.html) 来更新要注入这个模板的标题：

```js
const title = useTitle('New Title', { titleTemplate: '%s | My Awesome Website' })
```
