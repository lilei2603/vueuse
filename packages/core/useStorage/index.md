---
category: State
---

# useStorage

响应式的 [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)/[SessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

::: tip
与 Nuxt 3 一起使用时，**不会** 自动导入此函数，以支持 Nitro 的内置 [`useStorage()`](https://nitro.unjs.io/guide/storage.html)。如果要使用 `VueUse` 中的函数，请使用显式导入。
:::

## Usage

```js
import { useStorage } from '@vueuse/core'

// bind object
const state = useStorage('my-store', { hello: 'hi', greeting: 'Hello' })

// bind boolean
const flag = useStorage('my-flag', true) // returns Ref<boolean>

// bind number
const count = useStorage('my-count', 0) // returns Ref<number>

// bind string with SessionStorage
const id = useStorage('my-id', 'some-string-id', sessionStorage) // returns Ref<string>

// delete data from storage
state.value = null
```

## 自定义序列化

默认情况下，`useStorage` 会根据提供的默认值的数据类型智能地使用相应的序列化器。例如，`JSON.stringify` / `JSON.parse` 将用于对象，`Number.toString` / `parseFloat` 用于数字等。

你也可以提供自己的序列化函数来使用 `useStorage`:

```ts
import { useStorage } from '@vueuse/core'

useStorage(
  'key',
  {},
  undefined,
  {
    serializer: {
      read: (v: any) => v ? JSON.parse(v) : null,
      write: (v: any) => JSON.stringify(v),
    },
  },
)
```

请注意，当您提供 `null` 作为默认值时，`useStorage` 不能从中假定数据类型。在这种情况下，您可以提供自定义序列化程序或显式重用内置序列化程序。

```ts
import { StorageSerializers, useStorage } from '@vueuse/core'

const objectLike = useStorage('key', null, undefined, { serializer: StorageSerializers.object })
objectLike.value = { foo: 'bar' }
```
