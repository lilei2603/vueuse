---
category: Browser
---

# useUrlSearchParams

响应式的 [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

## Usage

```js
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('history')

console.log(params.foo) // 'bar'

params.foo = 'bar'
params.vueuse = 'awesome'
// url updated to `?foo=bar&vueuse=awesome`
```

### Hash Mode

使用 `hash` 路由模式时，指定 `hash` 模式

```js
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('hash')

params.foo = 'bar'
params.vueuse = 'awesome'
// url updated to `#/your/route?foo=bar&vueuse=awesome`
```

### Hash Params

当使用 `history` 路由模式，但想使用 `hash` 作为参数时，将模式指定为 `hash-paramsWhen`。

```js
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('hash-params')

params.foo = 'bar'
params.vueuse = 'awesome'
// url updated to `/your/route#foo=bar&vueuse=awesome`
```
