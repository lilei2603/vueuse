---
category: Utilities
related: reactify
---

# createUnrefFn

制作一个接受 ref 和 raw 值作为参数的普通函数。返回未转换的函数返回的相同值，并正确键入。

::: tip
确保您使用正确的工具来完成这项工作。在某些情况下，如果您想在每次更改参数时评估函数，使用 `reactify` 可能更相关。
:::

## Usage

```ts
import { ref } from 'vue'
import { createUnrefFn } from '@vueuse/core'

const url = ref('https://httpbin.org/post')
const data = ref({ foo: 'bar' })

const post = (url, data) => fetch(url, { data })
const unrefPost = createUnrefFn(post)

post(url, data) /* ❌ Will throw an error because the arguments are refs */
unrefPost(url, data) /* ✔️ Will Work because the arguments will be auto unref */
```
