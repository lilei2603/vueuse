---
category: '@Integrations'
---

# useCookies

[`universal-cookie`](https://www.npmjs.com/package/universal-cookie) 的封装

::: tip
与 Nuxt 3 一起使用时，**不会**自动导入此函数，以支持 Nuxt 的内置 [`useCookie()`](https://v3.nuxtjs.org/api/composables/use-cookie)。如果要使用 VueUse 中的函数，请使用显式导入。
:::

## Install 

```bash
npm i universal-cookie
```

## Usage

### Common usage

```html
<template>
  <div>
    <strong>locale</strong>: {{ cookies.get('locale') }}
    <hr>
    <pre>{{ cookies.getAll() }}</pre>
    <button @click="cookies.set('locale', 'ru-RU')">Russian</button>
    <button @click="cookies.set('locale', 'en-US')">English</button>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { useCookies } from '@vueuse/integrations/useCookies'

  export default defineComponent({
    setup() {
      const cookies = useCookies(['locale'])
      return {
        cookies,
      }
    },
  })
</script>
```

## Options

使用 vue composition-api 访问和修改 cookie。

> 默认情况下，你应该在 `setup()` 中使用它，但是这个函数也可以在其他任何地方使用。

```ts
const { get, getAll, set, remove, addChangeListener, removeChangeListener } = useCookies(['cookie-name'], { doNotParse: false, autoUpdateDependencies: false })
```

### `dependencies` (optional)

让您有选择地指定您的组件所依赖或应该触发重新渲染的 cookie 名称列表。如果未指定，它将在每次 cookie 更改时呈现。

### `options` (optional)

- `doNotParse` (boolean = false)：无论如何都不要将 cookie 转换为对象。**作为默认值传递给 `get` 或 `getAll` 方法**。
- `autoUpdateDependencies` (boolean = false)：自动添加曾经提供给 `getmethod` 的 `cookie` 名称。如果为 `true`，那么您不需要关心提供的 `依赖项`。

### `cookies` (optional)

让你提供一个 `universal-cookie` 实例（默认创建一个新实例）

> 通用 [universal-cookie api文档](https://www.npmjs.com/package/universal-cookie#api---cookies-class)中可用方法的信息

## `createCookies([req])`

使用请求创建一个通用cookie实例（默认为 `window.document.cookie`）并返回 `useCookiesfunction` 以及提供的通用cookie实例

- req (object): Node 的 [http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage) 请求对象。
