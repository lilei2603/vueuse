---
category: Utilities
---

# useThrottleFn

节流函数。对于在调整大小和滚动等事件上限制处理程序执行的速率特别有用。
>
> Throttle 是一个投球的弹簧：一个球飞出去后，它需要一些时间缩回，所以除非它准备好，否则它不能再投球了。

## Usage

```js
import { useThrottleFn } from '@vueuse/core'

const throttledFn = useThrottleFn(() => {
  // do something, it will be called at most 1 time per second
}, 1000)

document.addEventListener('resize', throttledFn)
```

## 相关功能

- `useThrottle`
- `useThrottleFn`
- `useDebounce`
- `useDebounceFn`

## 推荐阅读

- [**Debounce vs Throttle**: Definitive Visual Guide](https://redd.one/blog/debounce-vs-throttle)
