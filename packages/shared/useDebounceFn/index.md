---
category: Utilities
---

# useDebounceFn

防抖函数
>
> Debounce 是一个超负荷的服务员：如果你一直问他，你的请求将被忽略，直到你停下来给他一些时间考虑你最近的询问。

## Usage

```js
import { useDebounceFn } from '@vueuse/core'

const debouncedFn = useDebounceFn(() => {
  // do something
}, 1000)

document.addEventListener('resize', debouncedFn)
```

你也可以传递第三个参数给它，最大等待时间，类似于 [lodash debounce](https://lodash.com/docs/4.17.15#debounce)

```js
import { useDebounceFn } from '@vueuse/core'

// If no invokation after 5000ms due to repeated input,
// the function will be called anyway.
const debouncedFn = useDebounceFn(() => {
  // do something
}, 1000, { maxWait: 5000 })

document.addEventListener('resize', debouncedFn)
```

## 相关功能

- `useThrottle`
- `useThrottleFn`
- `useDebounce`
- `useDebounceFn`

## 推荐阅读

- [**Debounce vs Throttle**: Definitive Visual Guide](https://redd.one/blog/debounce-vs-throttle)
