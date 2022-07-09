---
category: Utilities
related: syncRefs
---

# syncRef

双向同步的响应式数据

## Usage

```ts
import { syncRef } from '@vueuse/core'

const a = ref('a')
const b = ref('b')

const stop = syncRef(a, b)

console.log(a.value) // a

b.value = 'foo'

console.log(a.value) // foo

a.value = 'bar'

console.log(b.value) // bar
```

单向

```ts
import { syncRef } from '@vueuse/core'

const a = ref('a')
const b = ref('b')

const stop = syncRef(a, b, { direction: 'rtl' })
```
