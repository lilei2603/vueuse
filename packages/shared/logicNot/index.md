---
category: Utilities
alias: not
---

# logicNot

响应式数据的 `非` 条件参考

## Usage

```ts
import { logicNot } from '@vueuse/core'

const a = ref(true)

whenever(logicNot(a), () => {
  console.log('a is now falsy!')
})
```
