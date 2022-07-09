---
category: Network
---

# useFetch

响应式的 [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)。提供了中止请求、在请求被触发之前拦截请求、在 url 更改时自动重新获取请求以及使用预定义选项创建您自己的 `useFetch` 的能力。

::: tip
与 `Nuxt 3` 一起使用时，`不会`自动导入此函数，以支持 `Nuxt` 的内置 [`useFetch()`](https://v3.nuxtjs.org/api/composables/use-fetch)。如果要使用 `VueUse` 中的函数，请使用显式导入。
:::

## Usage

### 基本用法

只需提供一个 url 即可使用 `useFetch` 函数。 url 可以是字符串或响应式数据。
`data` 对象将包含请求的结果，`error` 对象将包含任何错误，`isFetching` 对象将指示请求是否正在加载。

```ts
import { useFetch } from '@vueuse/core'

const { isFetching, error, data } = useFetch(url)
```

### 异步使用
`useFetch` 也可以像普通的 `fetch` 一样被等待。请注意，只要组件是异步的，使用它的任何组件都必须将组件包装在 `<Suspense>` 标记中。您可以在官方 Vue 3 文档中阅读有关 [Suspense](https://vuejs.org/guide/built-ins/suspense.html) 的更多信息。
```ts
import { useFetch } from '@vueuse/core'

const { isFetching, error, data } = await useFetch(url)
```

### 重新获取 URL 更改

对 url 参数使用 `响应式` 将允许 `useFetch` 函数在 url 更改时自动触发另一个请求。

```ts
const url = ref('https://my-api.com/user/1')

const { data } = useFetch(url, { refetch: true })

url.value = 'https://my-api.com/user/2' // Will trigger another request
```

### 防止请求立即触发

将 `immediate` 选项设置为 `false` 将阻止请求在调用执行函数之前触发。

```ts
const { execute } = useFetch(url, { immediate: false })

execute()
```

### 中止请求

可以使用 `useFetch` 函数中的 `abort` 函数中止请求。 `canAbort` 属性指示是否可以中止请求。

```ts
const { abort, canAbort } = useFetch(url)

setTimeout(() => {
  if (canAbort.value)
    abort()
}, 100)
```

也可以使用 `timeout` 属性自动中止请求。当达到给定的超时时间时，它将调用 `abort` 函数。

```ts
const { data } = useFetch(url, { timeout: 100 })
```

### 拦截请求

`beforeFetch` 选项可以在请求发送之前拦截请求并修改请求选项和 url。

```ts
const { data } = useFetch(url, {
  async beforeFetch({ url, options, cancel }) {
    const myToken = await getMyToken()

    if (!myToken)
      cancel()

    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${myToken}`,
    }

    return {
      options,
    }
  },
})
```

`afterFetch` 选项可以在响应数据更新之前拦截它。

```ts
const { data } = useFetch(url, {
  afterFetch(ctx) {
    if (ctx.data.title === 'HxH')
      ctx.data.title = 'Hunter x Hunter' // Modifies the response data

    return ctx
  },
})
```

`onFetchError` 选项可以在更新之前拦截响应数据和错误。
```ts
const { data } = useFetch(url, {
  onFetchError(ctx) {
    // ctx.data 在 5xx 响应时可以为空
    if (ctx.data === null)
      ctx.data = { title: 'Hunter x Hunter' } // 修改响应数据

    ctx.error = new Error('Custom Error') // 修改错误

    return ctx
  },
})
```

### 设置请求方法和返回类型

请求方法和返回类型可以通过在 `useFetch` 末尾添加相应的方法来设置

```ts
// 请求将使用 GET 方法发送，数据将被解析为 JSON
const { data } = useFetch(url).get().json()

// 请求将使用 POST 方法发送，数据将被解析为文本
const { data } = useFetch(url).post().text()

// 或者使用选项设置方法

// 请求将使用 GET 方法发送，数据将被解析为 blob
const { data } = useFetch(url, { method: 'GET' }, { refetch: true }).blob()
```

### 创建自定义实例

`createFetch` 函数将返回一个 useFetch 函数，其中包含提供给它的任何预配置选项。这对于在整个使用相同基本 URL 或需要授权标头的应用程序中与 API 交互很有用。

```ts
const useMyFetch = createFetch({
  baseUrl: 'https://my-api.com',
  options: {
    async beforeFetch({ options }) {
      const myToken = await getMyToken()
      options.headers.Authorization = `Bearer ${myToken}`

      return { options }
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})

const { isFetching, error, data } = useMyFetch('users')
```

### 事件

`onFetchResponse` 和 `onFetchError` 将分别在获取请求响应和错误时触发。

```ts
const { onFetchResponse, onFetchError } = useFetch(url)

onFetchResponse((response) => {
  console.log(response.status)
})

onFetchError((error) => {
  console.error(error.message)
})
```
