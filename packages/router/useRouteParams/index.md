---
category: '@Router'
---

# useRouteParams

响应式 route.params 的简写


## Usage

```ts
import { useRouteParams } from '@vueuse/router'

const userId = useRouteParams('userId')

const userId = useRouteParams('userId', '-1') // or with a default value

console.log(userId.value) // route.params.userId
userId.value = '100' // router.replace({ params: { userId: '100' } })
```
