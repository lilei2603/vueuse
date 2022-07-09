---
category: Utilities
alias: or
related: logicAnd, logicNot
---

# logicOr

响应式数据的 `或` 条件参考

## Usage

```ts
import { logicOr } from '@vueuse/core'

const a = ref(true)
const b = ref(false)

whenever(logicOr(a, b), () => {
  console.log('either a or b is truthy!')
})
```
