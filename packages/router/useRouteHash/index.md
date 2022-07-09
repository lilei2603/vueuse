---
category: '@Router'
---

# useRouteHash

响应式 route.hash 的简写


## Usage

```ts
import { useRouteHash } from '@vueuse/router'

const search = useRouteHash()

console.log(search.value) // route.hash
search.value = 'foobar' // router.replace({ hash: 'foobar' })
```
