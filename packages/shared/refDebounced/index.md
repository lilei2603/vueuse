---
category: Utilities
alias: useDebounce, debouncedRef
---

# refDebounced

防抖的响应式数据

## Usage

```js {4}
import { refDebounced } from '@vueuse/core'

const input = ref('foo')
const debounced = refDebounced(input, 1000)

input.value = 'bar'
console.log(debounced.value) // 'foo'

await sleep(1100)

console.log(debounced.value) // 'bar'
```
您还可以传递一个可选的第三个参数，包括 maxWait 选项。有关详细信息，请参阅 `useDebounceFn`。

## 推荐阅读

- [**Debounce vs Throttle**: Definitive Visual Guide](https://redd.one/blog/debounce-vs-throttle)
