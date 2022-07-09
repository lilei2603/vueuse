---
category: Utilities
related: resolveUnref
---

# resolveRef

将 value/ref/getter 标准化为响应式数据或计算属性。

## Usage

```ts
import { resolveRef } from '@vueuse/core'

const foo = ref('hi')

const a = resolveRef(0) // Ref<number>
const b = resolveRef(foo) // Ref<string>
const c = resolveRef(() => 'hi') // ComputedRef<string>
```
