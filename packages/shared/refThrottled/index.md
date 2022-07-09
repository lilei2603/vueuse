---
category: Utilities
alias: useThrottle, throttledRef
---

# refThrottled

使用节流修改响应式数据

## Usage

```js
import { refThrottled } from '@vueuse/core'

const input = ref('')
const throttled = refThrottled(input, 1000)
```

### Trailing

如果您不想查看尾随更改，请将第 3 个参数设置为 `false`（默认情况下为 `true`）：

```js
import { refThrottled } from '@vueuse/core'

const input = ref('')
const throttled = refThrottled(input, 1000, false)
```

### Leading

允许立即调用回调（在毫秒超时的前沿）。如果您不想要这种行为，请将第 4 个参数设置为 `false`（默认情况下为 `true`）：

```js
import { refThrottled } from '@vueuse/core'

const input = ref('')
const throttled = refThrottled(input, 1000, undefined, false)
```

## Recommended Reading

- [Debounce vs Throttle: Definitive Visual Guide](https://redd.one/blog/debounce-vs-throttle)
- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)
