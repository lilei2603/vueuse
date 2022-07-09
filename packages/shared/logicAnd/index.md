---
category: Utilities
alias: and
related: logicNot, logicOr
---

# logicAnd

响应式数据的 `与` 条件参考

## Usage

```ts
import { logicAnd } from '@vueuse/core'

const a = ref(true)
const b = ref(false)

whenever(logicAnd(a, b), () => {
  console.log('both a and b are now truthy!')
})
```
