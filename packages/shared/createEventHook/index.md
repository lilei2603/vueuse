---
category: Utilities
---

# createEventHook

创建事件钩子函数

## Usage


创建一个使用 `createEventHook` 的函数
```ts
import { createEventHook } from '@vueuse/core'

export function useMyFetch(url) {
  const fetchResult = createEventHook<Response>()
  const fetchError = createEventHook<any>()

  fetch(url)
    .then(result => fetchResult.trigger(result))
    .catch(error => fetchError.trigger(error.message))

  return {
    onResult: fetchResult.on,
    onError: fetchError.on,
  }
}
```

使用使用 `createEventHook` 的函数

```html
<script setup lang="ts">
import { useMyFetch } from './my-fetch-function'

const { onResult, onError } = useMyFetch('my api url')

onResult((result) => {
  console.log(result)
})

onError((error) => {
  console.errr(error)
})
</script>
```
